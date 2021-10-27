import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import stylecolor from '../../assets/styles/stylecolor';
import Header from '../../component/header';
function StatusText({navigation}) {
    return (
        <View style={styles.content}>
            <Header navigation={navigation} textname={"Text Status"}/>
        </View>
    );
}
export default StatusText;
const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: stylecolor.backgraoundcolor
    },
    
});