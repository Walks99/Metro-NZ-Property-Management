import styles from "./HomePageButton.module.css";

// Import icons from iconify
import { Icon } from '@iconify/react';

export default function HomePageButton(props) {
    // Refer to Iconify to find which icon to pass to this button.
    // ex. <Icon icon="material-symbols-light:real-estate-agent-outline" /> so when calling the button we send
    // <HomePageButton icon="material-symbols-light:real-estate-agent-outline">
    const requiredIcon = props.icon;

    return (
        <div id={styles['hpButton']}>
            <div id={styles['icon']}>
                <Icon icon={requiredIcon} />
            </div>
            <div id={styles['text']}>
                {props.displayText}
            </div>
        </div>
    );
}