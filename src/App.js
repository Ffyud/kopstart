import './App.css';
import Map from './Map';

const getLocation = () => {
  if (!navigator.geolocation) {
    console.log('Geolocation API not supported by this browser.');
  } else {
    console.log('Checking location...');
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

const success = (position) => {
  console.log(position)
  // returns GeolocationPosition object
  console.log('Latitude:', position.coords.latitude);
  console.log('Longitude:', position.coords.longitude);
}

const error = () => {
  console.log("Error ja")
}

function App() {
  return (
    <div className="app">
      <div className="app-wrap">
        <header>
          <i className="ri-run-line"></i>KOPSTART<i className="ri-run-line"></i>
        </header>
        <div className="container">
          <span onClick={getLocation} className="button-continue"></span>
          <div id="map">
          <Map/>

</div>
        </div>



      </div>
    </div>
  );
}

export default App;
