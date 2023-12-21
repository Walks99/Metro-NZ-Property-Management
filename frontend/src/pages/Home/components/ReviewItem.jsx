import styles from "./ReviewItem.module.css";

// Iconify for the star icons
import { Icon } from "@iconify/react";

export default function ReviewItem(props) {
    // Expected props:
    // numStars = the number of stars from the review
    // revDate = date the review was made, unchecked during prototype
    // revTitle = Title of review
    // revText = Text of review
    // author = name of reviewer

    // I feel like I went way too complicated for a prototype.
    // We take the number of stars required as a prop and use it to populate an array of icons.
    // Similar to mapping an array of components but because its all identical icons, a for loop seems simpler
    const starArray = [];

    for (let i = 0; i < props.numStars; i++) {
        starArray.push(<Icon key={i} icon="ic:baseline-star" color="#e73336" width="40" height="40" />);
    }

    return (
        <div id={styles['review']}>
            <div id={styles['reviewContent']}>
                <div id={styles['stars']}>
                    {starArray}
                </div>
                <div id={styles['date']}>{props.revDate}</div>
                <div id={styles['title']}>{props.revTitle}</div>
                <div id={styles['main']}>{props.revText}</div>
            </div>
            <div id={styles['author']}>{props.author}</div>
        </div>
    );
}