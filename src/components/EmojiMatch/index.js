import {useState, useEffect} from 'react'

import MatchCard from '../MatchCard'
import MatchNavBar from '../MatchNavBar'

import './index.css'

const emojisList = [
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
    emojiName: 'Smiling Face with Sunglasses',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f60e.png',
  },
  {
    id: 4,
    emojiName: 'Winking Face',
    emojiUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f609.png',
  },
]

function EmojiMatch() {
  const shuffle = array => [...array].sort(() => Math.random() - 0.5)
  const [rowCount, setRowCount] = useState(3)
  const createRows = () =>
    Array.from({length: rowCount}, () => shuffle(emojisList.slice(0, rowCount)))

  const [rows, setRows] = useState(createRows)
  const [revealedCells, setRevealedCells] = useState(Array(rowCount).fill(null))

  const strikeThisRow = (rowIndex, cellId, emojiId) => {
    if (revealedCells[rowIndex] === null) {
      const updated = [...revealedCells]
      updated[rowIndex] = {cellId, emojiId}
      setRevealedCells(updated)
    }
  }

  useEffect(() => {
    setRows(createRows())
    setRevealedCells(Array(rowCount).fill(null))
    // eslint-disable-next-line
  }, [rowCount])

  const selectedEmojiIds = revealedCells
    .filter(Boolean)
    .map(item => item.emojiId)

  const win =
    selectedEmojiIds.length === rowCount && new Set(selectedEmojiIds).size === 1

  const lost = new Set(selectedEmojiIds).size > 1

  const playGameAgain = () => {
    setRows(createRows())
    setRevealedCells(Array(rowCount).fill(null))
  }
  const increaseLevel = () => {
    setRowCount(prev => (prev < 5 ? prev + 1 : 3))
  }

  const [show, setShow] = useState(false)
  const showRules = () => setShow(true)

  const showInstructions = () => (
    <div className="si-div-container">
      <h2>Game Instructions</h2>
      <ol>
        <li>
          🟦 {rowCount} rows of emojis will appear, each shuffled randomly.
        </li>
        <li>
          👆 Tap <strong>one emoji</strong> from each row to reveal it.
        </li>
        <li>
          🎯 Your goal is to match all{' '}
          <strong>{rowCount} revealed emojis</strong>.
        </li>
        <li>
          ✅ All emojis match → <strong>You Win!</strong> 🎉
        </li>
        <li>
          ❌ Different emojis → <strong>You Lose!</strong> 💥
        </li>
        <li>
          🔁 Press <strong>Play Again</strong> to try again.
        </li>
      </ol>
      <button
        className="close-button"
        type="button"
        onClick={() => setShow(false)}
      >
        Close
      </button>
    </div>
  )

  let renderResult

  if (win) {
    renderResult = (
      <div className="overlay-container">
        <h1 className="game-won-banner">YOU WIN!</h1>
        <h1 className="perfect-score">PERFECT SCORE</h1>
        <h3 className="new-challenge">
          Time to celebrate your matching skills!
        </h3>
        <div className="btns-result">
          <button
            type="button"
            className="play-again-em"
            onClick={playGameAgain}
          >
            Try Again
          </button>
          <button
            type="button"
            className="next-level-button"
            onClick={increaseLevel}
          >
            {rowCount === 5 ? 'Start Again' : 'Next Level'}
          </button>
        </div>
      </div>
    )
  }

  if (lost) {
    renderResult = (
      <div className="overlay-container">
        <h1 className="game-over-banner">GAME OVER</h1>
        <h1 className="power-up-banner">Great Effort!</h1>
        <h3 className="new-challenge">Better Luck Next Time!</h3>
        <button type="button" className="play-again-em" onClick={playGameAgain}>
          Try Again
        </button>
      </div>
    )
  }

  const renderToPlay = () => (
    <div>
      {rows.map((row, rowIndex) => (
        <ul
          className="row"
          style={{
            gridTemplateColumns: `repeat(${rowCount}, ${
              rowCount === 5 ? '85px' : '115px'
            })`,
          }}
        >
          {row.map((item, colIndex) => {
            const cellId = `${rowIndex}-${colIndex}`
            const isRevealed = revealedCells[rowIndex]?.cellId === cellId

            return (
              <MatchCard
                key={cellId}
                cellId={cellId}
                emojiId={item.id}
                emojiName={item.emojiName}
                emojiUrl={item.emojiUrl}
                rowIndex={rowIndex}
                strikeRow={strikeThisRow}
                show={isRevealed}
                rowCount={rowCount}
              />
            )
          })}
        </ul>
      ))}
    </div>
  )

  return (
    <div className="rows-container">
      <MatchNavBar showRules={showRules} />
      {!show && renderToPlay()}
      {renderResult}
      {show && showInstructions()}
    </div>
  )
}

export default EmojiMatch
