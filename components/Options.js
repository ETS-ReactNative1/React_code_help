import React,{useContext,useEffect} from 'react';
import { View,Text,  ImageBackground, Image,TouchableOpacity} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import RNPickerSelect from 'react-native-picker-select';
  import {HelpContext} from "../contextApi/context";
  import { CheckBox } from 'react-native-elements';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerItemL from './DrawerItemL';
  
  const placeholder = {
    label: 'Select a Title...',
    value: '',
    color: 'black'
  }
const items = [
  { label: 'JavaScript', value: 'javascript',color: 'black' },
  { label: 'Python', value: 'Python',color: 'black' },
  { label: 'Swift', value: 'Swift' ,color: 'black'},
  { label: 'Html', value: 'Html' ,color: 'black'},
  { label: 'CSS', value: 'CSS' ,color: 'black'},
  { label: 'Shell/Bash', value: 'Shell/Bash' ,color: 'black'},
  { label: 'C#', value: 'C#' ,color: 'black'},
  { label: 'C++', value: 'C++' ,color: 'black'},
  { label: 'C', value: 'C' ,color: 'black'},
  { label: 'Java', value: 'Java',color: 'black' },
  { label: 'PostScript', value: 'PostScript',color: 'black' },
  { label: 'WebAssembly', value: 'WebAssembly',color: 'black' },
  { label: 'Clojure', value: 'Clojure',color: 'black' },
  { label: 'F#', value: 'F#' ,color: 'black'},
  { label: 'Lua', value: 'Lua' ,color: 'black'},
  { label: 'ActionScript', value: 'ActionScript' ,color: 'black'},
  { label: 'BASIC', value: 'BASIC',color: 'black' },
  { label: 'Smalltalk', value: 'Smalltalk',color: 'black' },
  { label: 'Pascal', value: 'Pascal',color: 'black' },
  { label: 'Assemblyt', value: 'Assemblyt' ,color: 'black'},
  { label: 'Kotlin', value: 'Kotlin' ,color: 'black'},
  { label: 'TypeScript', value: 'TypeScript' ,color: 'black'},
  { label: 'Perl', value: 'Perl' ,color: 'black'},
  { label: 'Groovy', value: 'Groovy' ,color: 'black'},
  { label: 'Ruby', value: 'Ruby' ,color: 'black'},
  { label: 'Go', value: 'Go',color: 'black' },
  { label: 'PHP', value: 'PHP' ,color: 'black'},
  { label: 'Objective-C', value: 'Objective-C',color: 'black' },
  { label: 'SQL', value: 'SQL' ,color: 'black'},
  { label: 'Scala', value: 'Scala',color: 'black' },
  { label: 'R', value: 'R' ,color: 'black'},
  { label: 'VBA', value: 'VBA',color: 'black' },
  { label: 'Rust', value: 'Rust' ,color: 'black'},
  { label: 'Prolog', value: 'Prolog',color: 'black' },
  { label: 'Lisp', value: 'Lisp' ,color: 'black'},
  { label: 'Dart', value: 'Dart' ,color: 'black'},
  { label: 'Erlang', value: 'Erlang',color: 'black' },
  { label: 'Haskell', value: 'Haskell',color: 'black' },
  { label: 'Matlab', value: 'Matlab' ,color: 'black'},
  { label: 'Elixir', value: 'Elixir' ,color: 'black'},
  { label: 'Fortran', value: 'Fortran' ,color: 'black'},
  { label: 'Scheme', value: 'Scheme' ,color: 'black'},
  { label: 'Julia', value: 'Julia',color: 'black' },
  { label: 'Delphi', value: 'Delphi' ,color: 'black'},
  { label: 'Abap', value: 'Abap',color: 'black' }
]

const help = [
  { label: 'codeSyntax', value: 'codeSyntax' ,color: 'black',backgroundColor: 'red'},
  { label: 'Mdn', value: 'Mdn' ,color: 'black'},
  { label: 'Youtube', value: 'Youtube' ,color: 'black'},
  { label: 'allHelp', value: 'allHelp',color: 'black' }
]

