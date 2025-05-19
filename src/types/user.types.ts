export type User = {
  id: string;
  fullName: string;
  username: string;
  password: string;
  avatar: string;
  allergies: string;
  gender?: 0 | 1;
  age?: number;
  lastLogin: Date;
  sessionToken: {
    token: string;
    expiresAt: number;
  };
  createdAt: Date;
  updatedAt: Date;
};


export type UserCreate = {
  fullName: string;
  username: string;
  password: string;
  allergies: string;
  gender?: 0 | 1 | 2;
  age?: number;
};

export type UserLogin = {
  username: string;
  password: string;
};
export type UserResponse = {
  id: string;
  fullName: string;
  username: string;
  avatar: string;
  age: number;
  gender: number;
};