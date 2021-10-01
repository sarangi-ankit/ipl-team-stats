import React from 'react'

const PlayersData = ({data}) => {
    return (
        <div>
           <div>
               <img src={data.image} alt={data.image} />
           </div>
           <div>
               <h2>{data.name}</h2>
               <h3>Skill:{data.skills}</h3>
               <h3>Country:{data.country}</h3>
           </div>
           <div>
               <ul>
                   <li>Matches:{data.stats.matches}</li>
                   <li>Runs:{data.stats.runs}</li>
                   <li>Highest-Score:{data.stats.highestscore}</li>
                   <li>Average:{data.stats.average}</li>
                   <li>Wickets:{data.stats.wickets}</li>
               </ul>
           </div>
           <div>
               <button><a href={data.details} target="blank">View Profile</a></button>
           </div>
        </div>
    )
}

export default PlayersData
