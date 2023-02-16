import { Colors } from 'react-native/Libraries/NewAppScreen';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/Screens/HomeScreen';
import RecipeDetail from './src/Screens/RecipeDetail';
import CategoryDetail from './src/Screens/CategoryDetail';
import LoginScreen from './src/Screens/LoginScreen';
import WebViewScreen from './src/Screens/Webview';
import LaunchScreen from './src/Screens/LaunchScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const navigator = createStackNavigator(

  {
    Home: HomeScreen,
    RecipeDetailScreen: RecipeDetail,
    CategoryDetail: CategoryDetail,
    LoginScreen: LoginScreen,
    WebViewScreen: WebViewScreen,
    LaunchScreen: LaunchScreen
  },
   {
    initialRouteName: 'LaunchScreen',
  defaultNavigationOptions: {
    title: 'Recipe App',
    // header: null
    // headerTintColor: '#ffff',
    // headerStyle: {
    //    backgroundColor: '#85B7CB',
    // },
   
  }
  }
);

export default createAppContainer(navigator);


// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Welcome'}}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };