const jose = require("node-jose");
const fs = require("fs");
const path = require("path");

function checkFileExists(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1); // Exit the process with an error code
  }
}

async function getRSAPrivateKey(filename) {
  checkFileExists(filename);
  const keyPEM = fs.readFileSync(filename, "utf8");
  const keyParts = keyPEM.split("\n");
  const keyB64 = keyParts.slice(1, -2).join("");
  const keyDer = Buffer.from(keyB64, "base64");
  const key = await jose.JWK.asKey(keyDer, "pkcs8");
  return key.toJSON(true);
}

async function getRSAPublicKey(filename) {
  checkFileExists(filename); // Ensure file exists
  const cert = fs.readFileSync(filename, "utf8"); // Read as a string
  console.log("CERT Contents:\n", cert);
  const key = await jose.JWK.asKey(cert, "pem"); // Specify "pem" format
  return key.toJSON(true);
}

async function jweEncrypt(publicKey, payload) {
  const jwk = await jose.JWK.asKey(publicKey);
  const jwe = await jose.JWE.createEncrypt(
    { format: "compact", fields: { alg: "RSA-OAEP-256", enc: "A256GCM" } },
    jwk
  )
    .update(payload)
    .final();
  return jwe;
}

async function jweDecrypt(privateKey, jweEncryptedPayload) {
  const jwk = await jose.JWK.asKey(privateKey);
  const jwe = await jose.JWE.createDecrypt(jwk).decrypt(jweEncryptedPayload);
  return jwe.plaintext.toString();
}

async function jwSign(privateKey, payloadToSign) {
  const jwk = await jose.JWK.asKey(privateKey);
  const jws = await jose.JWS.createSign(
    { format: "compact", fields: { alg: "RS256" } },
    jwk
  )
    .update(payloadToSign)
    .final();
  return jws;
}

async function jwVerify(publicKey, signedPayloadToVerify) {
  const jwk = await jose.JWK.asKey(publicKey);
  const jws = await jose.JWS.createVerify(jwk).verify(signedPayloadToVerify);
  return {
    isSignatureValid: true,
    payloadAfterVerification: jws.payload.toString(),
  };
}

async function jweEncryptAndSign(
  publicKeyToEncrypt,
  privateKeyToSign,
  payloadToEncryptAndSign
) {
  const jweEncrypted = await jweEncrypt(
    publicKeyToEncrypt,
    payloadToEncryptAndSign
  );
  const jwsSigned = await jwSign(privateKeyToSign, jweEncrypted);
  return jwsSigned;
}

async function jweVerifyAndDecrypt(
  publicKeyToVerify,
  privateKeyToDecrypt,
  payloadToVerifyAndDecrypt
) {
  const jwsVerified = await jwVerify(
    publicKeyToVerify,
    payloadToVerifyAndDecrypt
  );
  if (!jwsVerified.isSignatureValid) {
    return null;
  } else {
    const jweDecrypted = await jweDecrypt(
      privateKeyToDecrypt,
      jwsVerified.payloadAfterVerification
    );
    return jweDecrypted;
  }
}

async function main() {
  const axisCertPub = await getRSAPublicKey("public.pem");
  const clientPrivKey = await getRSAPrivateKey("private.pem");

  const plainJSONRequest =
    '{"Data":{ "mobileNumber": "483249c1d0e10d0762ff0ec55365a0f79e*****2f1f1ab08f2b2c2a70b7aaa3b"},"Risk":{} }';
  console.log("Plain Request     =", plainJSONRequest);

  const encryptedString = await jweEncryptAndSign(
    axisCertPub,
    clientPrivKey,
    plainJSONRequest
  );
  console.log("Encrypted Request =", encryptedString);

  const decrypted = await jweVerifyAndDecrypt(
    axisCertPub,
    clientPrivKey,
    encryptedString
  );
  console.log("Decrypted Request =", decrypted);
}

main();
