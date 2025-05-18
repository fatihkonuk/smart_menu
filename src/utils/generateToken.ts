import crypto from "crypto";

const TOKEN_EXPIRATION_MS = 60 * 60 * 1000 * 24; // 24 saat (ms cinsinden)

export default () => {
  return {
    token: crypto.randomBytes(16).toString("hex"),
    expiresAt: Date.now() + TOKEN_EXPIRATION_MS,
  };
};
