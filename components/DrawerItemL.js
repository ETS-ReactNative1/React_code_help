import {
    CommonActions,
    DrawerActions,
    useLinkBuilder,
  } from '@react-navigation/native';
  import * as React from 'react';
  
  import {
    DrawerItem,
  } from '@react-navigation/drawer';


  /**
   * Component that renders the navigation list in the drawer.
   */
  export default function DrawerItemL(props) {
    const {
      state,
      navigation,
      descriptors,
    } = props.state
  
    const buildLink = useLinkBuilder();
  
    const focusedRoute = state.routes[state.index];
    const focusedDescriptor = descriptors[focusedRoute.key];
    const focusedOptions = focusedDescriptor.options;
  
    const {
      drawerActiveTintColor,
      drawerInactiveTintColor,
      drawerActiveBackgroundColor,
      drawerInactiveBackgroundColor,
    } = focusedOptions;
  
    
      const focused = props.focus === state.index;
      const {
        title,
        drawerLabel,
        drawerIcon,
        drawerLabelStyle,
        drawerItemStyle,
      } = descriptors[state.routes[props.focus].key].options;
  
      return (
        <DrawerItem
          key={state.routes[props.focus].key}
          label={
            drawerLabel !== undefined
              ? drawerLabel
              : title !== undefined
              ? title
              : state.routes[props.focus].name
          }
          icon={drawerIcon}
          focused={focused}
          activeTintColor={drawerActiveTintColor}
          inactiveTintColor={drawerInactiveTintColor}
          activeBackgroundColor={drawerActiveBackgroundColor}
          inactiveBackgroundColor={drawerInactiveBackgroundColor}
          labelStyle={drawerLabelStyle}
          style={drawerItemStyle}
          to={buildLink(state.routes[props.focus].name, state.routes[props.focus].params)}
          onPress={() => {
            navigation.dispatch({
              ...(focused
                ? DrawerActions.closeDrawer()
                : CommonActions.navigate({ name: state.routes[props.focus].name, merge: true })),
              target: state.key,
            });
          }}
        />
      );
   
  }