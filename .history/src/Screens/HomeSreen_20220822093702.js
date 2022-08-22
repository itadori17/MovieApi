import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeSreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      
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
    backgroundColor: "#C8B4D0",
    },
    button : {
        alignItems: "center",
        backgroundColor: "#83BDC0",
        padding: 30,
        borderRadius: 50,
        
    },
    text : {
        fontSize: 30,
        
    }
})