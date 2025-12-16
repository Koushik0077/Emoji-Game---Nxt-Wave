import {useNavigate} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

import './index.css'

function SearchGameLevel() {
  const navigate = useNavigate()
  const easyLevelGame = level => {
    navigate(`/search-game/${level}`)
  }
  return (
    <div className="search-level-div">
      <h1 className="start-game-heading">START GAME</h1>
      <div className="btn-levels">
        <div className="star-btn-div add-margin-top">
          <FaStar className="star-for-level" />
          <button
            type="button"
            className="level-btn easy-btn"
            onClick={() => easyLevelGame('easy')}
          >
            Easy
          </button>
          <p className="tries-para">7 Tries 😊</p>
        </div>
        <div className="star-btn-div add-margin-top">
          <div className="medium-stars">
            <FaStar className="star-for-level" />
            <FaStar className="star-for-level" />
          </div>
          <button
            type="button"
            className="level-btn medium-btn"
            onClick={() => easyLevelGame('medium')}
          >
            Medium
          </button>
          <p className="tries-para">5 Tries 🤔</p>
        </div>
        <div className="star-btn-div">
          <FaStar className="star-for-level" />
          <div className="medium-stars">
            <FaStar className="star-for-level" />
            <FaStar className="star-for-level" />
          </div>
          <button
            type="button"
            className="level-btn hard-btn"
            onClick={() => easyLevelGame('hard')}
          >
            Hard
          </button>
          <p className="tries-para">3 Tries 🥵</p>
        </div>
      </div>
    </div>
  )
}
export default SearchGameLevel
