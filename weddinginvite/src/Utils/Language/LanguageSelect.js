import "./LanguageSelect.scss";
import { useLanguage } from "./LanguageContext";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const LanguageSelect = () => {
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleSelect = (lang) => {
    setLanguage(lang);
    navigate("/login");
  };

  return (
    <div className="content-container">
      <div className="en">
        <h2>Please Select a Language</h2>
      </div>
      <div className="jp">
        <h2>言語を選択して下さい</h2>
      </div>

      <div>
        <Button onClick={() => handleSelect("en")} lang="en">
          English
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleSelect("jp")}
          lang="jp"
          style={{ marginLeft: "1rem" }}
        >
          日本語
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelect;
