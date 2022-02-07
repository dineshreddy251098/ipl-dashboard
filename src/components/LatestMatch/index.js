import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="competing-team-container">
        <div className="competing-details">
          <p className="text competing-team">{competingTeam}</p>
          <p className="text">{date}</p>
          <p className="text">{venue}</p>
          <p className="text">{result}</p>
        </div>
        <img
          className="team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="team-details-container">
        <p className="text">First Innings</p>
        <p className="text sub-text">{firstInnings}</p>
        <p className="text">Second Innings</p>
        <p className="text sub-text">{secondInnings}</p>
        <p className="text">Man Of The Match</p>
        <p className="text sub-text">{manOfTheMatch}</p>
        <p className="text">Umpires</p>
        <p className="text sub-text">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
