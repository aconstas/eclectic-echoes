import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <h1 id={styles.title}>Eclectic Echoes</h1>
            <h2 className={styles.heading}>Where Trend Meets Unique!</h2>
            <p className={styles.text}>Welcome to Eclectic Echoes, the ultimate destination for the trendsetters and style seekers! Are you tired of the same old, same old? Looking for something that sparks joy and screams "you"? You've just hit the jackpot! Our carefully curated collection of trendy, out-of-the-box items is designed to cater to the hipster soul in you. We believe in being different, because normal is just a setting on the dryer!</p>

            <h2 className={styles.heading}>Unleash Your Inner Cool with Our Exclusive Collections</h2>
            <p className={styles.text}>From eco-friendly gadgets that make your friends go "wow" to fashion-forward apparel that breaks the mold, we've got it all. Our exclusive collections are handpicked to ensure you stand out in the best way possible. We're constantly scouring the coolest underground scenes to bring you the latest and greatest - because why blend in when you were born to stand out?</p>

            <h2 className={styles.heading}>Not Just Products, But Experiences</h2>
            <p className={styles.text}>Every item at Eclectic Echoes comes with a story, a journey. We don't just sell products; we deliver experiences that resonate with your individualistic spirit. Our blog features stories behind our products, tips on trendsetting, and much more. Connect with us and be part of an experience that redefines shopping.</p>
        </>
    );
}