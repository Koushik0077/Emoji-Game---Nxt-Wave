import {useNavigate} from 'react-router-dom'

import './index.css'

function GameType(props) {
  const navigate = useNavigate()
  const {fName, lName, imgUrl, gamePath} = props
  const startPlaying = () => {
    navigate(`/${gamePath}`)
  }
  return (
    <div className="game-div">
      <div className="game-title">
        <span className="game-tt">{fName}</span>
        <span className="game-tb">{lName}</span>
      </div>
      <img src={imgUrl} alt="img" className="image-em" />
      <button className="play-em" type="button" onClick={startPlaying}>
        Play
      </button>
    </div>
  )
}
export default GameType
