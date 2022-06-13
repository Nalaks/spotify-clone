import AuthForm from "../components/authForm";
import { AuthFC } from "../types/types";

const Signup: AuthFC = () => {
  return <AuthForm mode="signup" />;
};

Signup.authPage = true;

export default Signup;
