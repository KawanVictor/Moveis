import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [nome, setNome] = useState('');
  const [linguagem, setLinguagem] = useState('JavaScript');
  const [mensagem, setMensagem] = useState('');

  function verificar() {
    if (nome.trim() === '') {
      setMensagem('Por favor, digite seu nome');
    } else {
      setMensagem(`Olá ${nome}, você escolheu ${linguagem}`);
    }
  }

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Aula 23/04</Text>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.card}>

        <Text style={styles.titulo}>Escolha sua linguagem</Text>

        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <View style={styles.pickerBox}>
          <Picker
            selectedValue={linguagem}
            onValueChange={(itemValue) => setLinguagem(itemValue)}
          >
            <Picker.Item label="JavaScript" value="JavaScript" />
            <Picker.Item label="Python" value="Python" />
            <Picker.Item label="Java" value="Java" />
            <Picker.Item label="C#" value="C#" />
          </Picker>
        </View>

        <View style={styles.button}>
          <Button title="Verificar" onPress={verificar} color="#4f7cff" />
        </View>

        <Text style={styles.resultado}>{mensagem}</Text>

      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito por Kawan</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eef1f5',
  },

  /* HEADER */
  header: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  /* CARD */
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  titulo: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },

  pickerBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fafafa',
  },

  button: {
    marginTop: 10,
  },

  resultado: {
    marginTop: 20,
    textAlign: 'center',
    color: '#4f7cff',
    fontWeight: '500',
  },

  /* FOOTER */
  footer: {
    padding: 12,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 12,
  }
});