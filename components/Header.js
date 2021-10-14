import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => (
  <View style={styles.container}>
    <Image 
      style={styles.image} 
      source={{ uri: 'https://cdn.jsdelivr.net/emojione/assets/png/1f436.png' }} 
    />
    <Text style={styles.title}>Emoji Search</Text>
    <Image 
      style={styles.image} 
      source={{ uri: 'https://cdn.jsdelivr.net/emojione/assets/png/1f415.png' }} 
    />
  </View>
)

const IMAGE_SIZE = 32

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    color: '#333',
    fontSize: 32,
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
})

export default Header
