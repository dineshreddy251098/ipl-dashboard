import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatch: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatch()
  }

  getTeamMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamMatchesApiUrl = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(teamMatchesApiUrl)
    const teamMatchData = await response.json()
    const updatedTeamMatch = {
      teamBannerUrl: teamMatchData.team_banner_url,
      latestMatchDetails: {
        umpires: teamMatchData.latest_match_details.umpires,
        result: teamMatchData.latest_match_details.result,
        manOfTheMatch: teamMatchData.latest_match_details.man_of_the_match,
        id: teamMatchData.latest_match_details.id,
        date: teamMatchData.latest_match_details.date,
        venue: teamMatchData.latest_match_details.venue,
        competingTeam: teamMatchData.latest_match_details.competing_team,
        competingTeamLogo:
          teamMatchData.latest_match_details.competing_team_logo,
        firstInnings: teamMatchData.latest_match_details.first_innings,
        secondInnings: teamMatchData.latest_match_details.second_innings,
        matchStatus: teamMatchData.latest_match_details.match_status,
      },
      recentMatches: teamMatchData.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }
    this.setState({teamMatch: updatedTeamMatch, isLoading: false})
  }

  renderLoader = () => (
    <div className="loader" testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamMatches = () => {
    const {teamMatch} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatch
    return (
      <div className="teams-card">
        <div className="team-banner-container">
          <img className="team-banner" src={teamBannerUrl} alt="team banner" />
        </div>
        <p className="latest-matches-heading">Latest Matches</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-matches-container">
          {recentMatches.map(eachMatch => (
            <MatchCard kry={eachMatch.id} eachMatch={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={id}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
