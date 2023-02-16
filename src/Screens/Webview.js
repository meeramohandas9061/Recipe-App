import React from "react";
import { View, Text } from "react-native";
import {WebView} from 'react-native-webview'
import {withNavigation} from 'react-navigation';

const WebViewScreen = ({navigation}) => {
    let videoUrlLink = navigation.getParam('urlLink')
    console.log(videoUrlLink)
 return <View>
   <WebView
   source={{ uri: videoUrlLink }} 
   />
 </View>
};

export default withNavigation(WebViewScreen);