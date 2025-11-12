import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, type AuthProviderProps } from "react-oidc-context";
import { ThemeProvider } from "@hooks/useTheme";
import { UserProvider } from "@hooks/UserContext";
import App from "./App";
import "./index.css";

// Redirect URI must match exactly one of your Cognito allowed callback URLs
const redirectUri = `${window.location.origin}/home`;

// Cognito OIDC configuration
const cognitoAuthConfig: AuthProviderProps = {
  authority: "https://us-east-1xillukbyv.auth.us-east-1.amazoncognito.com",
  client_id: "1sel5r7k42ls80ubk82fsv5uel",
  redirect_uri: redirectUri,
  response_type: "code",
  scope: "openid email phone",
  loadUserInfo: false,
};

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <UserProvider>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
