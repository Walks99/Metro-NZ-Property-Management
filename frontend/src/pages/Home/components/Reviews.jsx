import styles from "./Reviews.module.css";

// Import dependencies
import { Icon } from '@iconify/react';
import { useState } from "react";

export default function Reviews() {
    // Use state for handling carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div id={styles['reviews']}>
            <div id={styles['title']}>
                <h1>From Our Customers and Clients</h1>
            </div>

            <div id={styles['carouselContainer']}>
                <Icon icon="ep:arrow-left" width="22" height="38"></Icon>
                CAROUSEL
                <Icon icon="ep:arrow-right" width="22" height="38"></Icon>
            </div>
        </div>
    );
}