// STYLES
import styles from "./Home.module.css";

// CHILD COMPONENTS
import Navbar from "../../common-components/navbar/Navbar";
import Footer from "../../common-components/footer/Footer";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";

// FURTHER IMPORTS

export default function Home() {
    return (
        <div id={styles['home']}>
            <Navbar></Navbar>
            <Hero></Hero>
            <VideoSection></VideoSection>

            <Footer></Footer>
        </div>
    )
}