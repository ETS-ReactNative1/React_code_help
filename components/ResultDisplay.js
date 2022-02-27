import {useContext} from 'react';
import { View,StyleSheet,ScrollView} from 'react-native';
import {HelpContext} from "../contextApi/context";
import LoadingScreen from './LoadingScreen';


function ResultDisplay() {
  const {answer,loading} = useContext(HelpContext)
  if (loading.load) {
    return <LoadingScreen answer={loading.noAnswer} />
  }
  return (
    <ScrollView   showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false} >
        <View style={styles.input}>
            {answer}
        </View>
  </ScrollView>
  )}
const styles = StyleSheet.create({
    input: {
        height: '100%',
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center'
      },
})

export default ResultDisplay;
