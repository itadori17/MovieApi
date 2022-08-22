import { View, Text, TouchableOpacity,StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeSreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground>
      <TouchableOpacity 
        style={styles.button}
        
        onPress={() => navigation.navigate('MovieFinder')}
     >
        <Text style={styles.text} >Home Screen</Text>
     </TouchableOpacity>
    </View>
  )
}

export default HomeSreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#145DA0",
    },
    button : {
        alignItems: "center",
        backgroundColor: "#83BDC0",
        padding: 30,
        borderRadius: 50,
        
    },
    text : {
        fontSize: 30,
        
    },image: {
        flex: 1,
        justifyContent: "center"
      },
})