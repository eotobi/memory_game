import React, { useState, useEffect } from 'react';
import '../styles/section2.scss';
import Card from './Card';

const Section2 = () => {
  const min = 1;
  const max = 200;

  // Create an array of random numbers, each repeated twice to form pairs
  const generateRandomNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(randomNum, randomNum); // Add the number twice
    }
    return shuffleArray(numbers); // Shuffle the array
  };

  // Use the Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [cards, setCards] = useState(generateRandomNumbers());
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [disableClick, setDisableClick] = useState(false);

  // Handle card click
  const handleCardClick = (index) => {
    if (!flippedIndexes.includes(index) && flippedIndexes.length < 2 && !disableClick) {
      const newFlippedIndexes = [...flippedIndexes, index];
      setFlippedIndexes(newFlippedIndexes);

      if (newFlippedIndexes.length === 2) {
        setDisableClick(true);

        // Check if the two flipped cards match
        if (cards[newFlippedIndexes[0]] === cards[newFlippedIndexes[1]]) {
          setMatchedPairs([...matchedPairs, cards[newFlippedIndexes[0]]]);
        }

        // Flip the cards back after a delay
        setTimeout(() => {
          setFlippedIndexes([]);
          setDisableClick(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    // Check if the game is won (all pairs matched)
    if (matchedPairs.length === 10) {
      alert('Congratulations! You won the game!');
    }
  }, [matchedPairs]);

  return (
    <div className='main-section'>
      <div className='cards-container'>
        {cards.map((number, index) => (
          <div
            key={index}
            className={`card ${flippedIndexes.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {flippedIndexes.includes(index) || matchedPairs.includes(number) ? (
              <Card number={number} />
            ) : (
              'Click to reveal'
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
