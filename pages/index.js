import Head from "next/head";
import styles from "../styles/Home.module.css";

//Components
import NavBar from "../components/navbar";
import Background from "../components/index/backgroundImg";
import Greeting from "../components/index/greeting";
import About from "../components/index/about";
import BackGround from "../components/index/background";
import Rocky from "../components/index/rocky";

//Pages
import Experience from "./experience";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div className="d-flex flex-column my-3 col-12 ">
        <div className="d-flex flex-column justify-content-center align-items-center flex-sm-column flex-md-column flex-lg-row">
          <Background />
          <Greeting />
        </div>
        <div className="mx-3 my-3">
          <About />
          <BackGround />
          <Rocky />
        </div>
      </div>
    </>
  );
}
