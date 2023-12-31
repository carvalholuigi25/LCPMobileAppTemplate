import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title }) {
    return (
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      letterSpacing: 1
    },
    icon: {
      position: 'absolute',
      left: 16,
    },
    headerTitle: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerImage: {
      width: 26,
      height: 26,
      marginHorizontal: 10
    },
  });