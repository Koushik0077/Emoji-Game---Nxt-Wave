import {Link} from 'react-router-dom'

import {FiBookOpen} from 'react-icons/fi'
import {IoMdHome} from 'react-icons/io'

import './index.css'

function MatchNavBar(props) {
  const {showRules} = props
  return (
    <div className="mnb-container">
      <img
        src="https://ik.imagekit.io/sjyfpsp1n/marketing/featuredGames/emoji-match/logo.png?utm_source=chatgpt.com"
        alt="game-img"
        className="em-img"
      />
      <div className="tab-div">
        <Link className="link-home" to="/">
          <IoMdHome style={{fontSize: '25px'}} />
          <p className="make-inline">Home</p>
        </Link>
        <button type="button" className="si-btn" onClick={() => showRules()}>
          <FiBookOpen style={{fontSize: '25px'}} />
          <p className="make-inline">Rules</p>
        </button>
      </div>
    </div>
  )
}
export default MatchNavBar
