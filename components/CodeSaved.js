import {useContext} from 'react';
import { View,ScrollView,StyleSheet } from 'react-native';
import {HelpContext} from "../contextApi/context";


function CodeSaved() {
  const {savedAnswer} = useContext(HelpContext)


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'black',color: 'white' }}>
    <ScrollView   showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false} >
        <View style={styles.input}>
          
            {savedAnswer}
        </View>
  </ScrollView>
   </View>
  );
}
const styles = StyleSheet.create({
  input: {
      height: '100%',
      backgroundColor: 'black',
      width: '100%',
      alignItems: 'center'
    },
})
export default CodeSaved;
