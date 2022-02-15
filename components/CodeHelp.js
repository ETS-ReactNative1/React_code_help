import React from 'react';
import {  createDrawerNavigator} from '@react-navigation/drawer';
import Feed from './Feed';
import CodeSaved from './CodeSaved';
import Options from './Options';

const Drawer = createDrawerNavigator();
 
function CodeHelp() {
    return (
        <Drawer.Navigator 
          drawerContent={(props) => <Options {...props} />}
        >
          <Drawer.Screen name="Code Help" component={Feed} />
          <Drawer.Screen name="Saved Code" component={CodeSaved} />
        </Drawer.Navigator>
      );
}
  
export default CodeHelp;
