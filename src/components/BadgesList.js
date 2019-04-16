import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li className="Badges__list" key={badge.id}>
              <div className="row">
                <div className="col-3 pt-3">
                  <div className="Badges__avatarImg">
                    <img src={badge.avatarUrl} alt="avatar" />
                  </div>
                </div>
                <div className="col-9 p-2">
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                  <br />
                  <p className="Badges__twitter">@{badge.twitter}</p>
                  <p>{badge.jobTitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
