import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css"
import BackButton from "./BackButton";
import useUrlPosition from "../hooks/useUrlPosition";

export function convertToEmoji(countryCode) {
    const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

const BASE_URL = ""

function Form() {
    
    const [lat, lng] = useUrlPosition();
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState();
    const [emoji, setEmoji] = useState("");

    useEffect(() => {
        async function fetchCityData() {
            try {
                setIsLoadingGeocoding(true);
                const res = await fetch(`${BASE_URL}?latitude=${lat}&longi`);
                const data = await res.json();
                console.log(data);
                setCityName(data.city || data.locality || "");
                setCountry(data.countryName);
                setEmoji(convertToEmoji(data.countryCode))
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoadingGeocoding(false);
            }
        }
    }, []);

    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <input
                id="cityName" onChange={(e) => setCityName(e.target.value)}
                value={cityName} />
            </div>
            <div className={styles.row}>
                <lable htmlFor="date">When did you go to {cityName}?</lable>
                <input id="date" onChange={(e) => setNotes(e.target.value)} value={date} />
            </div>
            <div className={styles.row}>
                <lable htmlFor="notes">Notes about your trip to {cityName} </lable>
                <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes} />
            </div>
            <div className={styles.buttons}>
                    <Button type="primary">Add</Button>
                    <BackButton />
            </div>
        </form>
    )
}

export default Form;