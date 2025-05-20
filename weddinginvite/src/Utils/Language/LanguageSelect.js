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
        <h1>Please Select Language</h1>
      </div>
      <div className="jp">
        <h1>言語を選択して下さい</h1>
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
