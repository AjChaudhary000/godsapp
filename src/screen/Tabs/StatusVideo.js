import * as React from 'react';
import { View, Image, StyleSheet,FlatList, TouchableOpacity,Dimensions, Text} from 'react-native';
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
            <View style={{alignSelf:'center',marginTop:20}}>
                <TouchableOpacity><Text style={{textAlign:'right',padding:10,fontSize:20}}>More</Text></TouchableOpacity>
                <FlatList data={images} numColumns={1} renderItem={(item)=>(
                    <TouchableOpacity style={styles.imagelist} onPress={()=>navigation.navigate("VideoDetails")}>
                <View >
                <Video source={{uri:'https://assets.mixkit.co/videos/preview/mixkit-meadow-surrounded-by-trees-on-a-sunny-afternoon-40647-large.mp4'}}           
               style={styles.imgs}  audioOnly={true} duration={0}/>
                </View>  
                </TouchableOpacity> )}  horizontal showsHorizontalScrollIndicator={false}/>

                <FlatList data={images} numColumns={2} renderItem={(item)=>(
                    <TouchableOpacity style={styles.imagelist} onPress={()=>navigation.navigate("VideoDetails")}>
                <View >
                <Video source={{uri:'https://assets.mixkit.co/videos/preview/mixkit-meadow-surrounded-by-trees-on-a-sunny-afternoon-40647-large.mp4'}}           
               style={styles.img}  audioOnly={true} duration={0}/>
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
        backgroundColor:'black'

    },
    imgs:{
        width:Dimensions.get('window').width / 4 - 10,
        height:200,
        borderRadius:20,
        backgroundColor:'black'

    }
});