import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Styles from "../styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Portfolio;
