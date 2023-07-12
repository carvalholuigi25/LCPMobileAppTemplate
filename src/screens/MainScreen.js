import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

function MainScreen() {
  return (
    <View style={globalStyles.main}>
      <View style={styles.mainContent}>
        <Text>Main Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
  }
});

export default MainScreen;