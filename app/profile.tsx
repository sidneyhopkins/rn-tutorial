import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  return (
    <View className='flex flex-1 items-center justify-center'>
      <Text className='text-3xl text-black font-bold'>Profile</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})