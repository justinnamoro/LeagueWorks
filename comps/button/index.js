import React from "react";
import {View, Text, Button} from "react-native";

const MyButton = ()=> {
    // No <div> in react-native
    return<View>
        <Text>Button to signup</Text>
        <Button></Button>
    </View>
}

export default MyButton;