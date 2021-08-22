import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { sliceRandomlyArrayInChunks } from './utils';
import CustomButton from './components/CustomButton';
import colors from './resources/colors';

const lettersJson = require('./resources/json/test-board-2.json');
const dictionaryJson = require('./resources/json/dictionary.json');
const clearIcon = require('./resources/img/clear.png');

const App: FC = () => {

  const [letters] = useState<Array<Array<string>>>(sliceRandomlyArrayInChunks(lettersJson.board, 4));
  const [word, setWord] = useState<string>('');
  const [validWord, setValidWord] = useState<boolean>(false);

  const handleLetterPressed = (letter: string) => {
    let newWord = word;
    if (word.length < 6) newWord += letter;
    else newWord = '';
    setWord(newWord);
    if (dictionaryJson.words.some((option: string) => option == newWord.toLowerCase()))
      setValidWord(true);
    else setValidWord(false);
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
            <Text style={[styles.clearText, { color: word.length > 0 ? colors.RED : colors.GREY }]}>clear word </Text>
            <Image source={clearIcon} style={[styles.clearIcon, { tintColor: word.length > 0 ? colors.RED : colors.GREY }]} resizeMode={'stretch'} />
          </View>
        </TouchableOpacity>
        <View>
          {renderLetters()}
        </View>
        <View style={styles.wordContainer}>
          <Text style={styles.word} numberOfLines={1} ellipsizeMode='head'>{word}</Text>
          {!!word &&
            <Text style={[styles.validText, { color: validWord ? colors.GREEN : colors.RED }]} >{validWord ? 'valid' : 'invalid'}</Text>
          }
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
    color: colors.GREY,
    fontSize: 17
  },
  clearIcon: {
    width: 20,
    height: 20,
    tintColor: colors.GREY
  },
  wordContainer: {
    marginTop: 30,
    borderColor: '#979797',
    borderWidth: 2,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  word: {
    color: colors.GREEN,
    fontSize: 25,
    letterSpacing: 3,
    fontWeight: 'bold'
  },
  validText: {
    opacity: 0.8,
    textAlign: 'right'
  }
});

export default App;
