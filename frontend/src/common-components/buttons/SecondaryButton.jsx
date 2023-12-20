import styles from "./SecondaryButton.module.css";

// White button with black border. Use prop to set text to display inside the button
// <SecondaryButton displayText=""></SecondaryButton>

export default function SecondaryButton(props) {
    // const customSize = {
    //     width: `${props.width}`,
    //     height: `${props.height}`
    // }; -----------------------------> This didn't seem needed, but uncomment if it is - BW

    return (
        <div 
            id={styles['secondaryButton']} 
            style={{width: `${props.width}px`, height: `${props.height}px`, marginTop: `${props.marginTop}px`, marginBottom: `${props.marginBottom}px`}}>

            {props.displayText}
        </div>
    );
}