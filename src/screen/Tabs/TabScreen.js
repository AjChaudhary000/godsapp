import React from 'react'
import { View, Text, TouchableOpacity ,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StatusImage from './StatusImage'
import StatusVideo from './StatusVideo'
import StatusText from './StatusText'
const Tabs = createBottomTabNavigator()
const CustomButton = ({ children, onPress }) => (
  <TouchableOpacity style={{ top: -30, justifyContent: 'center', alignItems: 'center' }} onPress={onPress}>
    <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#E69462', borderColor: '#ffffff', borderWidth: 5 }}>{children}</View>
  </TouchableOpacity>
);
function TabScreen() {
  return (

    <Tabs.Navigator tabBarOptions={{
      style: {
        backgroundColor: 'white',
        borderTopWidth: null,
        width: '95%',
        position: 'absolute',
        // borderTopLeftRadius:20,
        // borderTopRightRadius:20,
        bottom: 10,
        borderRadius: 10,
        left: 10,
        height: 60
      }, showLabel: false
    }}>
      <Tabs.Screen name="Home" component={StatusImage} options={{ headerShown:false,
        tabBarIcon: ({ focused }) => (
            <View ><Image style={{width:40,height:30 ,alignSelf: 'center',resizeMode: 'contain',}} source={require('../../assets/image/picture.png')}/>
            
            </View> )
      }} />

     
      <Tabs.Screen name="add" component={StatusVideo} options={{headerShown:false,
        tabBarIcon: ({ focused }) => (
            <Image style={{width:40,height:30 ,alignSelf: 'center',resizeMode: 'contain',}} source={require('../../assets/image/video-player.png')}/>), tabBarButton: (props) => (
            <CustomButton {...props} />)
      }} />

      
      <Tabs.Screen name="Notes" component={StatusText} options={{headerShown:false,
        tabBarIcon: ({ focused }) => (
            <Image style={{width:40,height:30  ,alignSelf: 'center',resizeMode: 'contain',}} source={require('../../assets/image/note.png')}/> )
      }} />
    </Tabs.Navigator>
  );
}
export default TabScreen;