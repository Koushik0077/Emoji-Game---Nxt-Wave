import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Component} from 'react'

import EmojiGame from './components/EmojiGame'
import EmojiMatch from './components/EmojiMatch'
import EmojiSearch from './components/EmojiSearch'
import LevelsType from './components/LevelsType'
import SearchGameLevel from './components/SearchGameLevel'
import Home from './components/Home'
import GetStarted from './components/GetStarted'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emoji-game/:level" element={<EmojiGame />} />
          <Route path="/emoji-match" element={<EmojiMatch />} />
          <Route
            path="/emoji-search/:level/:levelNumber"
            element={<EmojiSearch />}
          />
          <Route path="/search-game/:level" element={<LevelsType />} />
          <Route path="/select-level" element={<SearchGameLevel />} />
          <Route path="/start-game" element={<GetStarted />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
