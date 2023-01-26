
import WholeApp from './pages/WholeApp';
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    document.title = 'Expense Tracker';
  }, []);

  return (
<RecoilRoot>
  
    <ChakraProvider>
      <WholeApp/>
    </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;