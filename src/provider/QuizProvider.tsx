import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import questions from "../questions";
import { Question } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type QuickContext = {
    question?: Question;
    questionIndex: number;
    onNext: () => void;
    selectedOption?: string,
    setSelectedOption: (newOption: string) => void;
    score: number;
    totalQuestions: number;
    bestScore: number
}

const QuickContext = createContext<QuickContext>({
    questionIndex: 0,
    onNext: () => { },
    setSelectedOption: () => { },
    score: 0,
    totalQuestions: 0,
    bestScore: 0
})
export default function QuizProvider({ children }: PropsWithChildren) {


    const [questionIndex, setQuestionIndex] = useState(0);
    const question = questions[questionIndex];

    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0);
    const isFinished = questionIndex >= questions.length;

    useEffect(() => {
        loadBestScore()
    }, [])

    useEffect(() => {
        if (isFinished === true && score > bestScore) {
            setBestScore(score)
            saveBestScore(score);
        }
    }, [isFinished])

    const restsart = () => {
        setQuestionIndex(0),
            setSelectedOption(''),
            setScore(0)
    }

    const onNext = () => {
        if (isFinished) {
            restsart();
            return;
        }

        if (selectedOption === question?.correctAnswer) {
            setScore((currScore) => currScore + 1)
        }
        setQuestionIndex((currentVal) => currentVal + 1);
    }

    const saveBestScore = async (value: number) => {
        try {
            AsyncStorage.setItem('best-score', value.toString())
        } catch (e) {

        }
    }

    const loadBestScore = async () => {
        try {
            const value = await AsyncStorage.getItem('best-score')
            if (value !== null) {
                setBestScore(Number.parseInt(value))
            }
        } catch {

        }
    }
    console.warn('Score', score)
    return (
        <QuickContext.Provider value={{ question, questionIndex, onNext, selectedOption, setSelectedOption, score, totalQuestions: questions.length, bestScore }}>
            {children}
        </QuickContext.Provider>
    )
}

export const useQuizeContext = () => useContext(QuickContext)