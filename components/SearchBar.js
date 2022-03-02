import { useContext,useState,useCallback } from "react";
import { SafeAreaView, StyleSheet, TextInput,View,Button } from "react-native";
import {HelpContext} from "../contextApi/context";
import ResultTab from './ResultTab';
import YoutubePlayer from "react-native-youtube-iframe";


const SearchBar = () => {
  const {setAnswers,search,saveAction,setLoading} = useContext(HelpContext)
  const [text, onChangeText] = useState('');
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const createAns = (response) => {
    const views = [];
    const {answers} = response.data 
      for (let i = 0; i < answers.length; i++) {
        answers[i].key = i
        answers[i].ansType = saveAction
        answers[i].typeText = 'save'
      let ans = answers[i]
      views.push( 
          <ResultTab props={ans} key={i}/>
        );
      }

      setLoading(() => {
        return {load: false,
          noAnswer: false}
      })
      setAnswers(views)
  }

  const creatYt = (response) => {
    const views = [];
      for (let i = 0; i < response.length; i++) {
       const vidId = response[i].id.videoId

      views.push( 
        <YoutubePlayer
          key={i}
          height={300}
          width={350}
          play={playing}
          videoId={vidId}
          onChangeState={onStateChange}
        />

        );
      }
      
      setLoading(() => {
        return {load: false,
          noAnswer: false}
      })
      setAnswers(views)
  }
  function submit() {
    setLoading(() => {
      return {load: true,
        noAnswer: false}
    })
    search(text)      
    .then(response => {
      if(response.data.items) {
          creatYt(response.data.items)
      }else {
        if(response.data.answers.length === 0) {
          search(text,'alt').then(response => {
            createAns(response)
            if(response.data.answers.length === 0) {
              setLoading(() => {
                return {load: true,
                  noAnswer: true}
              })
            }
          })
        }
        createAns(response)
      }
  
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
    borderRadius: 6,
    width: 300, 
    height: 45,
    borderColor: 'gold',
    textAlign: 'center',
    backgroundColor: 'white'
    // fontSize: 30
  },
});

export default SearchBar;