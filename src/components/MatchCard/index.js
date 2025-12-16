// Write your code here.

import './index.css'

function MatchCard({
  cellId,
  emojiId,
  emojiName,
  emojiUrl,
  strikeRow,
  rowIndex,
  show,
  rowCount,
}) {
  const hideUrl =
    'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f0cf.png'

  return (
    <li
      className="list1"
      style={
        rowCount === 5
          ? {height: '90px', width: '90px'}
          : {height: '115px', width: '115px'}
      }
    >
      <button
        type="button"
        className="noBg-btn"
        onClick={() => strikeRow(rowIndex, cellId, emojiId)}
        style={
          rowCount === 5
            ? {height: '90px', width: '90px'}
            : {height: '115px', width: '115px'}
        }
      >
        <img
          src={!show ? emojiUrl : hideUrl}
          alt={emojiName}
          className="li-emoji"
        />
      </button>
    </li>
  )
}

export default MatchCard
