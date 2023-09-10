import React, { useContext } from "react";
import { UserContext } from "../utils/Context";
import { Outlet, useNavigate } from "react-router-dom";

const Show = () => {
    const navigate = useNavigate();
    const { active, users, setusers, setActive, setusername, setskill,t } =
        useContext(UserContext);

    const ActiveHandler = (i) => {
        setActive(i);
        setusername(users[i].username);
        setskill(users[i].skill);
    };

    const DeleteHandler = (i) => {
        const copyusers = [...users];
        copyusers.splice(i, 1);
        setusers(copyusers);
    };
    return (
        <div className="w-100 mt-5">
            <h3>{t("task_status")}</h3>
            {users.map((e, i) => {
                return (
                    <div
                        className="d-flex justify-content-between alert alert-success"
                        key={i}
                    >
                        {e.username}
                        {active === null && (
                            <span>
                                <span onClick={() => ActiveHandler(i)}>✏️</span>
                                <span onClick={() => DeleteHandler(i)}>❌</span>
                            </span>
                        )}
                    </div>
                );
            })}
            <hr />
            <Outlet />
        </div>
    );
};

export default Show;
