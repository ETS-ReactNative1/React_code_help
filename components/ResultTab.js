import {useState} from 'react';
import { View,StyleSheet} from 'react-native';
import Results from './Results'; 
import { Button, Text } from 'react-native-elements';
import * as Clipboard from 'expo-clipboard';

 
function ResultTab({props}) {
  // console.log('testnow',props)
  const [copyClr,setCopyClr] = useState('white')
  const [saveClr,setSaveClr] = useState('white')
  const copyAction = () => {
    Clipboard.setString(props.answer);
    setCopyClr('gold')
    setTimeout(() => {
      // console.log('dsd')
      setCopyClr('white')
    }, 900);
  }
props.colorChg = setSaveClr
  if(props.language === 'whatever'){ props.language = 'Unknown'}
    return <View style={styles.input} key={props.key}>
      <View style={styles.option}>
      <Button
                  icon={{
                    name: props.typeText,
                    size: 15,
                    color: saveClr,
                  }}
                  buttonStyle={styles.saveBtn}
                  containerStyle={styles.save}
                  onPress={() => { props.ansType(props)}}
            />
        <Text style={{color: 'white'}} >{props.language}</Text>
    
          <Button
                  icon={{
                    name: 'copy',
                    type: 'font-awesome',
                    size: 15,
                    color: copyClr,
                  }}
                  buttonStyle={{
                    backgroundColor: 'black',
                    borderColor: 'white',
                    borderWidth: 2,
                    borderRadius: 30,
                  }}
                  containerStyle={styles.save}
                  onPress={copyAction}
                />
       
      </View>
       <Results code={{ans:props.answer,lang:props.language}}/>
  </View>;
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: '98%',
        backgroundColor: 'black',
        marginTop: 5,
        marginBottom: 10
        // fontSize: 30
      },
      option: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingBottom: 10
      },
      save: {
        width: 50,
      },
      saveBtn: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
      }
})

export default ResultTab;
