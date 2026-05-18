import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuizScreen from './src/app/QuizScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import QuizProvider from './src/provider/QuizProvider'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <QuizProvider>
          <QuizScreen />
        </QuizProvider>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    
  }
})