import { createContext, useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Key from '../assets/key';
import * as ImagePicker from 'expo-image-picker';

const axios = require('axios');
export const HelpContext = createContext();

const HelpProvider = (props) => {
    const [answer,setAnswers] = useState([])
    const [titleSearch, setTitleSearch] = useState('')
    const [checkBox,setCheckBox] = useState(false)
    const [moreHelp,setMoreHelp] = useState('')
    const [savedAnswer, setSavedAnswer] = useState([])
    const [showOneTimeScreen, setShowOneTimeScreen] = useState(null);
    const [loading, setLoading] = useState({load: false,
    noAnswer: false});
    const [codeCount,setCodeCount] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);
    const [user,setUser] = useState('')
    const [image, setImage] = useState(null);
    const [color, setColor] = useState('rgba(230,81,116,0.7)');

    async function search(query,other) {
      const response = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          key: Key
        }
      })
        try {
          if(other === 'alt') {
            const response = await axios.get(`https://www.codegrepper.com/api/search.php?q=${query}`);
            return response
          }
          const mhelp = {
            'help': false,
            results: []
          }
          if(moreHelp.length) {
            mhelp['help'] = true
            if(moreHelp === 'codeSyntax') {
              const res = await axios.get(`https://www.codegrepper.com/api/get_answers_1.php?v=2&s=${query}`)
              mhelp.results = res.data['more_answers']
            }else if(moreHelp === 'Mdn') {
              const res = await axios.get(`https://developer.mozilla.org/api/v1/search?q=${query}`)
              const mdnSearch = res.data.documents.map(x => {
                x.answer = x.summary
                x.language = x.title
                return x
              })
              mhelp.results = mdnSearch
            }else if(moreHelp === 'allHelp') {
              const res = await axios.get(`https://www.codegrepper.com/api/get_answers_1.php?v=2&s=${query}`)
              const resp = await axios.get(`https://developer.mozilla.org/api/v1/search?q=${query}`)
              const mdnSearch = resp.data.documents.map(x => {
                x.answer = x.summary
                x.language = x.title
                // x.highlight.title[0]
                return x
              })
              mhelp.results = [...res.data['more_answers'],...mdnSearch]
            }else if(moreHelp === 'Youtube') {
               const searchT = await response.get('/search',{
                 params: {
                   q:query
                 }
               })
               return searchT
         
            }
          }
          if(checkBox && !(titleSearch === '')) {
            const response = await axios.get(`https://www.codegrepper.com/api/search.php?q=${query}&search_options=search_titles,search_code`);
            const bysearch = response.data.answers.filter(x => x.language === titleSearch.toLowerCase())
            response.data.answers = bysearch  
            if(mhelp['help']) {
              let concat = response.data.answers.concat(mhelp.results)
              response.data.answers = concat
              return response
            }else {
              return response 
            }
          }else if(checkBox) {
              const response = await axios.get( `https://www.codegrepper.com/api/search.php?q=${query}&search_options=search_code`);
              if(mhelp['help']) {
                let concat = response.data.answers.concat(mhelp.results)
                response.data.answers = concat
                return response
              }else {
                return response 
              }        
            }else if(!(titleSearch === '')) {
                const response = await axios.get(`https://www.codegrepper.com/api/search.php?q=${query} ${titleSearch}&search_options=search_titles`);
                if(mhelp['help']) {
                  let concat = response.data.answers.concat(mhelp.results)
                  response.data.answers = concat
                  return response
                }else {
                  return response 
                }
            }else {
                const response = await axios.get(`https://www.codegrepper.com/api/get_answers_1.php?v=2&s=${query}`);
                if(mhelp['help']) {
                  let concat = response.data.answers.concat(mhelp.results)
                  response.data.answers = concat
                  return response
                }else {
                  return response 
                }
            } 
        } catch (error) {
          console.error(error,'not good');
          setLoading(() => { 
            return {load: true,
              noAnswer: true}
          })
        }
      }
      const storeData = async (key,value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            console.log(e)
          // saving error
        }
      }
      const getData = async (key) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
      }
      const removeData = async (key) => {
        try {
          const jsonValue = await AsyncStorage.removeItem(key)
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
      }
      const saveAction = (props) => {
        props.colorChg('gold')
        // props.ansType = delSave
        getData('codeAnswer').then(result => {
            if(result === null) {
                const newSave = []
                newSave.push(props)
                storeData('codeAnswer',newSave)
                setCodeCount(1)
            }else {
                const duplicate = result.filter(res => res.id === props.id)
                if(duplicate.length) {
                    props.colorChg('red')
                }else {
                    result.push(props)
                    storeData('codeAnswer',result)
                    setCodeCount(result.length)
                }
            }
            setTimeout(() => {
                props.colorChg('white')
              }, 900);
        })
       
      }

      useEffect(() => {
          getData('info').then(result => {
            if(result === null) {
              storeData('info',true)
              setShowOneTimeScreen(true)
            }else {
              getData('image').then(res => {
                if(res !== null) {
                  setImage(res)
                  getData('user').then(res => {
                    if(res !== null) {
                      setUser(res)
                      
                    }
                  })
                }
              })
              setShowOneTimeScreen(false)
            }
          })
      },[])
      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const options = {
          mediaTypes:  ImagePicker.MediaTypeOptions.Images,
          base64: true,
          allowsEditing: true,
          quality: 1,
          aspect: [4, 3],
        }

        const result = await ImagePicker.launchImageLibraryAsync(options)


 
        
        /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    


        if (!result.cancelled) {
            setColor('green')
            storeData('image',result.base64)
          setImage(result.base64);
        }else {
            setColor('red')
        }
      };

    const value ={
        answer,
        showOneTimeScreen, 
        setShowOneTimeScreen,
        setAnswers,
        search,
        titleSearch,
         setTitleSearch,
         storeData,
         checkBox,
         setCheckBox,
         moreHelp,
         setMoreHelp,
         saveAction,
         getData,
         savedAnswer,
          setSavedAnswer,
          loading,
           setLoading,
           codeCount,
           setCodeCount,
           removeData,
           modalVisible,
            setModalVisible,
            user,
            setUser,
            image, 
            setImage,
            pickImage,
            color
    }
    return (
        <HelpContext.Provider value={value}>
            {props.children}
        </HelpContext.Provider>
    )
}
 
export default HelpProvider