import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from "../Screens/LoginScreen";
import LaunchScreen from "../Screens/LaunchScreen";
import RecipeDetail from "../Screens/RecipeDetail";
import CategoryDetail from "../Screens/CategoryDetail";
import WebViewScreen from "../Screens/Webview";
import SignUpScreen from "../Screens/SignUpScreen";
import HomeScreen from "../Screens/HomeScreen";
import AreaRecipeList from "../Screens/AreaRecipeList";
import IngredientScreen from "../Screens/IngredientsScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";

const screens = {
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
    // Headers: null
    // navigationOptions:  {
    //     title: 'Title',
    //     headerLeft: null,
    //     gestureEnabled: false,
    //  }
  },
  RecipeDetailScreen: {
    screen: RecipeDetail,
    navigationOptions: {
      title: "Recipes",
    },
  },
  CategoryDetail: {
    screen: CategoryDetail,
    navigationOptions: {
      title: "Categories",
    },
  },
  WebViewScreen: {
    screen: WebViewScreen,
    navigationOptions: {
      title: "",
    },
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  AreaRecipeList: {
    screen: AreaRecipeList,
    navigationOptions: {
      title: "Area Recipes",
    },
  },
  IngredientScreen: {
    screen: IngredientScreen,
    navigationOptions: {
      title: "",
    },
  },
  ForgotPasswordScreen: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      title: "",
    },
  },
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
