import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeSreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity 
      
        title="Search Movie"
        onPress={() => navigation.navigate('MovieFinder')}
      />
    </View>
  )
}

export default HomeSreen