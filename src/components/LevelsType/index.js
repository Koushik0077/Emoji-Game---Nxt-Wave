import {Link, useParams} from 'react-router-dom'

import './index.css'

function LevelsType() {
  const {level} = useParams()
  const levelValues = [1, 2, 3]
  return (
    <div className="ltype-div1">
      <h1 className="ltype-h1"> {level.toUpperCase()} MODE </h1>
      <h2 className="choose-level-no">Choose Level</h2>
      <ul className="ul-numbers">
        <li className="li-numbers">
          <Link
            to={`/emoji-search/${level}/${levelValues[0]}`}
            style={{textDecoration: 'none'}}
          >
            <div className="num-level-div">
              <h1 className="number-level">1</h1>
            </div>
          </Link>
          <p className="level-para">Level 1</p>
        </li>
        <li className="li-numbers">
          <Link
            to={`/emoji-search/${level}/${levelValues[1]}`}
            style={{textDecoration: 'none'}}
          >
            <div className="num-level-div">
              <h1 className="number-level">2</h1>
            </div>
          </Link>
          <p className="level-para">Level 2</p>
        </li>
        <li className="li-numbers">
          <Link
            to={`/emoji-search/${level}/${levelValues[2]}`}
            style={{textDecoration: 'none'}}
          >
            <div className="num-level-div">
              <h1 className="number-level">3</h1>
            </div>
          </Link>
          <p className="level-para">Level 3</p>
        </li>
      </ul>
      <Link to="/select-level" className="link-mode">
        Change Mode
      </Link>
    </div>
  )
}
export default LevelsType
