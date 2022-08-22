import { View, Text, TouchableOpacity,StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeSreen = () => {
    const localImage = require('../.././assets/background.jpg');
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={localImage} resizeMode="cover" style={styles.Image} >
      <TouchableOpacity 
        style={styles.button}
        
        onPress={() => navigation.navigate('MovieFinder')}
     >
        <Text style={styles.text} >F</Text>
     </TouchableOpacity>
     </ImageBackground>
    </View>
  )
}

export default HomeSreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  
    },
    button : {
        alignItems: "center",
        backgroundColor: "#868B8E",
        padding: 30,
        borderRadius: 50,
        
    },
    text : {
        fontSize: 30,
        
    },Image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "#868B8E",
      },
})