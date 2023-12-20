import styles from "./ButtonsSection.module.css";

// Import common button
import HomePageButton from "../../../common-components/buttons/HomePageButton";

// Currently I am using placeholders icons from Iconify. These buttons could be updated with images from the UX team later

export default function ButtonsSection(props) {
    return (
        <div id={styles['buttonsContainer']}>
            <div id={styles['buttonsGrid']}>
                <HomePageButton displayText="Identify Investment Opportunities" icon="mdi:chart-areaspline"></HomePageButton>
                <HomePageButton displayText="Finding Tenants" icon="game-icons:receive-money"></HomePageButton>
                <HomePageButton displayText="Renovation Support" icon="mdi:house-edit-outline"></HomePageButton>
                <HomePageButton displayText="Body Corporate and Building Management" icon="fluent-mdl2:workforce-management"></HomePageButton>
                <HomePageButton displayText="Sales of Tenanted Properties" icon="pepicons-pencil:handshake-circle"></HomePageButton>
                <HomePageButton displayText="Rental Properties" icon="ph:house-line"></HomePageButton>
            </div>
        </div>
    );
}