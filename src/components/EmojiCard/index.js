// Write your code here.
import {Component} from 'react'

import './index.css'

class EmojiCard extends Component {
  shuffleEmojis = () => {
    const {shuffledEmojisList, id} = this.props
    shuffledEmojisList(id)
  }

  render() {
    const {emojiName, emojiUrl} = this.props
    return (
      <li className="list1">
        <button type="button" className="noBg-btn" onClick={this.shuffleEmojis}>
          <img src={emojiUrl} alt={emojiName} className="li-emoji" />
        </button>
      </li>
    )
  }
}
export default EmojiCard
