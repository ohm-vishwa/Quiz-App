import { StyleSheet, Text, View, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { useQuizeContext } from '../provider/QuizProvider';
import { useTimer } from '../hooks/useTimer';
import LottieView from 'lottie-react-native';
import party from '../../assets/party.json'


const QuizScreen = () => {
    const { question, questionIndex, onNext, score, totalQuestions, bestScore } = useQuizeContext()

    const { time, startTimer, ClearTimer } = useTimer(20)
    useEffect(() => {
        // startTimer()
        return () => {
            ClearTimer()
        }
    }, [question])

    useEffect(() => {
        if (time <= 0) {
            onNext()
        }
    }, [time])

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
                {/* Header */}
                <View>
                    <Text style={styles.title}>Question {questionIndex + 1}/{totalQuestions}</Text>
                </View>

                {/* Body */}
                {question ? (<View>
                    <QuestionCard question={question} />
                    <Text style={styles.time}>{time} sec</Text>
                </View>) :
                    (
                        <>
                    <Card title='Well Done'>
                        <Text>Correct answer: {score}/{totalQuestions}</Text>
                        <Text>Best score: {bestScore}</Text>
                    </Card>
                                        <LottieView source={require('../../assets/party.json')}
                        style={StyleSheet.absoluteFill}
                        autoPlay
                        loop={false}
                        />
                        </>
                )}

                {/* Footer */}
                <CustomButton title='Next' rightIcon={
                    <FontAwesome6 name="arrow-right-long" size={24} color="white" />
                }
                    onPress={onNext}
                    onLongPress={() => console.warn('Long Pressed')}
                />
            </View>
        </SafeAreaView>
    )
}

export default QuizScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FDFEF4'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
    },
    title: {
        textAlign: 'center',
        color: '#005055'
    },
    time: {
        textAlign: 'center',
        marginTop: 15,
        color: '#005055',
        fontWeight: 'bold'
    },
})