import * as React from 'react';
import {View,Image,StyleSheet,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import HomeScreen from './src/screen/HomeScreen';
import TabScreen from './src/screen/Tabs/TabScreen';
import ImageDetails from './src/screen/ImageDetails';
import VideoDetails from './src/screen/VideoDetails';
const Stack = createNativeStackNavigator();
const  App =()=>{
  const [isLoading,setLoading] = React.useState(true);
  React.useEffect(()=>{
    setTimeout(async()=>{
      setLoading(false)
    },5000)
   
  })
  if(isLoading){
    return(
      <View style={styles.loading}>
        <StatusBar hidden />
        <LottieView style={styles.lottie} source={require('./src/assets/json/Splash.json')} autoPlay loop />
      </View>
    );
  }
return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Tab" component={TabScreen} options={{headerShown:false}}/>
      <Stack.Screen name="ImageDetails" component={ImageDetails} options={{headerShown:false}}/>
      <Stack.Screen name="VideoDetails" component={VideoDetails} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
);
}
export default App;
const styles = StyleSheet.create({
loading:{
  flex:1,
  justifyContent:'center'
},
lottie:{
  width:150,
  height:150,
  alignSelf:'center'
}
});