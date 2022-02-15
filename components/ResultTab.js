import React from 'react';
import { View,StyleSheet} from 'react-native';
import Results from './Results'; 
import { Button, Text } from 'react-native-elements';

function saveAction() {
  console.log('hello')
}

function ResultTab({props}) {
    return <View style={styles.input} key={props.key}>
      <View style={styles.option}>
      <Button
                  icon={{
                    name: 'save',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                  }}
                  buttonStyle={styles.saveBtn}
                  containerStyle={styles.save}
                  onPress={saveAction}
            />
        <Text style={{color: 'white'}} >{props.language}</Text>
    
          <Button
                  icon={{
                    name: 'copy',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                  }}
                  buttonStyle={{
                    backgroundColor: 'black',
                    borderColor: 'white',
                    borderWidth: 2,
                    borderRadius: 30,
                  }}
                  containerStyle={styles.save}
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
