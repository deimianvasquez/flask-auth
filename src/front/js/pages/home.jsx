import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value,
    });
  };

  const sendLogin = (data) => {
    console.log(data);
    actions.getLogin(data);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="email"
                type="text"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="password"
                type="password"
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-success"
                type="button"
                onClick={() => sendLogin(login)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
