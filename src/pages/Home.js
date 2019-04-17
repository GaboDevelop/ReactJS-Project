import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import imgConferencia from "../images/conferencia.svg";
import logoAstronautas from "../images/astronautas.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className="row content-slider">
          <div className="col-3">
            <img src={imgConferencia} alt="conferenciaLogo" />
            <br />
            <div className="infoContent ml-2 mt-4">
              <h1>Badge Management System</h1>
              <Link to="/badges" className="btn btn-primary">
                Start
              </Link>
            </div>
          </div>
          <div className="col-9">
            <img src={logoAstronautas} alt="logo Astronautas" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
