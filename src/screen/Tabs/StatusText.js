import * as React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions, Text } from 'react-native';
import stylecolor from '../../assets/styles/stylecolor';
import Header from '../../component/header';
function StatusText({ navigation }) {
    const txtdata = [
        {
            txtname: 'चाय जैसी उबल रही है ज़िंदगी मगर, हम भी हर घूँट का आनंद शौक़ से लेंगे☕'
        },
        {
            txtname: ' होगा कीमती वक्त ⌚ आपका, पर हम भी हर किसी से नहीं मिला करते!!😎'
        },
        {
            txtname: ' गुलामी तो तेरे इश्क की हे वरना, ये दिल कल भी नवाब था और आज भी हे!!🔥🔥'
        },
        {
            txtname: 'जिंदगी अपनी है तो,😊 अंदाज भी अपना ही होगा🤙 गुलामी तो तेरे इश्क की हे वरना, ये दिल कल भी नवाब था और आज भी हे!!🔥🔥गुलामी तो तेरे इश्क की हे वरना, ये दिल कल भी नवाब था और आज भी हे!!🔥🔥गुलामी तो तेरे इश्क की हे वरना, ये दिल कल भी नवाब था और आज भी हे!!🔥🔥'
        },

    ];

    return (
        <View style={styles.content}>
            <Header navigation={navigation} textname={"Text Status"} />
            <View style={{ alignSelf: 'flex-end' }}>
                <FlatList data={txtdata} numColumns={1} renderItem={(item) => (
                   
                <View style={styles.imagelist}>
                   <Text>{item.item.txtname}</Text>
               
                <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                <TouchableOpacity>
                <View style={{marginHorizontal:20}} >
                <Image style={styles.img1} source={require('../../assets/image/copy.png')} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View >
                <Image style={styles.img1} source={require('../../assets/image/share.png')} />
                </View>
                </TouchableOpacity>
                </View>
                </View>  
                )} showsVerticalScrollIndicator={false} />
            </View>

        </View>
    );
}
export default StatusText;
const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: stylecolor.backgraoundcolor
    },
    imagelist: {
        margin: 5,

        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    img1: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    },
});