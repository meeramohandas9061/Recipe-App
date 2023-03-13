
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import LaunchScreen from './LaunchScreen';
import RecipeDetail from './RecipeDetail';
import CategoryDetail from './CategoryDetail';
import WebViewScreen from './Webview';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import AreaRecipeList from './AreaRecipeList';
import IngredientScreen from './IngredientsScreen';

const screens = {
    LaunchScreen: {
        screen: LaunchScreen,
        navigationOptions:  {
            headerShown: false
         }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions:  {
            headerShown: false
         }
        // Headers: null
        // navigationOptions:  {
        //     title: 'Title',
        //     headerLeft: null,
        //     gestureEnabled: false,
        //  }
    },
    RecipeDetailScreen: {
        screen: RecipeDetail
    },
    CategoryDetail: {
        screen: CategoryDetail
    },
    WebViewScreen: {
        screen: WebViewScreen
    },
    SignUpScreen: {
        screen: SignUpScreen,
        navigationOptions:  {
            headerShown: false
         }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions:  {
            headerShown: false
         }
    },
    AreaRecipeList: {
        screen: AreaRecipeList
    },
    IngredientScreen: {
        screen: IngredientScreen,
        navigationOptions: {
            title: ""
        }
    }

};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);

