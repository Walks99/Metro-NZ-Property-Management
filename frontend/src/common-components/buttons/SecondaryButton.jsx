import styles from "./SecondaryButton.module.css";

// White button with black border. Use prop to set text to display inside the button
// <SecondaryButton displayText=""></SecondaryButton>

export default function SecondaryButton(props) {
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
      id={styles["secondaryButton"]}
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
