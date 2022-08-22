import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeSreen = () => {
    
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Search Movie"
        onPress={() => navigation.navigate('MovieFinder')}
      />
    </View>
  )
}

export default HomeSreen