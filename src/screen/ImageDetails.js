import React, { useRef } from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity, Text, Dimensions, Animated, Share } from 'react-native';
import stylecolor from '../assets/styles/stylecolor';
import Header from '../component/header';
import Share1 from 'react-native-share';
import RNFS from 'react-native-fs';

function ImageDetails({ navigation }) {
    const images = [
        {
            image: "https://source.unsplash.com/1024x768/?nature"
        },
        {
            image: "https://source.unsplash.com/1024x768/?water",
        },
        {
            image: "https://source.unsplash.com/1024x768/?girl",
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
            image: "https://source.unsplash.com/1024x768/?water",
        },
        {
            image: "https://source.unsplash.com/1024x768/?girl",
        },
        {
            image: "https://source.unsplash.com/1024x768/?nature"
        },
        {
            image: "https://source.unsplash.com/1024x768/?tree",
        }
    ];

    const scrollX = useRef(new Animated.Value(0)).current;
    const phoneStorageDir = `${RNFS.DocumentDirectoryPath}/advait/images/`;
    const download = () => {
        console.log(phoneStorageDir);
        RNFS.mkdir(phoneStorageDir).then((success) => {
            console.log('Created :-', success);
        }).catch((err) => {
            console.log('err', err.message)
        });

        RNFS.downloadFile({
            fromUrl: 'https://facebook.github.io/react-native/img/header_logo.png',
            toFile: `${RNFS.DocumentDirectoryPath}/react-native.png`,
          }).promise.then((r) => {
            console.log(r.statusCode)
          });
        RNFS.readDir(phoneStorageDir)
            .then((result) => {
                console.log("h1:- ",result)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const share = async () => {
        const shareResponse = await Share.share({

            message: 'hello'
        });
    }
    const shareOptionswhatsapp = {
        title: 'Gods Status ',
        url: `file://${phoneStorageDir}81.png`,
        social: Share1.Social.WHATSAPP,
        message: '89_Sudha_dekho_dekho.png',
        // only for base64 file in Android
    };
    const whatsapp = async () => {
        const shareResponse = await Share1.shareSingle(shareOptionswhatsapp);
    }
    const shareOptionsinstagram = {
        url: 'i',
        social: Share1.Social.INSTAGRAM
    };
    const instagram = async () => {
        const shareResponse = await Share1.shareSingle(shareOptionsinstagram);
    }
    const shareOptionsfacebook = {
        url: 'i',
        social: Share1.Social.FACEBOOK
    };
    const facebook = async () => {
        const shareResponse = await Share1.shareSingle(shareOptionsfacebook);
    }
    return (
        <View style={styles.content}>
            <Header navigation={navigation} textname={""} />
            <View style={{ alignSelf: 'center' }}>
                <FlatList data={images} numColumns={1} renderItem={(item) => (
                    <TouchableOpacity style={styles.imagelist} onPress={() => navigation.navigate("ImageDetails")}>
                        <View >
                            <Image style={styles.img} source={{
          uri: `file://${phoneStorageDir}81.png`,
          scale: 1
        }} /> 
                        </View>
                        <Text>{`file://${phoneStorageDir}81.png`}</Text>
                    </TouchableOpacity>)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}

                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false
                    })}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => download()} >
                    <View style={styles.box1}>
                        <View>
                            <Image style={styles.img1} source={require('../assets/image/down-arrow.png')} />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ fontSize: 12, textAlign: 'center', padding: 2 }}>Download</Text>
                        </View>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => share()}>
                    <View style={styles.box1}>
                        <View>
                            <Image style={styles.img1} source={require('../assets/image/share.png')} />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ fontSize: 12, textAlign: 'center' }}>Share</Text>
                        </View>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => whatsapp()}>
                    <View style={styles.box1}>
                        <View>
                            <Image style={styles.img1} source={require('../assets/image/whatsapp.png')} />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ fontSize: 12, textAlign: 'center' }}>Whatsapp</Text>
                        </View>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => instagram()}>
                    <View style={styles.box1}>
                        <View>
                            <Image style={styles.img1} source={require('../assets/image/instagram.png')} />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ fontSize: 12, textAlign: 'center' }}>Instagram</Text>
                        </View>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => facebook()}>
                    <View style={styles.box1}>
                        <View>
                            <Image style={styles.img1} source={require('../assets/image/facebook.png')} />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ fontSize: 12, textAlign: 'center' }}>Facebook</Text>
                        </View>
                    </View>
                </TouchableOpacity >
            </View>
        </View>
    );
}
export default ImageDetails;
const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: stylecolor.backgraoundcolor
    },
    imagelist: {
        margin: 5,

    },
    img: {
        width: Dimensions.get('window').width - 10,
        height: Dimensions.get('window').height - 180,
        borderRadius: 10,

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center'
    },
    box1: {
        width: 60,
        height: 60,
        borderRadius: 30,
        //backgroundColor: '#F9F2F2',
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img1: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    },
});