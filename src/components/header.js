import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';

const Header = () => {
  return (
    <>
      <View style={styles.header} />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    width: Dimensions.get('window').width,
    marginBottom: 10,
    backgroundColor: '#4F6D7A',
    height: 50,
  },
})

export default Header;