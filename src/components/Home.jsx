import { useContext } from "react";
import { UserContext } from "../utils/Context";
import Todolist from "../components/Todolist";
import Show from "./Show";


const Home = () => {

  const { t } = useContext(UserContext);
  return (
    <div>
      <div className="d-flex align-items-start justify-content-around " id="home">
        <div>
        <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
        <h5>{t("status")}</h5>
        </div>
        <div className="w-30">
          <h3>{t("todo_title")}</h3>
          <Todolist/>
          <Show/>
        </div>
      </div>
    </div>
  );
};

export default Home;
