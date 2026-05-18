import { Pressable, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { useQuizeContext } from '../provider/QuizProvider'

type AnswerOption = {
    option: string,
}

const AnswerOption = ({ option }: AnswerOption) => {
    const { selectedOption, setSelectedOption } = useQuizeContext()

    const isSelected = option === selectedOption
    return (
        <Pressable style={[styles.container, isSelected && { backgroundColor: '#E1F396', borderColor: '#E1f396' }]}
            onPress={() => setSelectedOption(option)}
        >
            <Text>{option}</Text>
        </Pressable>
    )
}

export default AnswerOption

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 20,
        borderColor: 'lightgray',
        borderRadius: 100
    }
})