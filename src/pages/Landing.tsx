import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { debugMode } from "@/dataset/dataset";
import icon from "@assets/SkyChat-logo.png";
import "@pages/styles/Landing.css";

const Landing: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignin = (): void => {
    console.log("Sign-in clicked");
    console.log("Debug Mode:", debugMode);

    if (debugMode) {
      console.log("Navigating to /home (debug mode)");
      navigate("/home");
    } else {
      console.log("Triggering Cognito signin redirect...");
      auth.signinRedirect().catch((error) => console.error("Signin error:", error));
    }
  };

  const handleSignup = (): void => {
    console.log("Sign-up clicked");
    console.log("Debug Mode:", debugMode);

    if (debugMode) {
      console.log("Navigating to /home (debug mode)");
      navigate("/home");
    } else {
      console.log("Triggering Cognito signup redirect...");
      auth.signinRedirect({ prompt: "signup" }).catch((error) =>
        console.error("Signup error:", error)
      );
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
