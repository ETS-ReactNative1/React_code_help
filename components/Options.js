import React,{useContext} from 'react';
import { View,Text,StyleSheet} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import RNPickerSelect from 'react-native-picker-select';
  import {HelpContext} from "../contextApi/context";
  import { CheckBox } from 'react-native-elements';


  
  const placeholder = {
    label: 'Select a Title...',
    value: '',
    color: '#9EA0A4',
  }
const items = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'Python' },
  { label: 'Swift', value: 'Swift' },
  { label: 'Html', value: 'Html' },
  { label: 'CSS', value: 'CSS' },
  { label: 'Shell/Bash', value: 'Shell/Bash' },
  { label: 'C#', value: 'C#' },
  { label: 'C++', value: 'C++' },
  { label: 'C', value: 'C' },
  { label: 'Java', value: 'Java' },
  { label: 'PostScript', value: 'PostScript' },
  { label: 'WebAssembly', value: 'WebAssembly' },
  { label: 'Clojure', value: 'Clojure' },
  { label: 'F#', value: 'F#' },
  { label: 'Lua', value: 'Lua' },
  { label: 'ActionScript', value: 'ActionScript' },
  { label: 'BASIC', value: 'BASIC' },
  { label: 'Smalltalk', value: 'Smalltalk' },
  { label: 'Pascal', value: 'Pascal' },
  { label: 'Assemblyt', value: 'Assemblyt' },
  { label: 'Kotlin', value: 'Kotlin' },
  { label: 'TypeScript', value: 'TypeScript' },
  { label: 'Perl', value: 'Perl' },
  { label: 'Groovy', value: 'Groovy' },
  { label: 'Ruby', value: 'Ruby' },
  { label: 'Go', value: 'Go' },
  { label: 'PHP', value: 'PHP' },
  { label: 'Objective-C', value: 'Objective-C' },
  { label: 'SQL', value: 'SQL' },
  { label: 'Scala', value: 'Scala' },
  { label: 'R', value: 'R' },
  { label: 'VBA', value: 'VBA' },
  { label: 'Rust', value: 'Rust' },
  { label: 'Prolog', value: 'Prolog' },
  { label: 'Lisp', value: 'Lisp' },
  { label: 'Dart', value: 'Dart' },
  { label: 'Erlang', value: 'Erlang' },
  { label: 'Haskell', value: 'Haskell' },
  { label: 'Matlab', value: 'Matlab' },
  { label: 'Elixir', value: 'Elixir' },
  { label: 'Fortran', value: 'Fortran' },
  { label: 'Scheme', value: 'Scheme' },
  { label: 'Julia', value: 'Julia' },
  { label: 'Delphi', value: 'Delphi' },
  { label: 'Abap', value: 'Abap' }
]

const help = [
  { label: 'allHelp', value: 'allHelp' },
  { label: 'codeSyntax', value: 'codeSyntax' },
  { label: 'Mdn', value: 'Mdn' },
  { label: 'Youtube', value: 'Youtube' },
]

function Options(props) {
  const {moreHelp,setMoreHelp,checkBox,setCheckBox,titleSearch,setTitleSearch} = useContext(HelpContext)
  
    return (
        <DrawerContentScrollView {...props} >
                <Text>Welcome</Text>
           
                 <View>
                  <DrawerItemList {...props} />
                  <View paddingVertical={5} style={{marginLeft: 17,width: '60%'}}>
                      <Text style={{color: 'rgba(28, 28, 30, 0.68)'}}>Search By Titles</Text>
                      <RNPickerSelect
                        placeholder={placeholder}
                        value={titleSearch}
                        onValueChange={(value) => setTitleSearch(value)}
                        items={items} 
                    />
                  </View>

                  <CheckBox
                    containerStyle={{backgroundColor: 'white',borderColor: 'white'}}
                    title="Search By Code"
                    checked={checkBox}
                    onPress={() => setCheckBox(!checkBox)}
                  />

                  <View paddingVertical={5} style={{marginLeft: 17,width: '60%'}}>
                      <Text style={{color: 'rgba(28, 28, 30, 0.68)'}}>Show More Help</Text>
                      <RNPickerSelect
                        placeholder={placeholder}
                        value={moreHelp}
                        onValueChange={(value) => setMoreHelp(value)}
                        items={help} 
                    />
                  </View>

                  <DrawerItem
                    label="Toggle drawer"
                    onPress={() => props.navigation.toggleDrawer()}
                  />
              </View> 
            <Text>About</Text>
        </DrawerContentScrollView>
      );
}



export default Options;
