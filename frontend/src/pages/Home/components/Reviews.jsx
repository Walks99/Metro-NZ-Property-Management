import styles from "./Reviews.module.css";

// Import dependencies
import { Icon } from '@iconify/react';
import { useState } from "react";

import ReviewItem from "./ReviewItem";

export default function Reviews() {

    // Carousel handling
    // In future this array could be populated with a fetch passing values into the review items as props
    const reviewSlides = [
        <ReviewItem numStars={5} revDate='16/4/20' revTitle='Great service' author='Mike J' revText='I rent from Metro NZ and they have been super awesome. I would highly recommend renting from this company. Excellent service and friendly staff.'></ReviewItem>,
        <ReviewItem numStars={5} revDate='28/10/2023' revTitle='Very responsive' author='Tim H.' revText='Metro NZ is a great rental management company. They respond to questions and maintenance requests very quickly. There employees are very helpful and efficient and reliable.'></ReviewItem>,
        <ReviewItem numStars={5} revDate='16/5/2023' revTitle='Great service' author='Manua P.' revText='Metro NZ is fantastic! I lease my condo through this firm. Very easy to work with and so efficient and expedient.'></ReviewItem>
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePrevArrow() {
        if(currentIndex === 0) {
            setCurrentIndex(reviewSlides.length -1);
        }
        else {
            setCurrentIndex(currentIndex-1);
        }
    }

    function handleNextArrow() {
        if(currentIndex === reviewSlides.length-1) {
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex+1);
        }
    }

    return (
        <div id={styles['reviews']}>
            <div id={styles['title']}>
                <h1>From Our Customers and Clients</h1>
            </div>

            <div id={styles['carouselContainer']}>
                <div className={styles.carouselArrow} onClick={handlePrevArrow}><Icon icon="ep:arrow-left" width="40" height="60"></Icon></div>

                <div id={styles['carouselBox']}>
                    <div id={styles['carousel']} >
                        {reviewSlides.map((review, index) => (
                            <div 
                            key={index} 
                            style={{ transform: `translateX(-${currentIndex*100}%)`,
                            transition: `transform 0.5s ease-out`}}>
                                {review}
                            </div>
                        ))}
                    </div>
                </div>

                <div class={styles.carouselArrow} onClick={handleNextArrow}><Icon icon="ep:arrow-right" width="40" height="60"></Icon></div>
            </div>
        </div>
    );
}