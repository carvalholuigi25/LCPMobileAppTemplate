import React from "react";
import { View } from 'react-native';
import { globalStyles } from './styles/global';
import { DrawerNav } from './navigators';

function App() {
  return (
    <View style={globalStyles.container}>
      <DrawerNav />
    </View>
  );
}

export default App;
