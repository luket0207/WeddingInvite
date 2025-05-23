import GoogleFormEmbed from "../../../Components/GoogleFormEmbed/GoogleFormEmbed";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import "./Rsvp.scss";

const RsvpEn = () => {
  const navigate = useNavigate();

  return (
    <div className="content-container en rsvp">
      <GoogleFormEmbed />
      <Button onClick={() => navigate("/home-en")} lang="en">
        Return to Home
      </Button>
    </div>
  );
};

export default RsvpEn;
