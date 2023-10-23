import jwt from "jsonwebtoken";

const maxAge = 86_400_000;

export function createToken(id) {
  return jwt.sign({ id }, "secret", {
    expiresIn: maxAge,
  });
}
