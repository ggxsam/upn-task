import React from "react";
import NameTag from "./NameTag";
import MainPage from "./mainPage";

const App = () => {
  return <div className="">
    <MainPage />

    <NameTag 
    name={"name"}
    position={"position"}
    description={"description"}
    email={"email"}
    />
  </div>;
};

export default App;
