import {useContext,useEffect,useState} from 'react';
import {  createDrawerNavigator} from '@react-navigation/drawer';
import Feed from './Feed';
import CodeSaved from './CodeSaved';
import Options from './Options';
import ResultTab from './ResultTab';
import {HelpContext} from "../contextApi/context";
import { Image } from 'react-native-elements';
import LoadingScreen from './LoadingScreen';
import Carousel from './Carousel';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();




function CodeHelp() {
  const {getData,setSavedAnswer,storeData,showOneTimeScreen,setCodeCount} = useContext(HelpContext)

  // useEffect(() => {
  //   getData('info').then(data => {
  //     if(data === null) {
  //       setShowOneTimeScreen(true)
  //     }else {
  //       setShowOneTimeScreen(false)
  //     }
  //     console.log(data,showOneTimeScreen)
  //   })
  // }, [])


  function CodeSyntax({ navigation }) {
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        const delSave = (prop) => {
          getData('codeAnswer').then(result => {
            if(result === null) {
              setSavedAnswer([])
              setCodeCount(0)
            }else {
              const viewing = []
              const storage = []
              result.forEach((result,i) => {
                  if(result.id !== prop.id) {
                    storage.push(result)
                    result.ansType = delSave
                    result.typeText = 'delete'
                    viewing.push( 
                      <ResultTab props={result} key={i}/>
                    );
                  }
              })
              setCodeCount(storage.length)
              storeData('codeAnswer',storage)
              setSavedAnswer(viewing)
            }
          })
      }
          const views = [] 
          getData('codeAnswer').then(result => {
            if(result === null) {
              setSavedAnswer([])
            }else {
              result.map((data,i) => {
                data.ansType = delSave
                data.typeText = 'delete'
                views.push( 
                  <ResultTab props={data} key={i}/>
                );
              })
              setSavedAnswer(views)
            }
          })
      });

      return unsubscribe;


    }, []);
  
    return <CodeSaved />;
  }
const ImageL = ({prop}) => {
  return (
    <Image
    source={require('../assets/innerlogo.png')}
    containerStyle={{
     aspectRatio: 1,
     width: '5%',
     flex: 1,
    }}
    PlaceholderContent={<LoadingScreen />}
    onPress={() => {
      prop.navigation.navigate(prop.screen)
    }}
 />
  )
}
const Soptions = ({navigation}) => { 
  return {
  title: 'Saved Code',
  headerStyle: {
    backgroundColor: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 0
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => (
    <ImageL prop={{navigation: navigation,screen:'Code Help'}}/>
  ),
  drawerIcon: ({color}) => (
    <Ionicons name="save-outline" size={22} color={color} />
  )
  }
}
const options = ({navigation}) => { 
  return {  title: 'Code Help',
  headerStyle: {
    backgroundColor: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 0
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => (
    <ImageL prop={{navigation: navigation,screen:'Saved Code'}}/>
  ),
  drawerIcon: ({color}) => (
    <Ionicons name="search-outline" size={22} color={color} />
  )
  }
  }
     if(showOneTimeScreen === null) {
       return null;
     }else if(showOneTimeScreen === true) {
       return <Carousel />
     }else {
      return (
          <Drawer.Navigator 
          drawerContent={(props) => <Options {...props}/>}
          screenOptions={{
            // headerShown: false,
            drawerActiveBackgroundColor: 'black',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: 'white',
            drawerLabelStyle: {
              // marginLeft: -25,
              // fontFamily: 'Roboto-Medium',
              // fontSize: 20,
            },
          }}
          >
            
            <Drawer.Screen name="Code Help" component={Feed} options={options} />
            <Drawer.Screen name="Saved Code" component={CodeSyntax} options={Soptions} />
          </Drawer.Navigator>
      );
     }
    
}
  
export default CodeHelp;
