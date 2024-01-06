import styles from "./PrimaryButton.module.css";

// Red coloured button. Use prop to set text to display inside the button
// <PrimaryButton displayText=""></PrimaryButton>

export default function PrimaryButton(props) {
  // const customSize = {
  //     width: `${props.width}`,
  //     height: `${props.height}`
  // }; -----------------------------> This didn't seem needed, but uncomment if it is - BW

  const handleClick = () => {
    // Call your onClick function
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div
      id={styles["primaryButton"]}
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        marginTop: `${props.marginTop}`,
        marginBottom: `${props.marginBottom}`,
        marginRight: `${props.marginRight}`,
      }}
      onClick={handleClick}
    >
      {props.displayText}
    </div>
  );
}
