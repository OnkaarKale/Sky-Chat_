import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-oidc-context";
import { ThemeProvider } from "@hooks/useTheme";
import { UserProvider } from "@hooks/UserContext.tsx";
import App from "./App.tsx";
import "./index.css";

// 🔥 FIXED: Use static redirect URLs for Cognito (dynamic origins NOT allowed)
const cognitoAuthConfig = {
  authority: "https://us-east-1xillukbyv.auth.us-east-1.amazoncognito.com",
  client_id: "1sel5r7k42ls80ubk82fsv5uel",

  // 🔥 Your Cloudflare Worker domain
  redirect_uri: "https://sky-chat.onkaarkale.workers.dev/home",
  post_logout_redirect_uri: "https://sky-chat.onkaarkale.workers.dev/",

  response_type: "code",
  scope: "openid email phone",

  automaticSilentSignin: false,
  loadUserInfo: true,
};

createRoot(document.getElementById("root")!).render(
  <AuthProvider {...cognitoAuthConfig}>
    <UserProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </UserProvider>
  </AuthProvider>
);