function Options(props) {
  // useEffect(() => {
  //   props.state.routes.pop() 
    
  // },[])

  
  // console.log(props,'handle')
  const {moreHelp,user,setMoreHelp,checkBox,setCheckBox,titleSearch,setTitleSearch,answer,codeCount,setCodeCount,getData,image,setModalVisible,pickImage} = useContext(HelpContext)
  useEffect(() => {
    getData('codeAnswer').then(result => {
      if(result !== null) {
        setCodeCount(result.length)
      }
    })
  }, [answer])
  
  
    return (
      <View style={{flex: 1,backgroundColor: 'black'}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: 'black',paddingTop:0}}>
        <ImageBackground
                  source={require('../assets/images/menu-bg.jpeg')}
                  style={{padding: 20,paddingTop:40}}>
                    <TouchableOpacity onPress={pickImage}>
                  <Image
                    source={image ? { uri: `data:image/gif;base64,${image}` } : require('../assets/images/user-profile.jpg')}
                    style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
                    
                  />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 18,                    
                      marginBottom: 5,
                    }}>
                    Welcome {user.length ? user : 'User'}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#fff',
                        marginRight: 5,
                      }}>
                      {codeCount} Code Saved
                    </Text>
                    <FontAwesome5 name="code" size={14} color="#fff" />
                  </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: 'black', paddingTop: '10%'}}>
          {/* <DrawerItemList {...props} /> */}
          <DrawerItemL state={props} focus={0}/>
          <DrawerItemL state={props} focus={1}/>
          <View paddingVertical={5} style={{marginLeft: 17,width: '60%'}}>
                      <Text style={{color: 'white'}}>Search By Titles</Text>
                      <View style={{backgroundColor: 'gray',borderRadius: 6,paddingLeft: 5}}>
                      <RNPickerSelect
                        placeholder={placeholder}
                        style={{
                          backgroundColor: 'gray',
                          borderColor: 'gray',
                          color: 'white'
                        }}
                        value={titleSearch}
                        onValueChange={(value) => setTitleSearch(value)}
                        items={items} 
                    />
                    </View>
                  </View>

                  <CheckBox
                    containerStyle={{backgroundColor: 'black',borderColor: 'black'}}
                    title="Search By Code"
                    textStyle={{color: 'white'}}
                    checked={checkBox}
                    onPress={() => setCheckBox(!checkBox)}
                  />

                  <View paddingVertical={5} style={{marginLeft: 17,width: '60%'}}>
                      <Text style={{color: 'white'}}>Show More Help</Text>
                      <View style={{backgroundColor: 'gray',borderRadius: 6,paddingLeft: 5}}>
                      <RNPickerSelect
                        placeholder={placeholder}
                        value={moreHelp}
                        onValueChange={(value) => setMoreHelp(value)}
                        items={help} 
                    />
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => setModalVisible(true)} style={{flexDirection: 'row', alignItems: 'center',padding:'5%',paddingBottom:0}}>
                      <Ionicons name="settings-outline" size={22} color='white'/>
                      <Text
                        style={{
                          fontSize: 15,
                          marginLeft: 5,
                          color: 'white'
                        }}>
                        Settings
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      props.navigation.toggleDrawer()}} style={{flexDirection: 'row', alignItems: 'center',padding:'5%',paddingBottom:0,paddingTop:20}}>
                      <Ionicons name="close-circle-outline" size={22} color='white'/>
                      <Text
                        style={{
                          fontSize: 15,
                          marginLeft: 5,
                          color: 'white'
                        }}>
                        Close Bar
                      </Text>
                    </TouchableOpacity>
                    

        </View>
        </DrawerContentScrollView>
        <TouchableOpacity onPress={() => {
          // removeData('info')

         props.navigation.navigate('About')

         }} style={{paddingBottom: 20}}>
          <View >
            <DrawerItemL state={props} focus={2} />
          </View>
        </TouchableOpacity>
        </View>
      );
}
//flexDirection: 'row', alignItems: 'center'


export default Options;
