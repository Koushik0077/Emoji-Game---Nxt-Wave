// Write your code here.
import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class WinOrLoseCard extends Component {
  playAgainGame = () => {
    const {score, playAgain} = this.props
    playAgain(score)
  }

  render() {
    const {lost, score, level, showMessage} = this.props
    let maxScore
    if (level === 'easy') {
      maxScore = 12
    } else if (level === 'medium') {
      maxScore = 16
    } else {
      maxScore = 20
    }
    const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    const lostImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    return (
      <div className="wlc-main-container">
        <div className="wlc-container1">
          <div className="wlc-container2">
            <h1 className="result-shown">{`${
              lost ? 'You Lose' : 'You Won'
            }`}</h1>
            {lost && <h2 className="show-time-out">{showMessage}</h2>}
            <p className="score-details">{`${
              lost ? 'Better luck next time.' : 'You did it.'
            }`}</p>
            <p className="score-details">{`${
              lost ? 'Score' : 'Best Score'
            }`}</p>
            <p className="scored-points">{`${score} / ${maxScore}`}</p>
            <div className="btn-div1">
              <div className="btn-div2">
                <button
                  className="play-button"
                  type="button"
                  onClick={this.playAgainGame}
                >
                  Play Again
                </button>
                <Link to="/start-game">
                  <button type="button" className="play-button change-level">
                    Change level
                  </button>
                </Link>
              </div>
              <Link to="/">
                <button type="button" className="play-button go-home">
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
          <img
            src={lost ? lostImg : wonImg}
            alt="win or lose"
            className="winorlosecard"
          />
        </div>
      </div>
    )
  }
}
export default WinOrLoseCard
