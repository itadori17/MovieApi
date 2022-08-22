import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MovieFinder = () => {
  return (
    <View>
     <Text>Home Screen</Text>
      <TouchableOpacity
        
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default MovieFinder