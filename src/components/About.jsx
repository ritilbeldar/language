import { useContext } from "react";
import { UserContext } from "../utils/Context";

const About = () => {
    const { t } = useContext(UserContext);
  return (
    <div>
        <div className="d-flex align-items-start " id="about">
        <h2>{t("about_heding")}</h2>
        <ul>
          <li>{t("titel_1")}</li>
          <li>{t("titel_2")}</li>
          <li>{t("titel_3")}</li>
          <li>{t("titel_4")}</li>
        </ul>
      </div>
    </div>
  )
}

export default About