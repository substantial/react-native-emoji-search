import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard'
import { 
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const SearchResultItem = ({ title, symbol }) => {
  const codePointHex = symbol.codePointAt(0).toString(16)
  const imageSrc = `https://cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`

  const copyToClipboard = () => {
    Clipboard.setString(symbol)
  }

  return (
    <TouchableOpacity onPress={copyToClipboard}>
      <View style={styles.item}>
        <Image source={{ uri: imageSrc }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const SearchResults = ({ results }) => {
  const renderItem = ({ item: { title, symbol }}) => (
    <SearchResultItem title={title} symbol={symbol} />
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={results}
        renderItem={renderItem}
        keyExtractor={item => item.title} 
      />
    </View>
  )
}

const IMAGE_SIZE = 32
const BORDER_COLOR = '#ccc'
const BORDER_WIDTH = 1

const styles = StyleSheet.create({
  container: {
    borderTopColor: BORDER_COLOR,
    borderTopWidth: BORDER_WIDTH,
  },
  item: {
    alignItems: 'center',
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: BORDER_WIDTH,
    height: IMAGE_SIZE + 30,
    flexDirection: 'row',
    padding: 15,
  },
  itemImage: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
  itemTitle: {
    paddingLeft: 10,
  },
});

export default SearchResults
