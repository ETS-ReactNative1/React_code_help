import React from 'react'
import { View,Text,ScrollView,Image } from 'react-native'
import LoadingScreen from './LoadingScreen';

function About() {
  return (
    <ScrollView   showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false} style={{backgroundColor: 'black'}}>
    <View style={{backgroundColor: 'black',alignItems: 'center'}}>
      <Text style={{fontSize: 20,fontWeight: "bold",color: 'white',paddingTop:5}}>Code Help</Text>
        <Text style={{color: 'white',alignItems: 'center'}}>  
        A really cool feature on my phone is the ability to know what method or syntax to use when you paste a coding question.
        The app reads questions in the most commonly used languages such as javascript, Python and more. Display the answers. 
        App contains show more help that takes different input.
        {"\n"}
        <Text style={{fontSize: 15,fontWeight: "bold",color: 'gray'}}>Syntax: </Text>
              The syntax options provides more help by adding more answers from the api to display more code answers.
        {"\n"}
        <Text style={{fontSize: 15,fontWeight: "bold",color: 'gray'}}>Search Bar: </Text> search bar can be used to search up code questions, That you may have when you search a question that is not available, You get more options with the MDN API to link you to the Docs.
        {"\n"}
        <Text style={{fontSize: 15,fontWeight: "bold",color: 'gray'}}>Search Filter: </Text>: Filters to help you narrow down your search. Search By Title narrow search by title. Search By Code help's narrow solutions with code syntax. Codesaved access saved answers. Show More Help provides more syntax
        {"\n"}
        <Text style={{fontSize: 15,fontWeight: "bold",color: 'gray'}}>Youtube Search: </Text> Youtube search is available in the show more Help section. When checked it will display code answers on youtube to help understand the question better. Also having a Video tutorial help can be usefull.
        {"\n"} 
        <Text style={{fontSize: 15,fontWeight: "bold",color: 'gray'}}>Mdn: </Text>
        Mdn Search uses the Mdn API to display answers when the app doesnt have an answers also the mdn option can be checked in the more help section.
    {"\n"} 
       <> </> The app returns answers with links to explain the methods that are suggested. This feature will encourage more coding among beginners,
        and increase productivity among software professions because it makes solving complex problems faster. s Engineers would have access to 
       different options to solve these problems.</Text>
       <Image
            source={require('../assets/aboutHelp.png')}
            style={{
            aspectRatio: 1,
            width: 300,
            height: 300
            //  flex: 1,
            }}
            PlaceholderContent={<LoadingScreen />}
        />
      <Text style={{color: 'white',fontSize: 20,fontWeight: "bold"}}>Image Help</Text>
      <Text style={{color: 'white'}}>
        <Text style={{color: 'white'}}>1:</Text> This is the input to save your name in the app.{"\n"} 
        <Text style={{color: 'white'}}>2:</Text> The user picture takes the user image and saves it to the local storage.{"\n"} 
        <Text style={{color: 'white'}}>3:</Text> This is a tip that shows that the modal is for saving user choices and not saved online.{"\n"} 
        <Text style={{color: 'white'}}>4:</Text> This will erase the app with an alert to restart or quit and reopen the app.{"\n"} 
        <Text style={{color: 'white'}}>5:</Text> This closes the modal. This doesnt save the input for username. Once you press submit the username is saved
      </Text>
    </View>
    </ScrollView>
  )
}

export default About