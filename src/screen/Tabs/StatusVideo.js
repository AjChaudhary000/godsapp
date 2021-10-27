import * as React from 'react';
import { View, Image, StyleSheet,FlatList, TouchableOpacity,Dimensions} from 'react-native';
import stylecolor from '../../assets/styles/stylecolor';
import Header from '../../component/header';
import Video from 'react-native-video';
function StatusVideo({navigation}) {
    const images = [
        {
            image: "https://source.unsplash.com/1024x768/?nature"
        },
        {
            image:  "https://source.unsplash.com/1024x768/?water",
        },
        {
            image:  "https://source.unsplash.com/1024x768/?girl",
        },
        {
            image: "https://source.unsplash.com/1024x768/?nature"
        },
        {
            image: "https://source.unsplash.com/1024x768/?tree",
        },
        {
            image: "https://source.unsplash.com/1024x768/?nature"
        },
        {
            image:  "https://source.unsplash.com/1024x768/?water",
        },
        {
            image:  "https://source.unsplash.com/1024x768/?girl",
        },
        {
            image: "https://source.unsplash.com/1024x768/?nature"
        },
        {
            image: "https://source.unsplash.com/1024x768/?tree",
        }  
    ];
    return (
        <View style={styles.content}>
            <Header navigation={navigation} textname={"Video Status"}/>
            <View style={{alignSelf:'center'}}>
                <FlatList data={images} numColumns={2} renderItem={(item)=>(
                    <TouchableOpacity style={styles.imagelist} onPress={()=>navigation.navigate("ImageDetails")}>
                <View >
                <Video source={{uri: "https://source.unsplash.com/1024x768/?tree"}}            
               style={styles.img} />
                </View>  
                </TouchableOpacity> )}  showsVerticalScrollIndicator={false}/>
            </View>
           
        </View>
    );
}
export default StatusVideo;
const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: stylecolor.backgraoundcolor
    },
    imagelist:{
        margin:5,
        justifyContent:'center'
    },
    img:{
        width:Dimensions.get('window').width / 2 - 10,
        height:300,
        borderRadius:10,

    }
});