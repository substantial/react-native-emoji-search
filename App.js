import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

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
      <StatusBar style="auto" />
      <Header />
      <SearchInput onChangeText={handleSearchChange} />
      <SearchResults results={searchResults} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
