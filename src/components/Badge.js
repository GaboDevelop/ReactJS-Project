import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/logo.svg";

//Todo componente es una clase y extiende de React.Component
class Badge extends React.Component {
  //siempre debe tener el metodo render
  render() {
    return (
      //usar className , cambiando el csss clasico para evitar un error de JS en consola
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstname}
            <br />
            {this.props.lastname}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#GaboDevelop</div>
      </div>
    );
  }
}

//Siempre se debe exportar el componente
export default Badge;
