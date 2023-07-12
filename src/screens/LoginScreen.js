import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

function LoginScreen() {
  return (
    <View style={globalStyles.login}>
      <View style={styles.loginContent}>
        <Text>Login Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContent: {
    flex: 1,
  }
});

export default LoginScreen;