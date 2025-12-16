import {useState} from 'react'
import './index.css'

function MatchCard(props) {
  const {id, emojiUrl, emojiName, checkEmojiId} = props
  const [showEmoji, setShowEmoji] = useState(false)

  const checkEmoji = () => {
    setShowEmoji(true)
    checkEmojiId(id)
  }
  const hideUrl =
    'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f0cf.png'

  return (
    <li className="list1">
      <button type="button" className="noBg-btn" onClick={checkEmoji}>
        <img
          src={showEmoji ? emojiUrl : hideUrl}
          alt={emojiName}
          className="li-emojii"
        />
      </button>
    </li>
  )
}
export default MatchCard
