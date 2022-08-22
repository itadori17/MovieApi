import { View, Text, TouchableOpacity,StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeSreen = () => {
    const image = { uri: "https://www.canva.com/design/DAFKCKwMUt8/3k4qQscRs7XZbqNNRBMDsw/view?utm_content=DAFKCKwMUt8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" };
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} >
      <TouchableOpacity 
        style={styles.button}
        
        onPress={() => navigation.navigate('MovieFinder')}
     >
        <Text style={styles.text} >Home Screen</Text>
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
        backgroundColor: "#83BDC0",
        padding: 30,
        borderRadius: 50,
        
    },
    text : {
        fontSize: 30,
        
    },image: {
        flex: 1,
        justifyContent: "cover"
      },
})