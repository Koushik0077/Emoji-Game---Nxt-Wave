import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import {FaTrophy, FaStar} from 'react-icons/fa'
import {LuRefreshCcw} from 'react-icons/lu'
import {BiSolidSkipNextCircle} from 'react-icons/bi'

import ESearchNavBar from '../ESearchNavBar'
import SearchCard from '../SearchCard'

import './index.css'

const searchEmojisList = [
  {
    id: 0,
    emojiName: 'Grinning Face',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f600.png',
  },
  {
    id: 1,
    emojiName: 'Beaming Face with Smiling Eyes',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f601.png',
  },
  {
    id: 2,
    emojiName: 'Face with Tears of Joy',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f602.png',
  },
  {
    id: 3,
    emojiName: 'Smiling Face with Open Mouth',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f603.png',
  },
  {
    id: 4,
    emojiName: 'Smiling Face with Open Mouth and Smiling Eyes',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f604.png',
  },
  {
    id: 5,
    emojiName: 'Smiling Face with Halo',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f607.png',
  },
  {
    id: 6,
    emojiName: 'Smiling Face with Heart Eyes',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60d.png',
  },
  {
    id: 7,
    emojiName: 'Face Blowing a Kiss',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f618.png',
  },
  {
    id: 8,
    emojiName: 'Kissing Face with Smiling Eyes',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f619.png',
  },
]
let sortedList = searchEmojisList.sort(() => Math.random() - 0.5)
let randomIndex = Math.floor(Math.random() * 9)
let randomId = searchEmojisList[randomIndex].id

