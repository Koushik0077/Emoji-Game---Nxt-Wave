import {Link} from 'react-router-dom'

import {FiBookOpen} from 'react-icons/fi'
import {IoMdHome} from 'react-icons/io'

import './index.css'

function ESearchNavBar(props) {
  const {triesLeft, showSearchRules} = props
  return (
    <div className="search-nbar">
      <Link to="/" className="link-to-home">
        <div className="nb-container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="h1-emoji-game">Emoji Search</h1>
        </div>
      </Link>
      <div className="tabs-div">
        <Link className="link-home" to="/">
          <IoMdHome style={{fontSize: '25px', color: '#f9f9f9'}} />
          <p className="make-inline">Home</p>
        </Link>
        <button
          type="button"
          className="si-btn"
          onClick={() => showSearchRules()}
        >
          <FiBookOpen style={{fontSize: '25px', color: '#f9f9f9'}} />
          <p className="make-inline">Rules</p>
        </button>
        <h3 className="tries-left-h3">Tries Left : {triesLeft}</h3>
      </div>
    </div>
  )
}
export default ESearchNavBar
