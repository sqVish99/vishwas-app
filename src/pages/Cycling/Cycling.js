import React, { useEffect, useState } from 'react';
import './Cycling.css';
import testData from './sampleData.json';
import stravaLogo from '../../assets/images/strava-logo.png';

const Cycling = () => {
    const [data, setData] = useState(null);

    function TruncateDecimal(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    useEffect(() => {
        const athleteId = process.env.REACT_APP_ATHLETE_ID;
        const token = process.env.REACT_APP_TOKEN;

        fetch(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <section id="Journey">
            <div className="container cycling-container">
                <h1>My Cycling Stats!</h1>
                <h2>My longest ride: {TruncateDecimal((data ? data.biggest_ride_distance : testData.biggest_ride_distance) * 0.621371 / 1000)} miles</h2>
                <h2>My biggest climb: {TruncateDecimal((data ? data.biggest_climb_elevation_gain : testData.biggest_climb_elevation_gain) * 3.28084)} feet</h2>
                <h3>Some cool stats...</h3>
                <h3>Number of rides: {data ? data.all_ride_totals?.count : testData.all_ride_totals?.count}</h3>
                <h3>Distance covered: {TruncateDecimal((data ? data.all_ride_totals?.distance : testData.all_ride_totals?.distance) * 0.621371 / 1000)} miles</h3>
                <h3>Time indulged: {TruncateDecimal((data ? data.all_ride_totals?.moving_time : testData.all_ride_totals?.moving_time) / 3600)} hours</h3>
                <h3>Elevation gained: {TruncateDecimal((data ? data.all_ride_totals?.elevation_gain : testData.all_ride_totals?.elevation_gain) * 3.28084)} feet</h3>
                <span>{`Check out my `}
                    <a className='strava-link' href='https://www.strava.com/athletes/77010414' target="_blank" rel="noopener noreferrer">
                        <img className='strava-logo' alt="strava" src={stravaLogo} />
                    </a>
                    {` profile!`}
                </span>
            </div>
        </section>
    );
};

export default Cycling;