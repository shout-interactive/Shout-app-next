import React from "react";
import HomeScreen from "../Screens/Homescreen";

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL__REACT_APP_API_URL);
  return <HomeScreen />;
};
export default Home;
