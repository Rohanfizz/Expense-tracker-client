
import WholeApp from './pages/WholeApp';
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil';



function App() {
  

  return (
<RecoilRoot>
    <ChakraProvider>
      <WholeApp/>
    </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;