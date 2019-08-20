// import { User } from "./User";

export interface Credentials {
  // Register Credentials
  identityNumber: String,
  email: String,
  password: String,
  password2: String,
  userChecked: Boolean;

  // Login Credentials
  success: Boolean;
  token: String
  user: any
}
