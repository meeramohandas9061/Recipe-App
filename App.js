import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import RecipeDetail from "./src/Screens/RecipeDetail";
import CategoryDetail from "./src/Screens/CategoryDetail";
import LoginScreen from "./src/Screens/LoginScreen";
import WebViewScreen from "./src/Screens/Webview";
import LaunchScreen from "./src/Screens/LaunchScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import Navigator from "./src/Navigation/Router";
import { SafeAreaView } from "react-native";

export default function App() {
  return <Navigator />;
}

// const navigator = createStackNavigator(

//   {
//     RecipeDetailScreen: RecipeDetail,
//     CategoryDetail: CategoryDetail,
//     LoginScreen: LoginScreen,
//     WebViewScreen: WebViewScreen,
//     LaunchScreen: LaunchScreen,
//     SignUpScreen: SignUpScreen
//   },
//    {
//     initialRouteName: 'LaunchScreen',
//   defaultNavigationOptions: {
//     title: 'Recipe App',
//     // header: null
//     // headerTintColor: '#ffff',
//     // headerStyle: {
//     //    backgroundColor: '#85B7CB',
//     // },

//   }
//   }
// );

// export default createAppContainer(navigator);
