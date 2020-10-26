import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";

const styles = StyleSheet.create({
container:{
    display:"flex",
    justifyContent:"center",
    backgroundColor:"#FD8700",
    height:"16px",
    width:"50px",
    padding:"10px",
    borderRadius:"5px"
},
text:{
    color:"#FFF",
    fontSize:"16",
    fontWeight:"bold"
}
});

const MyButton = ({text})=> {
    // No <div> in react-native
    return (
    <View>
        <Button style={styles.container}><Text>{text}</Text></Button>
    </View>
    );
}

MyButton.defaultProps = {
    text: "Button"
};

export default MyButton;