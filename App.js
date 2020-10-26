/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from "react-native";
import MyButton from "../comps/button";


const App = () => {
  return <View>
    <MyButton/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFF",
    justifyContent:"center"
  }
})

export default App;

// export {default} from "./storybook";
