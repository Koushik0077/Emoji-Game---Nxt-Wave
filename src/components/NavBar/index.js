// Write your code here.
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdTimer} from 'react-icons/md'

import './index.css'

class NavBar extends Component {
  render() {
    const {lost, score, topScore, won, timer} = this.props
    return (
      <div
        className={`${
          won || lost ? 'nb-container1-condition' : 'nb-container1'
        }`}
      >
        <Link to="/" className="link-to-home">
          <div className="nb-container2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="emoji-logo"
            />
            <h1 className="h1-emoji-game">Emoji Game</h1>
          </div>
        </Link>
        {won === false && lost === false && (
          <div
            className="timer-div"
            style={{color: `${timer < 10 ? '#f10707' : '#ffffff'}`}}
          >
            <MdTimer
              style={{
                fontSize: '25px',
                marginRight: '5px',
              }}
            />
            <p>{timer} sec</p>
          </div>
        )}
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
