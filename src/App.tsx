import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//-----> Pages <-------------------------------------------------//
import { HomePage } from "./pages";
//- END OF IMPORTS -----------------------------------------//

function App() {
  const location = useLocation();
  useEffect(() => {
    const langDetector = location.pathname.split("/")[1]; // "en" || "ar"
    document
      .getElementsByTagName("html")[0]
      .setAttribute("lang", langDetector || "en");
    i18n.changeLanguage(langDetector);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
