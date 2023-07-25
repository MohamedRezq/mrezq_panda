import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import i18n from "i18next";
//-----> Pages <--------------------------------------------------------------//
import {
  HomePage,
  LeadershipPage,
  About,
  CertificatesAndAwards,
  Contact,
} from "./pages";
//- END OF IMPORTS ----------------------------------------------------------//

function App() {
  const location = useLocation();
  const pageRef: any = useRef(null);
  //-----> Initial Load <----------------------------------------------------//
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const langDetector = location.pathname.split("/")[1]; // "en" || "ar"
    document
      .getElementsByTagName("html")[0]
      .setAttribute("lang", langDetector || "en");
    i18n.changeLanguage(langDetector);
  }, []);
  //-----> On Url Change <---------------------------------------------------//
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const langDetector = location.pathname.split("/")[1]; // "en" || "ar"
    document
      .getElementsByTagName("html")[0]
      .setAttribute("lang", langDetector || "en");
    i18n.changeLanguage(langDetector);
  }, [location]);
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  return (
    <div ref={pageRef} className="App">
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/en/leadership" element={<LeadershipPage />} />
        <Route path="/ar/leadership" element={<LeadershipPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/en/about" element={<About />} />
        <Route path="/ar/about" element={<About />} />
        <Route
          path="/certificates-and-awards"
          element={<CertificatesAndAwards />}
        />
        <Route
          path="/en/certificates-and-awards"
          element={<CertificatesAndAwards />}
        />
        <Route
          path="/ar/certificates-and-awards"
          element={<CertificatesAndAwards />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/en/contact" element={<Contact />} />
        <Route path="/ar/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
