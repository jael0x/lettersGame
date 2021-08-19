import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { sliceRandomlyArrayInChunks } from './utils';
import CustomButton from './components/CustomButton';

const lettersJson = require('./resources/test-board-2.json');
const clearIcon = require('./resources/clear.png');

const App: FC = () => {

  const [letters] = useState<Array<Array<string>>>(sliceRandomlyArrayInChunks(lettersJson.board, 4));
  const [word, setWord] = useState<string>('');

  const handleLetterPressed = (letter: string) => {
    if (word.length < 10) setWord(word + letter);
    else setWord(letter);
  }

  const renderLetters = () => {
    return letters.map((row, rIndex) => {
      return (
        <View key={rIndex} style={{ flexDirection: 'row' }}>
          {row.map((letter, lIndex) =>
            <CustomButton key={lIndex} letter={letter} onPress={() => handleLetterPressed(letter)} />
          )}
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Letters Game</Text>
      <View>
        <TouchableOpacity style={{ marginBottom: 10 }} disabled={!word} onPress={() => setWord('')}>
          <View style={styles.clearButton}>
            <Text style={[styles.clearText, { color: word.length > 0 ? '#FF4A4A' : 'grey' }]}>clear word </Text>
            <Image source={clearIcon} style={[styles.clearIcon, { tintColor: word.length > 0 ? '#FF4A4A' : 'grey' }]} resizeMode={'stretch'} />
          </View>
        </TouchableOpacity>
        <View>
          {renderLetters()}
        </View>
        <View style={styles.wordContainer}>
          <Text style={styles.word} numberOfLines={1} ellipsizeMode='head'>{word}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  clearButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clearText: {
    color: 'grey',
    fontSize: 17
  },
  clearIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey'
  },
  wordContainer: {
    marginTop: 30,
    borderColor: '#979797',
    borderWidth: 2,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 7,
    justifyContent: 'center'
  },
  word: {
    color: '#7ED321',
    fontSize: 25,
    letterSpacing: 3,
    fontWeight: 'bold'
  }
});

export default App;
