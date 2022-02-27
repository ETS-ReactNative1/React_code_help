import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CodeHelp from './components/CodeHelp';
import HelpProvider from './contextApi/context';
import ModalS from './components/Modal';



export default function App() {
  return ( 
   
      <HelpProvider>
        <NavigationContainer>
          <ModalS/>
          <CodeHelp />
        </NavigationContainer>
      </HelpProvider>
  
  );
}