function EmojiSearch() {
  const {level, levelNumber} = useParams()
  const navigate = useNavigate()
  const [levelNum, setLevelNum] = useState(Number(levelNumber))
  const [tries, setTries] = useState(8 - levelNum)
  const [count, setCount] = useState(0)
  const [result, setResult] = useState('play')
  const [searchRules, setSearchRules] = useState(false)
  const [visited, setVisited] = useState([])
  const levelValues = {
    easy: 9 - levelNum,
    medium: 6 - levelNum,
    hard: 4 - levelNum,
  }
  useEffect(() => {
    setTries(levelValues[level])
    navigate(`/emoji-search/${level}/${levelNum}`)
    // eslint-disable-next-line
  }, [level, levelNum])
  const checkEmojiId = emojiId => {
    if (visited.includes(emojiId)) {
      return
    }
    if (emojiId === randomId) {
      setResult('won')
      setCount(prev => prev + 1)
      return
    }
    setVisited(prev => [...prev, emojiId])
    if (tries === 1) {
      setTries(prev => prev - 1)
      setCount(prev => prev + 1)
      setResult('lose')
    } else {
      setTries(prev => prev - 1)
      setCount(prev => prev + 1)
    }
  }
  const playSearchGame = () => {
    setResult('play')
    setTries(levelValues[level])
    setCount(0)
    setVisited([])
    sortedList = searchEmojisList.sort(() => Math.random() - 0.5)
    randomIndex = Math.floor(Math.random() * 9)
    randomId = searchEmojisList[randomIndex].id
  }
  const increaseLevel = () => {
    if (levelNum !== 3) {
      console.log(levelNum !== 3)
      console.log(levelNum)
      setLevelNum(prev => prev + 1)
    }
    console.log(levelNum)
    playSearchGame()
  }
  const changeLevel = () => {
    navigate('/select-level')
  }

  const showSearchRules = () => {
    setSearchRules(true)
  }
  const showInstructions = () => (
    <div className="si-div-container">
      <h2>Game Instructions</h2>
      <ol>
        <li>
          🎯 A <strong>target emoji</strong> is shown at the top under
          <em>Find Me</em>.
        </li>
        <li>🟦 A grid of emojis will appear below, shuffled randomly.</li>
        <li>
          👆 Click <strong>one emoji</strong> from the grid to make your guess.
        </li>
        <li>
          ❌ Each wrong selection reduces your <strong>Tries Left</strong>.
        </li>
        <li>✅ Finding the correct emoji wins the round 🎉</li>
        <li>💥 If all tries are used, the game ends.</li>
        <li>
          🔁 Press <strong>Play Again</strong> to play the round again.
        </li>
        <li>
          🔓 Press <strong>Next Level</strong> to start a new round.
        </li>
        <li>
          🔁 Press <strong>Retry</strong> to try the same level again.
        </li>
      </ol>

      <button
        className="close-button"
        type="button"
        onClick={() => setSearchRules(false)}
      >
        Close
      </button>
    </div>
  )

  const renderForWin = () => (
    <div className="result-won-div ">
      <h1 className="won-h1 ">WIN</h1>
      <div className="border-win">
        <h1 className="won-h1">TARGET LOCATED!</h1>
      </div>
      <div className="perfect-div">
        <h1 className="perfect-h1">PERFECT SEARCH!</h1>
      </div>
      <div className="trophy-div">
        {level === 'easy' && <FaStar className="star-trophy" />}
        {level === 'medium' && (
          <div className="medium-stars">
            <FaStar className="star-for-level" />
            <FaStar className="star-for-level" />
          </div>
        )}
        {level === 'hard' && (
          <div className="hard-stars">
            <FaStar className="star-trophy" />
            <div className="medium-stars">
              <FaStar className="star-for-level" />
              <FaStar className="star-for-level" />
            </div>
          </div>
        )}
        <FaTrophy className="trophy-won" />
      </div>
      <h3 className="tries-h3">Tries : {count}</h3>
      <div className="win-buttons">
        <button
          type="button"
          className="play-again-btn"
          onClick={playSearchGame}
        >
          Play Again
        </button>
        {levelNum === 3 ? (
          <button
            type="button"
            className="play-again-btn"
            onClick={changeLevel}
          >
            Change Mode
          </button>
        ) : (
          <button
            type="button"
            className="play-again-btn next-level-btn"
            onClick={increaseLevel}
          >
            <BiSolidSkipNextCircle className="next-icon" />
            Next Level
          </button>
        )}
      </div>
    </div>
  )

  const renderForLose = () => (
    <div className="result-won-div lost-color-border">
      <h1 className="won-h1 lost-color">Lose</h1>
      <div className="border-win lost-color-border">
        <h1 className="won-h1 lost-color">TARGET ESCAPED</h1>
      </div>
      <div className="perfect-div tries-over">
        <h1 className="perfect-h1">TRIES EXHAUSTED</h1>
      </div>
      <div className="trophy-div">
        <img src="https://i.ibb.co/0y0dCsHG/lost-trophy-img.png" alt="lost" />
      </div>
      <div className="win-buttons">
        <button
          type="button"
          className="play-again-btn retry-btn"
          onClick={playSearchGame}
        >
          <LuRefreshCcw className="refresh-icon" />
          Retry
        </button>
        <button type="button" className="play-again-btn" onClick={changeLevel}>
          Change Mode
        </button>
      </div>
    </div>
  )

  return (
    <div className="main-esearch">
      <ESearchNavBar
        triesLeft={levelValues[level] - count}
        showSearchRules={showSearchRules}
      />
      {result === 'won' && renderForWin()}
      {result === 'lose' && renderForLose()}
      {result === 'play' && !searchRules && (
        <div className="eg-container2">
          <div className="find-me-div">
            <h1 className="findme-h1">Find Me</h1>
            <div className="target-img-div">
              <img
                src={searchEmojisList[randomIndex].emojiUrl}
                alt={searchEmojisList[randomIndex].emojiName}
                className="find-emoji"
              />
            </div>
          </div>
          <ul
            className="ulist11"
            style={{
              gridTemplateColumns: `repeat(3,100px)`,
            }}
          >
            {sortedList.map(eachItem => (
              <SearchCard
                key={eachItem.id}
                id={eachItem.id}
                emojiUrl={eachItem.emojiUrl}
                emojiName={eachItem.emojiName}
                checkEmojiId={checkEmojiId}
              />
            ))}
          </ul>
        </div>
      )}
      {searchRules && showInstructions()}
    </div>
  )
}
export default EmojiSearch
