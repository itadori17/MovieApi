import { View, Text } from 'react-native'
import React from 'react'

const HomeSreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="
        "
        onPress={() => navigation.navigate('MovieFinder')}
      />
    </View>
  )
}

export default HomeSreen