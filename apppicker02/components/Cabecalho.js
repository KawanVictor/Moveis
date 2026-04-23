import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>📱 App Picker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});