import { styles } from 'Spinner.module.css';

    const formatDate = (date) => {
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date))
    }

function CityItem() {
    const {cityName, emoji, data} = city;
    return (
        <li className={styles.cityItems}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{data}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    )
}

export default CityItem;