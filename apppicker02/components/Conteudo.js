import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Conteudo() {
  const [nome, setNome] = useState('');
  const [linguagem, setLinguagem] = useState('JavaScript');
  const [mensagem, setMensagem] = useState('');
  const [corInput, setCorInput] = useState('#fff');

  function verificar() {
    if (nome.trim() === '') {
      setMensagem('Por favor, digite seu nome');
    } else {
      setMensagem(`Olá ${nome}, você escolheu ${linguagem}`);
    }
  }

  function corDeFoco(cor) {
    setCorInput(cor);
  }

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>Escolha sua linguagem</Text>

        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
          style={[styles.input, { backgroundColor: corInput }]}
          onFocus={() => corDeFoco('#ffe5e5')}   // vermelho bem leve
          onBlur={() => corDeFoco('#fff')}
        />

        <View style={styles.pickerBox}>
          <Picker
            selectedValue={linguagem}
            onValueChange={(itemValue) => setLinguagem(itemValue)}
          >
            <Picker.Item label="JavaScript" value="JavaScript" />
            <Picker.Item label="Python" value="Python" />
            <Picker.Item label="Java" value="Java" />
            <Picker.Item label="Golang" value="Golang" />
            <Picker.Item label="Ruby" value="Ruby" />
            <Picker.Item label="PHP" value="PHP" />
            <Picker.Item label="C#" value="C#" />
            <Picker.Item label="Cobol" value="Cobol" />
          </Picker>
        </View>

        <View style={styles.button}>
          <Button
            title="Verificar"
            onPress={verificar}
            color="#c0392b"   // vermelho suave
          />
        </View>

        <Text style={styles.resultado}>{mensagem}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 14,
    elevation: 4,
  },

  titulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '600',
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  pickerBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },

  button: {
    marginTop: 5,
    marginBottom: 10,
  },

  resultado: {
    marginTop: 15,
    textAlign: 'center',
    color: '#c0392b',
    fontWeight: '500',
  },
});