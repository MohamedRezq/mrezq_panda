import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import i18n from "i18next";
//-----> Pages <-------------------------------------------------//
import { HomePage, LeadershipPage } from "./pages";
import { AboutPage } from "./pages/About";
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
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/en/leadership" element={<LeadershipPage />} />
        <Route path="/ar/leadership" element={<LeadershipPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/en/about" element={<AboutPage />} />
        <Route path="/ar/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
