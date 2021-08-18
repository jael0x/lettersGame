import React, { FC, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CustomButton: FC<{
    letter: string
}> = ({
    letter
}) => {
        return (
            <View style={styles.button}>
                <Text>{letter}</Text>
            </View>
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
    }
});

export default CustomButton;