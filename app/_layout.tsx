import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen 
            name='index' 
            options={{
                headerTitle: "Home Page"
            }} 
        />
        <Stack.Screen 
            name='about' 
            options={{
                headerTitle: "About Page"
            }}
        />
        <Stack.Screen 
            name='users/[id]' 
            options={{
                headerTitle: "User Page"
            }}
        />
    </Stack>
  )
}

export default RootLayout