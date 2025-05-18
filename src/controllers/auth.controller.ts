import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserRepository } from "../repositories";
import generateToken from "../utils/generateToken";
import { User } from "../types/user.types";
import { createError, ErrorTypes } from "../utils/createError";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user: User = await UserRepository.getByUsername(username);

  if (!user) {
    throw createError("User not found", ErrorTypes.NotFoundError);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw createError(
      "Invalid username or password",
      ErrorTypes.UnauthorizedError
    );
  }

  const { token, expiresAt } = generateToken();
  await UserRepository.updateById(user.id, {
    sessionToken: { token, expiresAt },
  });

  res.status(200).json({ token, user });
};

export const register = async (req: Request, res: Response) => {
  const { fullName, username, password, age, gender } = req.body;
  if (!fullName || !username || !password) {
    throw createError("Full name, username, and password are required", ErrorTypes.BadRequestError);
  }
  const existingUser = await UserRepository.getByUsername(username);

  if (existingUser) {
    throw createError("Username already exists", ErrorTypes.ConflictError);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await UserRepository.create({
    fullName,
    username,
    password: hashedPassword,
    age,
    gender,
  });

  res.status(201).json({ user: newUser });
};
