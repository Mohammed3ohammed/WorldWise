import { useState } from "react";
import styles from "./Map.module.css";

function Map() {
    const [searchParams, setSearchParams] = useState();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    
    return (
        <div className={styles.mapContainer}>
        <h1>Map</h1>
        <h2>Poition: {lat}, {lng}</h2>
        <button
        onClick={() => {
            setSearchParams({lat: 23, lng: 50})
        }}
        >Chinge pos</button>
        </div>
    )
}

export default Map;