import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

const SearchInput = ({ onChangeText }) => {
  const [text, setText] = useState('')

  const handleChangeText = newText => {
    setText(newText)
    onChangeText(newText)
  }

  return (
    <TextInput 
      value={text} 
      onChangeText={handleChangeText} 
      style={styles.input} 
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 15,
    borderColor: '#bbb',
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchInput
