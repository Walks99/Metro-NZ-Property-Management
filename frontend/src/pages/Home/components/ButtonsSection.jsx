import styles from "./ButtonsSection.module.css";

// Import common button
import HomePageButton from "../../../common-components/buttons/HomePageButton";

export default function ButtonsSection(props) {
    return (
        <div id={styles['buttonsGrid']}>
            <HomePageButton displayText="Identify Investment Opportunities" icon=""></HomePageButton>
        </div>
    );
}