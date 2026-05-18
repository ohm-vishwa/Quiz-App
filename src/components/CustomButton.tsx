import { Pressable, StyleSheet, Text, View, PressableProps } from 'react-native'
import React, { ComponentProps } from 'react'

// type CustomButton = {
//     title: string;
//     rightIcon: React.ReactNode;
// } & PressableProps
type CustomButton = {
    title: string;
    rightIcon: React.ReactNode;
} & ComponentProps<typeof Pressable>

const CustomButton = ({ title, rightIcon, ...pressableProps }: CustomButton) => {
    return (
        <Pressable
            {...pressableProps}
            style={styles.button}>
            <Text style={styles.buttonTxt}>{title}</Text>
            <View style={styles.buttonIcon}>
                {rightIcon}
            </View>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#005055',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTxt: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5
    },
    buttonIcon: {
        position: 'absolute',
        right: 20
    }
})