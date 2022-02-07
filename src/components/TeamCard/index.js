import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <li className="team-list-container">
      <Link to={`/team-matches/${id}`}>
        <div className="team-card-container">
          <img className="team-image" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
