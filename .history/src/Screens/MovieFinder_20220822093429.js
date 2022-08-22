import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MovieFinder = () => {
  return (
    <View>
     <Text>Home Screen</Text>
      <TouchableOpacity
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default MovieFinder