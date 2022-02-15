import React from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/styles/prism' // 7.0.1
 

   
function Results({code}) {
  return (
   <SyntaxHighlighter 
  	language={code.lang} 
  	style={vs}
    customStyle={{padding: 10, margin: 0 ,borderRadius: 25}}
    fontSize={18}
  	highlighter={"prism" || "hljs"}
    showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false}
  >
  	{code.ans}
  </SyntaxHighlighter>
  );
}
  
export default Results;
   