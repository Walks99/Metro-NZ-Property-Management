// STYLES
import styles from "./Hero.module.css";

// COMPONENTS
import PrimaryButton from "../../../common-components/buttons/PrimaryButton";
import SecondaryButton from "../../../common-components/buttons/SecondaryButton";

import {NavLink} from 'react-router-dom';

export default function Hero() {
    return (
        <div id={styles['heroGrid']}>
            <div id={styles['heroContent']}>
                <h2>Unlock Your Dream Home Today</h2>
                <h3>Your home, your future</h3>
                <div id={styles['buttons']}>
                    {/* GRID THIS LATER ON TO ADD THE 26PX GAP WITHOUT RUINING LAYOUT */}

                    <SecondaryButton displayText="Property Management" width={"300px"} height={"50px"}></SecondaryButton>
                    <NavLink to="/propertyListing" style={{ textDecoration:'none' }}><PrimaryButton displayText="Find a Rental" width={"300px"} height={"50px"}></PrimaryButton></NavLink>

                </div>
            </div>
        </div>
    );
}