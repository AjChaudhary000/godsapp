import * as React from 'react';
import { View, Image, StyleSheet ,Text,TouchableOpacity,Platform} from 'react-native';
import stylecolor from '../assets/styles/stylecolor';
function Header({navigation,textname}) {
    return (
        <View style={styles.content}>
            <TouchableOpacity style={{alignSelf:'center',width:"5%"}} onPress={()=>navigation.goBack()}>
                 <View >
                 <Image style={{width:40,height:25 ,resizeMode: 'contain',}} source={require('../assets/image/back.png')}/>
                </View>
            </TouchableOpacity>
                <View style={{justifyContent:'center' , width:'95%'}}>
                    <Text style={{textAlign:'center',fontSize:20}}>{textname}</Text>
                </View>
        </View>
    );
}
export default Header;
const styles = StyleSheet.create({
    content: {
        backgroundColor: stylecolor.backgraoundcolor,
        height:Platform.OS == 'ios' ? 70 : 50,
        paddingTop: Platform.OS == 'ios' ? 30 : 0,
        flexDirection:'row',
        justifyContent:'center'
    },
    
});