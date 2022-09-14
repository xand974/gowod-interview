export type UserModel = {
  username: string;
  email: string;
  fullName?: string;
  password: string;
  isAdmin: boolean;
  isSubscribed: boolean;
};
