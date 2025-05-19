import { UserRepository } from "../repositories";
import { createError, ErrorTypes } from "../utils/createError";

export default (required: boolean = false) => {
  return async (req: any, res: any, next: any) => {
    const bearer = req.headers["authorization"];
    const token = bearer?.split(" ")[1];

    if (!token) {
      if (required) {
        throw createError("Token is required", ErrorTypes.UnauthorizedError);
      } else {
        next();
      }
      return;
    }

    const user = await UserRepository.getByToken(token);

    if (!user) {
      throw createError("Invalid token", ErrorTypes.UnauthorizedError);
    }
    req.user = user;
    next();
  };
};
