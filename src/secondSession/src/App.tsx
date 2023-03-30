import React, { useMemo } from "react";
import styled from "styled-components";
import { getRandomNumber } from "./getRandomNumber";

function App() {
  const numberToGuess = useMemo(() => getRandomNumber(0, 100), []);

  return (
    <VerticalContainer>
      <HorizontalContainer>
        </HorizontalContainer>
        <big>Guess the number</big>
        <div>
          <input placeholder="Enter your number" id="number-input" type="number" />
          <button onClick={() => console.log(`The number to guess was ${numberToGuess}`)}>Play!</button>
        </div>
    </VerticalContainer>
  );
}

export default App;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const VerticalContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
