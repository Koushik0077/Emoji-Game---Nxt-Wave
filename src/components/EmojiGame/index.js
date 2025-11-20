import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const visitedList = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      emojisList,
      visitedList: [...visitedList],
      score: 0,
      topScore: 0,
      lost: false,
      won: false,
    }
  }

  shuffledEmojisList = id => {
    this.setState(prevState => {
      if (prevState.visitedList[id] === true) {
        return {
          lost: true,
        }
      }
      const updatedVisitedList = [...prevState.visitedList]
      updatedVisitedList[id] = true
      return {
        emojisList: [...prevState.emojisList].sort(() => Math.random() - 0.5),
        visitedList: updatedVisitedList,
        score: prevState.score + 1,
        won: prevState.score === 11,
      }
    })
  }

  playAgain = prevScore => {
    this.setState(prevState => {
      const isTop =
        prevState.topScore < prevScore ? prevScore : prevState.topScore
      return {
        topScore: isTop,
        score: 0,
        lost: false,
        won: false,
        visitedList: [...visitedList],
      }
    })
  }

  renderIfLost() {
    const {won, lost, score, topScore} = this.state
    return (
      <div className="eg-container1">
        <NavBar score={score} topScore={topScore} won={won} lost={lost} />
        <div className="eg-container2">
          <WinOrLoseCard
            won={won}
            lost={lost}
            score={score}
            playAgain={this.playAgain}
          />
        </div>
      </div>
    )
  }

  renderToPlay() {
    const {score, emojisList, topScore} = this.state
    return (
      <div className="eg-container1">
        <NavBar score={score} topScore={topScore} />
        <div className="eg-container2">
          <ul className="ulist1">
            {emojisList.map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                id={eachItem.id}
                emojiUrl={eachItem.emojiUrl}
                emojiName={eachItem.emojiName}
                shuffledEmojisList={this.shuffledEmojisList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {lost, won} = this.state
    return lost || won ? this.renderIfLost() : this.renderToPlay()
  }
}
export default EmojiGame
