import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = "https://deckofcardsapi.com/api/deck";

function CardDeck() {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);

  // Load a new deck on mount
  useEffect(() => {
    async function fetchDeck() {
      const res = await axios.get(`${API_BASE}/new/shuffle/`);
      setDeck(res.data);
    }
    fetchDeck();
  }, []);

  // Draw a new card
  async function drawCard() {
    if (!deck) return;

    try {
      const res = await axios.get(`${API_BASE}/${deck.deck_id}/draw/?count=1`);
      if (res.data.remaining === 0) {
        alert("Error: no cards remaining!");
        return;
      }
      setCards((prevCards) => [...prevCards, res.data.cards[0]]);
    } catch (err) {
      alert("Error fetching card");
    }
  }

  // Shuffle the deck
  async function shuffleDeck() {
    if (!deck) return;

    setIsShuffling(true);
    await axios.get(`${API_BASE}/${deck.deck_id}/shuffle/`);
    setCards([]); // Clear drawn cards
    setIsShuffling(false);
  }

  return (
    <div className="card-app">
      <button onClick={drawCard} disabled={!deck}>
        Draw Card
      </button>
      <button onClick={shuffleDeck} disabled={isShuffling}>
        {isShuffling ? "Shuffling..." : "Shuffle Deck"}
      </button>
      <div className="card-container">
        {cards.map((card) => (
          <img key={card.code} src={card.image} alt={`${card.value} of ${card.suit}`} />
        ))}
      </div>
    </div>
  );
}

export default CardDeck;

