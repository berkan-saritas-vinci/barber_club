
interface User {
  username: string;
  password: string;
}

interface AuthenticatedUser {
  username: string;
  token: string;
}

type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

interface AppContext {
  registerUser: (newUser: User) => Promise<void>;
  loginUser: (user: User) => Promise<void>;
}

export type {
  User,
  AuthenticatedUser,
  MaybeAuthenticatedUser,
  AppContext,
};
