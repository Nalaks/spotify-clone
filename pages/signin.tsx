import AuthForm from "../components/authForm";
import { AuthFC } from "../types/types";

const Signin: AuthFC = () => {
  return <AuthForm mode="signin" />;
};

Signin.authPage = true;

export default Signin;
