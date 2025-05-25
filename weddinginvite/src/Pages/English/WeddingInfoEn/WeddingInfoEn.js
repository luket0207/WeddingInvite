import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import "./WeddingInfoEn.scss";

const WeddingInfoEn = () => {
  const navigate = useNavigate();

  return (
    <div className="content-container en wedding-info">
      <h1>Wedding Information</h1>
      <Button onClick={() => navigate("/home-en")} lang="en">
        Return to Home
      </Button>
      <h3>Place</h3>
      <p>Kanda Myoujin Shrine</p>
      <h3>Date</h3>
      <p>18th October 2025</p>
      <h3>Time</h3>
      <p>
        Please arrive at Myojin Kaikan (shown on the{" "}
        <span className="link" onClick={() => navigate("/directions-en")}>
          directions page
        </span>
        ) at <strong>14:10</strong>.
      </p>
      <h3>Dress Code</h3>
      <p>
        The dress code is formal, however because we are attending a Shinto
        shrine there are some extra rules.
      </p>
      <h4>Ladies</h4>
      <p>
        <strong>Dress</strong>
      </p>
      <p>No all white, all black, animals patern or fur.</p>
      <p>Don't show your shoulders. Don't expose too much.</p>
      <p>
        <strong>Accessories</strong>
      </p>
      <p>No strong perfume.</p>
      <p>No real flowers.</p>
      <p>No big jewelry, it should be less fancy than the bride.</p>
      <p>No long dangling earrings or black pearl.</p>
      <p>
        <strong>Shoes</strong>
      </p>
      <p>Don't show your toes or the bottom part of your heel.</p>
      <p>High heels are ok.</p>
      <p>No black stockings or coloured tights. Skin tones only.</p>
      <p>
        <strong>Bag</strong>
      </p>
      <p>No fur or animal patterns.</p>
      <h4>Gentlemen</h4>
      <p>
        <strong>Suit</strong>
      </p>
      <p>No white or light grey suits.</p>
      <p>No sparkly/shiny suits.</p>
      <p>No business suits.</p>
      <p>
        <strong>Accessories</strong>
      </p>
      <p>No strong aftershave.</p>
      <p>
        <strong>Shirts</strong>
      </p>
      <p>No button down collars.</p>
      <p>No short sleeves.</p>
      <p>Shirt should be white, cream, grey, light blue or pastel colours.</p>
      <p>No extravagant patterns.</p>
      <p>
        <strong>Tie</strong>
      </p>
      <p>No black or animal pattern ties.</p>
      <p>
        <strong>Shoes</strong>
      </p>
      <p className="last-p">Formal black or brown shoes.</p>
      <Button onClick={() => navigate("/home-en")} lang="en">
        Return to Home
      </Button>
    </div>
  );
};

export default WeddingInfoEn;
