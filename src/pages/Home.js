import React, { useEffect, useState } from "react";
import AgriTools from "../components/AgriTools";
import Roadmap from "../components/Roadmap";
import ImpactStats from "../components/ImpactStats";
import Testimonials from "../components/Testimonials";

function Home() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Detecting Location...");
  const API_KEY = "8d0d89b87c98f6c5315cec572be6d1dc";

  // 🌾 Season Calculation 
  const getSeason = () => {
    const month = new Date().getMonth() + 1;
    if (month === 12 || month === 1 || month === 2) return "Winter";
    if (month >= 3 && month <= 5) return "Summer";
    if (month >= 6 && month <= 9) return "Monsoon";
    return "Post-Monsoon";
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          )
            .then((res) => res.json())
            .then((data) => {
              // Extract rainfall carefully
              const rainfall = data.rain ? (data.rain["1h"] || 0) : 0;

              const enhancedWeather = {
                ...data,
                rainfall: rainfall.toFixed(1), // Keeps it clean (e.g., 1.2mm)
                season: getSeason()
              };

              setWeather(enhancedWeather);
              setLocation(`${data.name}, ${data.sys.country}`);
            })
            .catch(() => setLocation("Weather update failed"));
        },
        () => setLocation("Location access denied")
      );
    }
  }, []);

  return (
    <div className="home-wrapper">
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="home-bg-animation">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div>--- NEWS TICKER ---</div>
      <div className="news-ticker-bar">
        <div className="animate-ticker">
          <span className="ticker-item"><span className="live-dot"></span> Market Alert: Wheat prices up by 5%</span>
          <span className="ticker-item">🚜 Expert Tip: Ideal soil moisture for sowing is 60-70%</span>
          <span className="ticker-item">🌦️ Weather: Light showers expected this weekend</span>
          <span className="ticker-item">💰 Subsidy: Solar pump registration is OPEN</span>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="hero-container">
        <div className="hero-text">
          <h1>Smart Tools for <br /><span className="text-highlight">Modern Farmers</span></h1>
          <p className="hero-subtitle">
            The all-in-one AI platform to monitor soil health, predict yields, 
            and secure your harvest with digital precision.
          </p>
          <div className="hero-btns">
            <button className="btn-main">Start Field Scan</button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000"
            alt="Smart Farming"
            className="main-hero-img"
          />
          <div className="floating-badge">AI Powered</div>
        </div>
      </section>

      {/* --- WEATHER SECTION --- */}
      <section className="weather-container">
        <div className="weather-card">
          {weather ? (
            <>
              <div className="weather-main">
                <div className="weather-icon-anim">
                  {weather.weather[0].main === "Clouds" && "☁️"}
                  {weather.weather[0].main === "Rain" && "🌧️"}
                  {weather.weather[0].main === "Clear" && "☀️"}
                  {["Haze", "Mist", "Fog"].includes(weather.weather[0].main) ? "🌫️" : "🌦️"}
                </div>
                <div>
                  <div className="weather-temp">{Math.round(weather.main.temp)}°C</div>
                  <div className="weather-location">
                    <span className="status-indicator">●</span> {location}
                  </div>
                  <div className="geo-coords">
                    LAT: {weather.coord.lat.toFixed(2)} | LON: {weather.coord.lon.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="weather-stats">
                <div className="stat-item">
                  <span className="stat-val">{weather.main.humidity}%</span>
                  <span className="stat-label">Humidity</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">{weather.rainfall} mm</span>
                  <span className="stat-label">Rainfall</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">{weather.season}</span>
                  <span className="stat-label">Season</span>
                </div>
              </div>

              <button className="btn-weather" onClick={() => window.location.reload()}>
                Refresh
              </button>
            </>
          ) : (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>{location}</p>
            </div>
          )}
        </div>
      </section>

      {/* --- COMPONENTS --- */}
      <AgriTools />
      <Roadmap />
      <ImpactStats />
      <Testimonials />

      <footer className="home-footer">
        <p>© 2026 AgriTech Platform • Cultivating Innovation for a Greener World</p>
      </footer>
    </div>
  );
}

export default Home;




// import React, { useEffect, useState } from "react";
// import AgriTools from "../components/AgriTools";

// function Home() {

//   const [weather, setWeather] = useState(null);
//   const [location, setLocation] = useState("Detecting Location...");
//   const API_KEY = "8d0d89b87c98f6c5315cec572be6d1dc";

//   // 🌾 Function to calculate season
//   const getSeason = () => {
//     const month = new Date().getMonth() + 1;

//     if (month === 12 || month === 1 || month === 2) return "Winter ❄";
//     if (month >= 3 && month <= 5) return "Summer ☀";
//     if (month >= 6 && month <= 9) return "Monsoon 🌧";
//     return "Post-Monsoon 🍂";
//   };

//   useEffect(() => {

//     if (navigator.geolocation) {

//       navigator.geolocation.getCurrentPosition(

//         (position) => {

//           const { latitude, longitude } = position.coords;

//           fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
//           )
//             .then((res) => res.json())
//             .then((data) => {
//               setWeather(data);
//               setLocation(`${data.name}, ${data.sys.country}`);
//             })
//             .catch(() => setLocation("Weather update failed"));

//         },

//         () => setLocation("Location access denied")

//       );

//     }

//   }, []);

//   return (
//     <div className="home-wrapper">

//       {/* HERO */}
//       <section className="hero-container">
//         <div className="hero-text">
//           <h1>
//             Smart Tools for <br />
//             <span className="text-highlight">Modern Farmers</span>
//           </h1>

//           <p className="hero-subtitle">
//             Monitor weather, soil health and crop conditions using
//             modern technology.
//           </p>
//         </div>
//       </section>

//       {/* WEATHER SECTION */}

//       <section className="weather-container">

//         <div className="weather-card">

//           {weather ? (

//             <>

//               <div className="weather-main">

//                 <div className="weather-temp">
//                   {Math.round(weather.main.temp)}°C
//                 </div>

//                 <div className="weather-location">
//                   {location}
//                 </div>

//               </div>


//               {/* WEATHER STATS */}

//               <div className="weather-stats">

//                 <div className="stat-item">
//                   <span className="stat-val">
//                     {Math.round(weather.main.temp)}°C
//                   </span>
//                   <span className="stat-label">Temperature</span>
//                 </div>

//                 <div className="stat-item">
//                   <span className="stat-val">
//                     {weather.main.humidity}%
//                   </span>
//                   <span className="stat-label">Humidity</span>
//                 </div>

//                 <div className="stat-item">
//                   <span className="stat-val">
//                     {weather.rain ? weather.rain["1h"] + " mm" : "0 mm"}
//                   </span>
//                   <span className="stat-label">Rainfall</span>
//                 </div>

//                 <div className="stat-item">
//                   <span className="stat-val">
//                     {getSeason()}
//                   </span>
//                   <span className="stat-label">Season</span>
//                 </div>

//               </div>

//               <button
//                 className="btn-weather"
//                 onClick={() => window.location.reload()}
//               >
//                 Refresh
//               </button>

//             </>

//           ) : (

//             <p>{location}</p>

//           )}

//         </div>

//       </section>

//       {/* AGRI TOOLS COMPONENT */}
//       <AgriTools />

//       {/* FOOTER */}
//       <footer className="home-footer">
//         <p>© 2026 AgriTech Platform • Smart Farming Solutions</p>
//       </footer>

//     </div>
//   );
// }

// export default Home;
