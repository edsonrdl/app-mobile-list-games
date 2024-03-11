import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import AppStyle from './AppStyle'

export default function App() {
  return (
    <View style={AppStyle.container}>
      <Text style={AppStyle.textStyle}>Olá</Text>
      <StatusBar style="auto"/>
    </View>
  );
}
;
