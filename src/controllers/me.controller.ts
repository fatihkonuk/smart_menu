import { UserRepository } from "../repositories";
import { createError, ErrorTypes } from "../utils/createError";

export const getMe = async (req: any, res: any) => {
  const user = req.user;
  if (!user) {
    throw createError("User not found", ErrorTypes.NotFoundError);
  }
  res.status(200).json({ user });
};

export const updateMe = async (req: any, res: any) => {
  const { fullName, allergies, age, gender } = req.body;
  const user = req.user;
  if (!user) {
    throw createError("User not found", ErrorTypes.NotFoundError);
  }

  const editedUser = await UserRepository.updateById(user.id, {
    fullName,
    allergies,
    age,
    gender,
  });

  res.status(201).json({ user: editedUser });
};
