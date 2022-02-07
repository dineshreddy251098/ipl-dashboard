import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = eachMatch
  const resultColor = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="recent-match-container">
      <img
        className="recent-match-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <h1 className="recent-team-name">{competingTeam}</h1>
      <p className="recent-team-name result">{result}</p>
      <p className={`recent-team-name result ${resultColor}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
