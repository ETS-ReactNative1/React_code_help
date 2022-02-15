import { useContext,useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import {HelpContext} from "../contextApi/context";
import ResultTab from './ResultTab';


const SearchBar = () => {
  const {setAnswers,search} = useContext(HelpContext)
  const [text, onChangeText] = useState('');
  function submit() {
    search(text)      
    .then(response => {
      const views = [];
      const {answers} = response.data
        for (let i = 0; i < answers.length; i++) {
          answers[i].key = i
        let ans = answers[i]
        views.push( 
            <ResultTab props={ans} key={i}/>
          );
        }
        setAnswers(views)
  })
    onChangeText('')
  } 

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=" Search Code "
        keyboardType="web-search"
        onSubmitEditing={submit}
      />
    </SafeAreaView>
  ); 
};  
   
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 18,
    width: 300, 
    height: 45,
    borderColor: 'gold',
    textAlign: 'center',
    backgroundColor: 'white'
    // fontSize: 30
  },
});

export default SearchBar;