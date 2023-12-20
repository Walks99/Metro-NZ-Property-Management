import styles from "./SecondaryButton.module.css";

// White button with black border. Use prop to set text to display inside the button
// <SecondaryButton displayText=""></SecondaryButton>

export default function SecondaryButton(props) {
    const customSize = {
        width: `${props.width}`,
        height: `${props.height}`
    };

    return (
        <div 
            id={styles['secondaryButton']} 
            style={{width: `${props.width}px`, height: `${props.height}px`}}>

            {props.displayText}
        </div>
    );
}