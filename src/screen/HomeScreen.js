import * as React from 'react';
import { View, Image, StyleSheet, Text ,TouchableOpacity} from 'react-native';
import stylecolor from '../assets/styles/stylecolor';
function HomeScreen({navigation}) {
    return (
        <View style={styles.content}>
           
                <View>
                    <Image style={styles.img} source={require('../assets/image/Status.png')} />
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Tab")}>
                    <View style={styles.box1}>
                        <View>
                            <Image style={styles.img1} source={require('../assets/image/video.png')} />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ fontSize: 18, textAlign: 'center' }}>Video</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.box1}>
                        <View>
                            <Image style={styles.img1} source={require('../assets/image/rate.png')} />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ fontSize: 18, textAlign: 'center' }}>Rate</Text>
                        </View>
                    </View>

                </View>
                
          
            <View style={styles.privacy}>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>privacy policy </Text>
                </View>
        </View>
    );
}
export default HomeScreen;
const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: stylecolor.backgraoundcolor
    },
    img: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
       position:'absolute',
       bottom:55,
       alignSelf:'center'
    },
    box1: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#F9F2F2',
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img1: {
        width: 40,
        height: 40,
        alignSelf: 'center'
    },
    privacy: {
        position: 'absolute',
        bottom: 20,
        alignSelf:'center'
    }
});