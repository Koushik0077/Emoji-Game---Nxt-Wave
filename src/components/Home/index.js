import GameType from '../GameType'

import './index.css'

function Home() {
  return (
    <div className="h-container1">
      <div className="game-title">
        <span className="title-top">Emoji</span>
        <span className="title-bottom">Fun</span>
      </div>
      <div className="h-container2">
        <div className="game-container">
          <GameType
            key="emojiMatch"
            fName="Emoji"
            lName="Match"
            gamePath="emoji-match"
            imgUrl="https://images.openai.com/thumbnails/url/LzNSiXicu5mZUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4KirIoy3IMsNR1M08N8vIJ9YywdCl3r8ooNA6IKM1wyw8PcDPPCU3MMIi0iEo2czdQKwYAQz0lJw?utm_source=chatgpt.com"
          />
          <GameType
            key="emojiGame"
            fName="Emoji"
            lName="Game"
            gamePath="start-game"
            imgUrl="https://ecdn.teacherspayteachers.com/cdn-cgi/image/format%3Davif%2Cquality%3D70%2Conerror%3Dredirect/thumbitem/Emoji-Memory-Game-Indoor-recess-4659733-1656584182/750f-4659733-4.jpg?utm_source=chatgpt.com"
          />
          <GameType
            key="emojiSearch"
            fName="Emoji"
            lName="Search"
            gamePath="select-level"
            imgUrl="https://i.ibb.co/VWkPWGw7/Gemini-Generated-Image-acb58aacb58aacb5.png"
          />
        </div>
      </div>
    </div>
  )
}
export default Home
