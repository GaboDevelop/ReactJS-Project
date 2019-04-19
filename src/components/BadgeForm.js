import React from "react";

//import "./styles/BadgeForm.css";

//Todo componente es una clase y extiende de React.Component
class BadgeForm extends React.Component {
  state = {};
  /*handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };*/

  handleClick = e => {
    console.log("button was clicked");
  };

  /*handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };*/

  //siempre debe tener el metodo render
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit} action="">
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

//Siempre se debe exportar el componente
export default BadgeForm;
