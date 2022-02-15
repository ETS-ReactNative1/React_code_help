import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CodeHelp from './components/CodeHelp';
import HelpProvider from './contextApi/context';

export default function App() {
  return ( 
    <HelpProvider>
      <NavigationContainer>
        <CodeHelp />
      </NavigationContainer>
    </HelpProvider>
  );
}
