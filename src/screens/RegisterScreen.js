import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

function RegisterScreen() {
  return (
    <View style={globalStyles.register}>
      <View style={styles.registerContent}>
        <Text>Register Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registerContent: {
    flex: 1,
  }
});

export default RegisterScreen;