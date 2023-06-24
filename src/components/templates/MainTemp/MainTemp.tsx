import React, { ReactElement } from "react";
import { Header, Footer } from "../../organisms";

type MainTempProps = {
  children: ReactElement<any, any>;
};

const MainTemp = ({ children }: MainTempProps) => {
  return (
    <>
      <Header />
      <main className="w-100 h-100 font-medium mb-5">
        {children !== undefined ? children : <></>}
      </main>
      <Footer />
    </>
  );
};

export default MainTemp;
