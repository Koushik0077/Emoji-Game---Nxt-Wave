import {Component} from 'react'

import Level from '../Level'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const fullEmojisList = [
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
  {
    id: 9,
    emojiName: 'Face with Tongue Out',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f61b.png',
  },
  {
    id: 10,
    emojiName: 'Winking Face with Tongue',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f61c.png',
  },
  {
    id: 11,
    emojiName: 'Squinting Face with Tongue',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f61d.png',
  },
  {
    id: 12,
    emojiName: 'Smiling Face with Sunglasses',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png',
  },
  {
    id: 13,
    emojiName: 'Face with Medical Mask',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f637.png',
  },
  {
    id: 14,
    emojiName: 'Nerd Face',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f913.png',
  },
  {
    id: 15,
    emojiName: 'Star-Struck Face',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f929.png',
  },
  {
    id: 16,
    emojiName: 'Woozy Face',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f974.png',
  },
  {
    id: 17,
    emojiName: 'Shushing Face',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f92b.png',
  },
  {
    id: 18,
    emojiName: 'Zipper Mouth Face',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f910.png',
  },
  {
    id: 19,
    emojiName: 'Face with Head Bandage',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f915.png',
  },
]

let initialEmojisList

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {params} = this.props
    const {level} = params
    console.log(level)
    console.log(level === 'medium')
    let countDown
    if (level === 'easy') {
      initialEmojisList = fullEmojisList.slice(0, 12)
      countDown = 30
    } else if (level === 'medium') {
      initialEmojisList = fullEmojisList.slice(0, 16)
      countDown = 45
    } else if (level === 'hard') {
      initialEmojisList = fullEmojisList.slice(0, 20)
      countDown = 60
    }
    console.log(initialEmojisList)

    this.state = {
      emojisList: initialEmojisList,
      visitedList: Array(initialEmojisList.length).fill(false),
      score: 0,
      topScore: 0,
      lost: false,
      won: false,
      level,
      timer: countDown,
      countDown,
      showMessage: '',
    }
  }

  componentDidMount = () => {
    this.startTimer()
  }

  componentWillUnMount = () => {
    clearInterval(this.timerId)
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState(prev => {
        if (prev.timer < 1) {
          return {timer: 0, lost: true, showMessage: 'You are out of time.'}
        }
        return {timer: prev.timer - 1, showMessage: ''}
      })
    }, 1000)
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
    const {countDown} = this.state
    this.setState(prevState => {
      const isTop =
        prevState.topScore < prevScore ? prevScore : prevState.topScore
      return {
        topScore: isTop,
        score: 0,
        lost: false,
        won: false,
        timer: countDown,
        visitedList: Array(prevState.emojisList.length).fill(false),
      }
    })
  }

  renderResult() {
    const {won, lost, score, topScore, level, showMessage} = this.state
    return (
      <div className="eg-container1">
        <NavBar score={score} topScore={topScore} won={won} lost={lost} />
        <div className="eg-container2">
          <WinOrLoseCard
            won={won}
            lost={lost}
            score={score}
            playAgain={this.playAgain}
            level={level}
            showMessage={showMessage}
          />
        </div>
      </div>
    )
  }

  renderToPlay() {
    const {score, emojisList, topScore, level, won, lost, timer} = this.state
    let val
    if (level === 'easy') {
      val = '3'
    } else if (level === 'medium') {
      val = '4'
    } else {
      val = '5'
    }
    return (
      <div className="eg-container1">
        <NavBar
          score={score}
          topScore={topScore}
          timer={timer}
          won={won}
          lost={lost}
        />
        <div className="eg-container2">
          <ul
            className="ulist1"
            style={{
              gridTemplateColumns: `repeat(${val},1fr)`,
            }}
          >
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
    return lost || won ? this.renderResult() : this.renderToPlay()
  }
}
export default Level(EmojiGame)
