import { View, Text } from 'react-native'
import React from 'react'

const HomeSreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default HomeSreen