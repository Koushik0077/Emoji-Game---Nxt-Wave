import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="nf-container">
    <h1 className="nf-title">404</h1>
    <p className="nf-message">Oops! That page doesn’t exist.</p>

    <div className="nf-emoji">😕 😵 😮</div>

    <Link to="/" className="nf-button">
      Go Home
    </Link>
  </div>
)

export default NotFound
