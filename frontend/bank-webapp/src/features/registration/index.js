import "./registration.css";
import SignInForm from "./components/SignInForm";
import RegistrationForm from "./components/RegistrationForm";
import Layout from "./components/Layout";
import { useState } from "react";

function Registration() {
  const [signIn, setSignIn] = useState(true);

  const child = signIn ? (
    <SignInForm switch={setSignIn} />
  ) : (
    <RegistrationForm switch={setSignIn} />
  );

  return <Layout signIn={signIn}>{child}</Layout>;
}

export default Registration;
