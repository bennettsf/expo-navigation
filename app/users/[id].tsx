import { View, Text } from 'react-native'
import React, { useSyncExternalStore } from 'react'
import { useLocalSearchParams } from 'expo-router'

const UserPage = () => {
    const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text>User Page - {id}</Text>
    </View>
  )
}

export default UserPage