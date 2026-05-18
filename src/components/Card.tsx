import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type Card = {
    title: string
}

const Card = ({ title, children }: PropsWithChildren<Card>) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        paddingVertical: 40,
        gap: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
})