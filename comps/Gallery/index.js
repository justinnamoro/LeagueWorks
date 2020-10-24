import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c4c4c4",
    width: 100,
    height: 100
  }
});
const MyGallery = () => {
  return <View style={styles.container}></View>;
};

MyGallery.defaultProps = {};

export default MyGallery;
