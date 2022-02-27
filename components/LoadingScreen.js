import React from 'react'
import { ActivityIndicator, StyleSheet,Text, View } from "react-native";

function LoadingScreen({answer}) { 
  if(answer) {
    return (
      <View style={[styles.container]}>      
          <Text style={{color: 'white',marginBottom: 20}}>Syntax for search not found. Try a different Search Query </Text>
          <ActivityIndicator size="large" color="red" animating={false} hidesWhenStopped={false} />
      </View>
    )
  }else {
    return (
      <View style={[styles.container]}>
          <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: 'black'
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
export default LoadingScreen