import React from "react";
import CityLists from "../../components/Home/CityLists";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import HotelList from "../../components/Home/HotelLists";
import Hotels from "../../components/Home/Hotels";

import NavBar from "../../components/Home/NavBar";
import SignUp from "../../components/Home/SingUp";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <CityLists></CityLists>
      <HotelList></HotelList>
      <Hotels></Hotels>
      <SignUp></SignUp>
      <Footer></Footer>
    </div>
  );
};

export default Home;
