import React from 'react';
import { View, StyleSheet } from 'react-native';

// importando os componentes corretamente
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1f5', // fundo suave
  },
});