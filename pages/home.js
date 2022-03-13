import React from "react";
import HomeScreen from "../Screens/Homescreen";
import AuthWrapper from "../Component/AuthWrapper";

const Home = () => {
  return (
    <AuthWrapper>
      <HomeScreen />
    </AuthWrapper>
  );
};
export default Home;
