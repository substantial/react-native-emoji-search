import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Header from './components/Header'
import SearchInput from './components/SearchInput'
import SearchResults from './components/SearchResults';
import searchEmoji from './search/searchEmoji';

const MAX_SEARCH_RESULTS = 20

export default function App() {
  const [searchResults, setSearchResults] = useState(searchEmoji('', MAX_SEARCH_RESULTS))

  const handleSearchChange = searchText => {
    setSearchResults(searchEmoji(searchText, MAX_SEARCH_RESULTS))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar style="auto" />
        <Header />
        <SearchInput onChangeText={handleSearchChange} />
        <SearchResults results={searchResults} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  contentContainer: {
    flex: 1,
    maxWidth: 600,
    width: '100%',
  },
})
