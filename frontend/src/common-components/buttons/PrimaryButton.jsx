import styles from "./PrimaryButton.module.css";

// Red coloured button. Use prop to set text to display inside the button
// <PrimaryButton displayText=""></PrimaryButton>

export default function PrimaryButton(props) {
    return (
        <div id={styles['primaryButton']}>
            {props.displayText}
        </div>
    );
}