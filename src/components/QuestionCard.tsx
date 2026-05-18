import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import AnswerOption from './AnswerOption'
import { Question } from '../types'
import Card from './Card'
import { useQuizeContext } from '../provider/QuizProvider'

type QuestionCard = {
    question: Question
}

const QuestionCard = ({ question }: QuestionCard) => {
    const { selectedOption, setSelectedOption } = useQuizeContext()

    const onOptionSelected = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <Card title={question?.title}>
            <View style={{ gap: 10 }}>
                {question.options.map((option, index) => (
                    <AnswerOption key={option} option={option} />
                ))}
            </View>
        </Card>
    )
}

export default QuestionCard

