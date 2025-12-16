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
    console.log(emojiUrl)
    return (
      <button type="button" className="noBg-btn" onClick={this.shuffleEmojis}>
        <li className="list1">
          <img src={emojiUrl} alt={emojiName} className="li-emoji" />
        </li>
      </button>
    )
  }
}
export default EmojiCard
