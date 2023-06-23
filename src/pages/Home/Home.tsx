import React, { useEffect } from "react";
import MainTemp from "../../components/templates/MainTemp";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Panda";
  }, []);

  return (
    <MainTemp>
      <div>Home Page</div>
    </MainTemp>
  );
};

export default Home;
