import * as React from 'react';
import { round } from 'react-native-reanimated';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

function Router () {
    return (
        <Stack.navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        </Stack.navigator>
        
    );
};

export default Router;