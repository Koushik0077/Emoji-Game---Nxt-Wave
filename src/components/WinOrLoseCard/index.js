// Write your code here.
import {Component} from 'react'

import './index.css'

class WinOrLoseCard extends Component {
  playAgainGame = () => {
    const {score, playAgain} = this.props
    playAgain(score)
  }

  render() {
    const {lost, score} = this.props
    const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    const lostImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    return (
      <div className="wlc-main-container">
        <div className="wlc-container1">
          <div className="wlc-container2">
            <h1 className="result-shown">{`${
              lost ? 'You Lose' : 'You Won'
            }`}</h1>
            <p className="score-details">{`${
              lost ? 'Score' : 'Best Score'
            }`}</p>
            <p className="scored-points">{`${score}/12`}</p>
            <button
              className="play-button"
              type="button"
              onClick={this.playAgainGame}
            >
              Play Again
            </button>
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
