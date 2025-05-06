import { useState } from "react";


export function convertToEmoji(countryCode) {
    const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

function Form() {
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState();

    return (
        <form className="">
            <div>
                <label htmlFor="cityName">City name</label>
                <input
                id="cityName" onChange={(e) => setCityName(e.target.value)}
                value={cityName} />
            </div>
            <div className="">
                <lable htmlFor="notes">Notes about your trip to {cityName} </lable>
                <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes} />
            </div>
            <div className="">
                    <button>Add</button>
                    <button>&larr; Back</button>
            </div>
        </form>
    )
}

export default Form;