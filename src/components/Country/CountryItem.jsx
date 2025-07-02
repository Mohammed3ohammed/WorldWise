import styles from "./CountryItem.module.css";


function CountryItem() {
    return (
        <li className={styles.CountryItem}>
            <span>{country.emoji}</span>
            <span>{country.country}</span>
        </li>
    );
}

export default CountryItem;