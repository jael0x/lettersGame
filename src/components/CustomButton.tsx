import React, { FC } from 'react';
import { StyleSheet, Text, GestureResponderEvent, TouchableHighlight } from 'react-native';
import { ILetter } from '../utils';
import colors from '../resources/colors';

const CustomButton: FC<{
    letter: ILetter,
    onPress: { (e?: GestureResponderEvent): void }
}> = ({
    letter,
    onPress = () => { },
}) => {
        return (
            <TouchableHighlight style={[styles.button, { backgroundColor: letter.selected ? colors.GREEN : colors.ORANGE }]} onPress={onPress} underlayColor={colors.DARK_RED} disabled={letter.selected}>
                <Text style={styles.letter}>{letter.char}</Text>
            </TouchableHighlight>
        );
    };

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: colors.ORANGE,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.DARK_RED,
        borderWidth: 2,
        borderRadius: 7
    },
    letter: {
        color: colors.WHITE,
        fontWeight: 'bold',
        fontSize: 25,

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: -1 },
        textShadowRadius: 20
    }
});

export default CustomButton;