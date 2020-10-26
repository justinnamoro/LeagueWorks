import React from "react";
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:"18px"
    }
})

const MyHeader =({text})=>{
return(
    <View>
        <Text style={styles.title}>{text}</Text>
    </View>
);
}

MyHeader.DefaultProps = {
    text:"Header"
};

export default MyHeader;