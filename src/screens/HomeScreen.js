import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

function HomeScreen() {
  return (
    <View style={globalStyles.home}>
      <View style={styles.homeContent}>
        <Text>Home Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
  }
});

export default HomeScreen;