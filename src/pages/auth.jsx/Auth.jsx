import { useState } from "react";
import { SignUp } from "../signup/SignUp";

import { Logout } from "../logout/LogOut";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleSignup = (userEmail, userPassword) => {
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    alert("Signup successful! You can now log in.");
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    setEmail("");
  };

  return (
    <div className="">
      {!isLoggedIn ? (
        <>
          <SignUp onSignup={handleSignup} />
        </>
      ) : (
        <Logout email={email} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default Auth;
