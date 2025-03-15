function findQibla() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("qibla-result").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // Qibla calculation
    const qiblaLongitude = 39.8262; // Longitude of the Kaaba
    const qiblaLatitude = 21.4225; // Latitude of the Kaaba

    const qiblaDirection = Math.atan2(
        Math.sin(qiblaLongitude - longitude) * Math.cos(qiblaLatitude),
        Math.cos(latitude) * Math.sin(qiblaLatitude) - Math.sin(latitude) * Math.cos(qiblaLatitude) * Math.cos(qiblaLongitude - longitude)
    );

    const qiblaDegrees = (qiblaDirection * 180 / Math.PI + 360) % 360;

    document.getElementById("qibla-result").innerHTML = `Qibla direction: ${qiblaDegrees.toFixed(2)}° from North.`;
}

// Function to fetch prayer times (dummy data for demonstration)
function fetchPrayerTimes() {
    // In a real application, you would fetch this data from an API
    const prayerTimes = {
        Fajr: "5:00 AM",
        Dhuhr: "12:30 PM",
        Asr: "3:45 PM",
        Maghrib: "6:15 PM",
        Isha: "7:30 PM"
    };

    let prayerTimesHtml = "<ul>";
    for (const [prayer, time] of Object.entries(prayerTimes)) {
        prayerTimesHtml += `<li>${prayer}: ${time}</li>`;
    }
    prayerTimesHtml += "</ul>";

    document.getElementById("prayer-times-result").innerHTML = prayerTimesHtml;
}

// Call the fetchPrayerTimes function on page load
window.onload = function() {
    fetchPrayerTimes();
};