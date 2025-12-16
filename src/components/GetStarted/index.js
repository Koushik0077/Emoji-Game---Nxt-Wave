import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

function GetStarted() {
  const navigate = useNavigate()
  const [rules, setRules] = useState(false)
  function changeLevel(level) {
    navigate(`/emoji-game/${level}`)
  }
  const showRules = () => {
    setRules(!rules)
    console.log(rules)
  }
  return (
    <div className="gs-container1">
      <h1 className="h1-level">Select game level:</h1>
      <div className="btns-div">
        <button
          type="button"
          className="btn-level btn-easy"
          onClick={() => {
            changeLevel('easy')
          }}
        >
          Easy
        </button>
        <button
          type="button"
          className="btn-level btn-medium"
          onClick={() => {
            changeLevel('medium')
          }}
        >
          Medium
        </button>
        <button
          type="button"
          className="btn-level btn-hard"
          onClick={() => {
            changeLevel('hard')
          }}
        >
          Hard
        </button>
      </div>
      <button className="rules-button" type="button" onClick={showRules}>
        Show Instructions
      </button>
      {rules && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Game Instructions</h2>
            <ol>
              <li>Click each emoji only once.</li>
              <li>
                Every time you click a new emoji, your score increases by 1.
              </li>
              <li>
                If you click the same emoji again, the game ends immediately.
              </li>
              <li>The emojis shuffle after every click, so pay attention.</li>
              <li>Your goal is to click all emojis without repeating any.</li>
              <li>
                The top score is recorded and updated only if you beat it.
              </li>
              <li>The game tests your memory and focus.</li>
              <li>
                Each emoji appears only once per shuffle, but in a different
                order.
              </li>
              <li>Have fun and try to achieve a perfect score.</li>
            </ol>
            <button
              className="close-button"
              type="button"
              onClick={() => setRules(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default GetStarted
