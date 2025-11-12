import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { debugMode } from "@/dataset/dataset";
import icon from "@assets/SkyChat-logo.png";
import "@pages/styles/Landing.css";

const Landing: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  // Handle sign-in button click
  const handleSignin = async (): Promise<void> => {
    console.log("Sign-in clicked. Debug mode:", debugMode);

    if (debugMode) {
      navigate("/home");
    } else {
      try {
        await auth.signinRedirect();
        console.log("Signin redirect triggered.");
      } catch (error) {
        console.error("Signin error:", error);
      }
    }
  };

  // Handle sign-up button click
  const handleSignup = async (): Promise<void> => {
    console.log("Sign-up clicked. Debug mode:", debugMode);

    if (debugMode) {
      navigate("/home");
    } else {
      try {
        await auth.signinRedirect({ prompt: "signup" });
        console.log("Signup redirect triggered.");
      } catch (error) {
        console.error("Signup error:", error);
      }
    }
  };

  return (
    <div className="landing-pg">
      <div className="landing-bg" />
      <img src={icon} alt="SkyChat Logo" />
      <span>
        <h1>Sky</h1> <h2>Chat</h2>
      </span>

      <div className="btn-container">
        <button onClick={handleSignin}>Sign in</button>
        <div>
          <button onClick={handleSignup}>Sign up</button>
          <p>*Create Account</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
