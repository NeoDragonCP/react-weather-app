import React, { useState } from 'react';
import './App.css';
import { WeatherCard } from './components';

// Use module react-detect to check if on mobile
import { BrowserView } from "react-device-detect";

function App() {


  // Allow more cards to be added
  const [cardCount, setCardCount] = useState(1); // start with 1

  // Loop through the count and add the cards to the array
  const cards = [];
  for (var i = 0; i < cardCount; i += 1) {
    cards.push(<React.Fragment key={i}><WeatherCard /></React.Fragment>);
    // wrapped in fragment with key since each element must have one
  };


  return (
    <div className="app">
      {cards}
      {/* Using react-detect below to only render plus button on desktop*/}
      <BrowserView>
        <AddNewCard count={cardCount} setCardCount={setCardCount} />
      </BrowserView>
    </div>
  );
}

const AddNewCard = ({ count, setCardCount }) => {

  const maxCardCount = 3;

  // Check if max count is already reached, don't render button if true
  if (count >= maxCardCount) {
    return (<React.Fragment></React.Fragment>);
  }
  else {
    return (
      <React.Fragment>
        <button id="new-todo-submitbtn" onClick={() => {
          if (count < maxCardCount)
            setCardCount(count + 1)
        }}><i class="fa fa-plus"></i></button>
      </React.Fragment>
    )
  }

}

export default App;
