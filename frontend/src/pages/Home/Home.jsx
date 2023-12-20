// STYLES
import styles from "./Home.module.css";

// CHILD COMPONENTS
import Hero from "./components/Hero";

// FURTHER IMPORTS

export default function Home() {
    return (
        <div id={styles['home']}>
            <Hero></Hero>
        </div>
    )
}