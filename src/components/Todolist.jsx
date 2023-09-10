import { useContext } from "react";
import "../global.css";
import { UserContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();

  const {
    users,
    setusers,
    active,
    setActive,
    username,
    setusername,
    skill,
    setskill,
    t,
  } = useContext(UserContext);

  const SubmitHandler = (event) => {
    event.preventDefault();
    const user = { username, skill };
    setusers([...users, user]);
    setusername("");
    setskill("");
  };

  const UpdateHandler = (e) => {
    e.preventDefault();
    const copyusers = [...users];
    copyusers[active] = { ...copyusers[active], username, skill };
    setusers(copyusers);
    setusername("");
    setskill("");
    setActive(null);
  };

  return (
    <form className="w-100">
      <input
        className="form-control mb-3"
        onChange={(e) => setusername(e.target.value)}
        value={username}
        type="text"
        placeholder={t("name")}
      />
      <input
        className="form-control mb-3"
        onChange={(e) => setskill(e.target.value)}
        value={skill}
        type="text"
        placeholder={t("Description")}
      />

      {active === null ? (
        <button
          onClick={SubmitHandler}
          className="btn"
          style={{
            backgroundColor: "tomato",
            color: "white",
            border: "none",
            padding: "1vmax",
          }}
        >
          {t("button")}
        </button>
      ) : (
        <button
          onClick={UpdateHandler}
          className="btn btn-danger"
          style={{
            color: "white",
            border: "none",
            padding: "1vmax",
          }}
        >
          {t("button2")}
        </button>
      )}
    </form>
  );
};

export default Create;
