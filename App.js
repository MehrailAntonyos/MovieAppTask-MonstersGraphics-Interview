import { StyleSheet } from 'react-native';
import Flex from './screens/Flex';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './screens/Tab';
import Movie from './screens/Movie';
import { store } from './Redux/store';
import { Provider } from 'react-redux'

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Flex'
          screenOptions={{
          }}>
          <Stack.Screen name='Home' component={Tab} options={{
            headerBackVisible: false,
            headerShown: false
          }}></Stack.Screen>
          <Stack.Screen name='Flex' component={Flex} />
          <Stack.Screen name='Movie' component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
  },
});
