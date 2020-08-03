import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const AppDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const P = tw.p`
  text-purple-500
`;

function App() {
  return (
    <AppDiv>
      <AppHeader>
        <P className="text-purple-500">React App Rewired</P>
      </AppHeader>
    </AppDiv>
  );
}

export default App;
