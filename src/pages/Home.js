import React from "react";
import Navbar from "../components/Navbar";
import Story from "../components/Story";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Story />
      <Posts />
      <Footer />
    </>
  );
}

export default Home;
