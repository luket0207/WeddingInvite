import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";

const HomeEn = () => {
  const navigate = useNavigate();

  return (
    <div className="content-container en">
      <h1>Luke and Ayano's Wedding</h1>
      <p>
        You are invited to celebrate the wedding of Luke and Ayano at <strong>Kanda Myoujin Shrine</strong> on <strong>18th October 2025</strong>.
      </p>
      <p>
        Below, you'll find everything you need to know about the day. We kindly
        ask that you RSVP even if we've already discussed your attendance — this
        helps us ensure we're aware of any special requirements you may have.
      </p>
      <p className="last-p">
        Thank you, and we can't wait to celebrate with you on our special day!
      </p>

      <Button onClick={() => navigate("/directions-en")} lang="en">
        RSVP
      </Button>
      <Button onClick={() => navigate("/directions-en")} lang="en">
        Wedding Information
      </Button>
      <Button onClick={() => navigate("/directions-en")} lang="en">
        Directions
      </Button>
      <Button onClick={() => navigate("/directions-en")} lang="en">
        Tokyo Information
      </Button>
    </div>
  );
};

export default HomeEn;
