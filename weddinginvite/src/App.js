import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Utils/AuthContext"; 
import { LanguageProvider } from "./Utils/Language/LanguageContext";
import AppRoutes from "./Utils/Routes/Routes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <div className="app-wrapper">
            <AppRoutes />
          </div>
        </LanguageProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
