import styles from "./SecondaryButton.module.css";

// White button with black border. Use prop to set text to display inside the button
// <SecondaryButton displayText=""></SecondaryButton>

export default function SecondaryButton(props) {
    return (
        <div id={styles['secondaryButton']}>
            {props.displayText}
        </div>
    );
}