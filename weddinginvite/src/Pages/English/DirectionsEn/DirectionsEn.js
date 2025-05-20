import { useNavigate } from "react-router-dom";
import Map from "../../../Components/Map/Map";
import Button from "../../../Components/Button/Button";
import KandaEntrance from "../../../Assets/Images/KandaEntrance.PNG";
import MyojinKaikan from "../../../Assets/Images/MyojinKaikan.PNG";

const DirectionsEn = () => {
  const navigate = useNavigate();

  return (
    <div className="content-container en directions">
      <h1>Directions</h1>
      <Button onClick={() => navigate("/home-en")} lang="en">
        Return to Home
      </Button>
      <h3>Trains to the Shrine</h3>
      <p>
        The closest station to Kanda Shrine is{" "}
        <strong>Ochanomizu Station</strong>.
      </p>
      <p>
        Ochanomizu Station is accessible via the <strong>Chuo Line</strong>{" "}
        (Orange) and the <strong>Marunouchi Line</strong> (Red).
      </p>
      <p>If you're coming from Ginza Station, take the Marunouchi Line.</p>
      <p>
        To see train timetable, platforms and directions, google your station name to
        Ochanomizu Station.
      </p>
      <p className="last-p">
        Ensure you include the word "station" in the search and it will give you the
        train times automatically. For example "Shinjuku Station to Ochanomizu
        Station"
      </p>

      <h3>Walking from Ochanomizu Station</h3>
      <p>
        Exit Ochanomizu Station via the <strong>Hijiribashi Exit</strong>.
      </p>
      <p>Turn left and cross Hijiri Bridge, which spans the Kanda River.</p>
      <p>
        Continue straight along the road until you reach a junction with
        pedestrian crossings and a hotel called <strong>Ochanomizu Inn</strong>.
      </p>
      <p>Turn right at the junction (towards the 7-Eleven).</p>
      <p>
        Walk a short distance until you see the entrance to the shrine on your
        left.
      </p>
      <img src={KandaEntrance} alt="Kanda Shrine Entrance" />
      <p>
        Head up the street and pass through the large red gate to enter the
        shrine’s courtyard.
      </p>
      <p>
        Once inside the courtyard, walk to the right-hand side until you see the
        building shown below. Please enter this building.
      </p>
      <img src={MyojinKaikan} alt="Myojin Kaikan" />
      <h3>Map</h3>
      <p className="last-p">
        Click on "View Larger Map", to open in your Maps App.
      </p>
      <Map />
      <Button onClick={() => navigate("/home-en")} lang="en">
        Return to Home
      </Button>
    </div>
  );
};

export default DirectionsEn;
