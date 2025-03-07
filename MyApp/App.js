import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './Navigator';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <Navigator />
    </NavigationContainer>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
