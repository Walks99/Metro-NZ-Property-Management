import styles from "./VideoSection.module.css";

// YOUTUBE FOR VIDEO EMBED
import YouTube from 'react-youtube';

export default function VideoSection() {
    const introVideo = "q3eMMRwO5wA";

    // Options for the YouTube player
    const videoOptions = {
        height: '511',
        width: '767',
    };

    return (
        <div id={styles['videoSec']}>
            <h4>What We Do</h4>
            <h5>Property Management Throughout Auckland and Surrounding Areas</h5>
            <div id={styles['videoContainer']}>
                <YouTube videoId={introVideo} opts={videoOptions}></YouTube>
            </div>
        </div>
    );
}