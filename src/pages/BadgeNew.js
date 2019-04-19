import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/conferencia.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    /*const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;
    
    this.setState({
        form: nextForm
      });*/

    //equivale a lo mismo de arriba
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: true });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <div>
        <div className="BadgeNew__hero BadgeNew_hero-image">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstname={this.state.form.firstName || "FIRST_NAME"}
                avatarUrl="https://s.gravatar.com/avatar/81093cc55c7768e60d3f6138098f6902?s=80"
                lastname={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "twitter"}
                email={this.state.form.email || "EMAIL"}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
