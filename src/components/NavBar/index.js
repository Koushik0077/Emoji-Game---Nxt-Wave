// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    const {lost, score, topScore, won} = this.props
    return (
      <div
        className={`${
          won || lost ? 'nb-container1-condition' : 'nb-container1'
        }`}
      >
        <div className="nb-container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="h1-emoji-game">Emoji Game</h1>
        </div>
        {won || lost ? (
          ''
        ) : (
          <div className="nb-container2">
            <p className="p-align1">Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    )
  }
}
export default NavBar
