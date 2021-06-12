import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
