import React from "react";
import { Link } from "react-router-dom";
import './Main.css';
// import logo from'./image/github-photo.jpg';



const Main = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.logo} className="card-img-top" alt="ana" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.desc}
          </p>
          <Link to="/Link" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
