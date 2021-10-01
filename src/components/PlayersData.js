import React from "react";

const PlayersData = ({ data }) => {
  return (
    <>
      <div className="card">
        <img src={data.image} alt={data.image} />
        <div className="info">
          <div className="text">
            <h2 className="name">{data.name}</h2>
            <h3 className="skills">Skill:{data.skills}</h3>
            <h3 className="country">Country:{data.country}</h3>
          </div>
          <div className="stats">
            <ul className="stats-container">
              <li className="stats-container-item">
                Matches:{data.stats.matches}
              </li>
              <li className="stats-container-item">Runs:{data.stats.runs}</li>
              <li className="stats-container-item">
                Highest-Score:{data.stats.highestscore}
              </li>
              <li className="stats-container-item">
                Average:{data.stats.average}
              </li>
              <li className="stats-container-item">
                Wickets:{data.stats.wickets}
              </li>
            </ul>
          </div>
          <div>
            <button className="show-more-btn">
              <a href={data.details} target="blank">
                View Profile
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayersData;

