# 🎮 Emoji Fun – Multi-Game Emoji Platform

Emoji Fun is a **React-based mini game platform** that includes **three interactive emoji games** with **levels, difficulty modes, and result screens**.
The project focuses on improving **memory, attention, and visual recognition** through fun and engaging emoji-based gameplay.

Originally built as a single Emoji Game, this project was later extended into a **scalable multi-game application** using React Router and reusable components.

---

## 🏠 Home Screen

* Central hub to access all available games
* Clean and colorful UI
* Simple navigation to game modes and levels

---

## 🕹️ Games Included

### 1️⃣ Emoji Match Game

A memory-based matching game where players must match identical emojis within limited tries.

**Features**

* Grid-based emoji layout
* Matching logic using React state
* Limited number of attempts
* Clear win and lose feedback
* Dedicated navigation bar with rules and home option

---

### 2️⃣ Emoji Game (Memory Click Game)

A classic memory challenge where each emoji must be clicked **only once**.

**Features**

* Emojis shuffle after every click
* Score increases on unique emoji clicks
* Clicking a repeated emoji ends the game
* Timer-based gameplay
* Top Score persists across games
* Difficulty modes: Easy, Medium, Hard

---

### 3️⃣ Emoji Search Game

A focus-based game where players must find a **target emoji** among similar-looking emojis.

**Features**

* Target emoji displayed clearly
* Level-based progression
* Increasing difficulty with each level
* Limited tries per level
* Rules accessible during gameplay

---

## 🧩 Levels & Difficulty System

* Multiple difficulty modes: Easy / Medium / Hard
* Each mode increases:

  * Emoji count
  * Visual similarity
  * Overall challenge
* Implemented using **dynamic routing (React Router v6)**

---

## 🧭 Application Flow

1. Home Page → Select a game
2. Mode or Level Selection
3. Gameplay Screen
4. Result Screen (Win / Lose)
5. Play Again or Change Mode

---

## 🛠️ Technologies Used

* React JS
* React Router v6
* JavaScript (ES6+)
* CSS3 (Flexbox)
* Git & GitHub

---

## 📁 Folder Structure

```text
src/components/
├── EmojiGame
├── EmojiMatch
├── EmojiSearch
├── Home
├── GameType
├── LevelsType
├── MatchCard
├── MatchNavBar
├── SearchCard
├── SearchGameLevel
├── NavBar
├── WinOrLoseCard
├── NotFound
```

---

## ⚙️ Setup Instructions

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm start
```

---

## ⚠️ Important Notes (NxtWave Compatibility)

* Component folder names are unchanged
* Pre-filled code is preserved
* Emoji images use `alt={emojiName}` as required
* Project follows NxtWave testing constraints

---

## 🎨 UI & Design Highlights

* Font: **Roboto**
* Bright, emoji-friendly color palette
* Gradient backgrounds
* Responsive layouts using Flexbox
* Clear visual feedback for interactions

---

## 🚀 Future Enhancements

* Global leaderboard
* Sound effects and animations
* Mobile-first optimizations
* Timed challenges across all games

---

## 🚀 Live Demo
👉 ## 🚀 Live Demo
👉 https://emojizonehub.ccbp.tech/

