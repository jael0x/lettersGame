import React, { FC } from 'react';
import { StyleSheet, Text, GestureResponderEvent, TouchableHighlight } from 'react-native';

const CustomButton: FC<{
    letter: string,
    onPress: { (e?: GestureResponderEvent): void }
}> = ({
    letter,
    onPress = () => { },
}) => {
        return (
            <TouchableHighlight style={styles.button} onPress={onPress} underlayColor={'#B1191C'}>
                <Text style={styles.letter}>{letter}</Text>
            </TouchableHighlight>
        );
    };

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: '#F77C27',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#B1191C',
        borderWidth: 2,
        borderRadius: 7
    },
    letter: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 25,

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: -1 },
        textShadowRadius: 20
    }
});

export default CustomButton;