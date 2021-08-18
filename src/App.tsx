import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { sliceArrayInChunks } from './utils';
import CustomButton from './components/CustomButton';

const lettersJson = require('./resources/test-board-1.json');

const App: FC = () => {

  const [letters] = useState<Array<Array<string>>>(sliceArrayInChunks(lettersJson.board, 4));

  const renderLetters = () => {
    return letters.map((row, rIndex) => {
      return (
        <View key={rIndex} style={{ flexDirection: 'row' }}>
          {row.map((letter, lIndex) =>
            <CustomButton key={lIndex} letter={letter} />
          )}
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      {renderLetters()}
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
  }
});

export default App;
