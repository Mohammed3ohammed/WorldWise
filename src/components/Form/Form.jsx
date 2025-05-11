import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css"
import BackButton from "../Button/BackButton";
import useUrlPosition from "../../hooks/useUrlPosition";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";

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
                setGeocodingError("");
                const res = await fetch(`${BASE_URL}?latitude=${lat}&longi`);
                const data = await res.json();
                console.log(data);

                if(!data.countryCode) 
                    throw new Error("The dosen't seem to be a city. Click somewhere else 😉");

                setCityName(data.city || data.locality || "");
                setCountry(data.countryName);
                setEmoji(convertToEmoji(data.countryCode))
            } catch (err) {
                setGeocodingError(err.message)
            } finally {
                setIsLoadingGeocoding(false);
            }
        }
        fetchCityData();
    }, [lat , lng]);

    function handleSubmit(e) {
        e.preventDefault();
    }

    if (isLoadingGeocoding) return <Spinner />
    if (geocodingError) return <Message message="Start by clicking somewhere on the map" />

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
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