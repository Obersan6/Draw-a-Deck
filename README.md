# 🎴 Draw-a-Deck

A dynamic card-drawing app built with React and the **_Deck of Cards API_**. Users can draw cards one by one from a shuffled deck, watch them appear in real time, and reset the deck at any time.

🔗 **Live Site**: [https://Obersan6.github.io/Draw-a-Deck](https://Obersan6.github.io/Draw-a-Deck)

---

## 🌟 General Features

- Frontend-only React application
- Integrates with the [Deck of Cards API](https://deckofcardsapi.com/)
- Real-time card drawing and deck reset
- Uses `useEffect` and `useState` to manage side effects and state
- Clean UI with playful styling and animations
- Fully responsive and mobile-friendly

---

## 🧱 Tech Stack

- **Framework**: React
- **Styling**: CSS3, Google Fonts
- **API**: Deck of Cards API
- **Build Tool**: Vite

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Obersan6/Draw-a-Deck.git
cd Draw-a-Deck
```

### 2. Install dependencies

```
npm install
```

### 3. Run the app locally

```
npm run dev
```

Visit `http://localhost:5173` to view the app in your browser.

---

## 🛠 Build & Deploy (GitHub Pages)

To create a production build and deploy manually:

```
npm run build

# Deploy to GitHub Pages (if configured with gh-pages)
npx gh-pages -d dist
```

If manually pushing:
```
cd dist
git init
git add .
git commit -m "Deploy"
git branch -M gh-pages
git remote add origin https://github.com/Obersan6/Draw-a-Deck.git
git push -f origin gh-pages
```

Then enable GitHub Pages via `gh-pages` branch and root folder in repository settings.

---
<!-- 
## 📄 License

This project is for educational and portfolio use only. -->
