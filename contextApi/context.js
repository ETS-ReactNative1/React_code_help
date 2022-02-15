import { createContext, useState} from 'react';
const axios = require('axios');
export const HelpContext = createContext();

const HelpProvider = (props) => {
    const [answer,setAnswers] = useState([])
    const [titleSearch, setTitleSearch] = useState('')
    const [checkBox,setCheckBox] = useState(false)
    const [moreHelp,setMoreHelp] = useState('')
    async function search(query) {
        try {
            if(!(titleSearch === '')) {
                const response = await axios.get(`https://www.codegrepper.com/api/search.php?q=${query} ${titleSearch}&search_options=search_titles`);
                return response
            }else {
                const response = await axios.get(`https://www.codegrepper.com/api/get_answers_1.php?v=2&s=${query}`);
                return response
            } 
        } catch (error) {
          console.error(error);
        }
      }
    const value ={
        answer,
        setAnswers,
        search,
        titleSearch,
         setTitleSearch,
         checkBox,
         setCheckBox,
         moreHelp,
         setMoreHelp
    }
    return (
        <HelpContext.Provider value={value}>
            {props.children}
        </HelpContext.Provider>
    )
}
 
export default HelpProvider