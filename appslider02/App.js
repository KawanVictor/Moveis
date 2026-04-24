import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [serie, setSerie] = useState('Stranger Things');
  const [nota, setNota] = useState(7);
  const [comentario, setComentario] = useState('');
  const [resultado, setResultado] = useState(null);

  function avaliar() {
    setResultado({
      nome,
      serie,
      nota: nota.toFixed(1),
      comentario,
      nivel: getNivel(nota),
    });
  }

  const getNivel = (valor) => {
    if (valor <= 3) return '❌ Cancelada';
    if (valor <= 5) return '😐 Regular';
    if (valor <= 8) return '👍 Boa';
    return '🔥 Excelente';
  };

  const getEmoji = () => {
    switch (serie) {
      case 'Stranger Things': return '👾';
      case 'Breaking Bad': return '💊';
      case 'The Witcher': return '⚔️';
      case 'La Casa de Papel': return '💰';
      case 'Friends': return '☕';
      case 'Game of Thrones': return '🐉';
      default: return '📺';
    }
  };

  const getCorNota = (valor) => {
    if (valor <= 3) return '#EF4444';
    if (valor <= 5) return '#F59E0B';
    if (valor <= 8) return '#3B82F6';
    return '#22C55E';
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.titulo}>📺 Avaliação de Séries</Text>

        <TextInput
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <Text style={styles.label}>Escolha a série:</Text>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={serie}
            onValueChange={setSerie}
          >
            <Picker.Item label="Stranger Things" value="Stranger Things" />
            <Picker.Item label="Breaking Bad" value="Breaking Bad" />
            <Picker.Item label="The Witcher" value="The Witcher" />
            <Picker.Item label="La Casa de Papel" value="La Casa de Papel" />
            <Picker.Item label="Friends" value="Friends" />
            <Picker.Item label="Game of Thrones" value="Game of Thrones" />
          </Picker>
        </View>

        <Text style={styles.emoji}>{getEmoji()}</Text>

        <Text style={[styles.nota, { color: getCorNota(nota) }]}>
          ⭐ Nota: {nota.toFixed(1)}
        </Text>

        <Slider
          minimumValue={0}
          maximumValue={10}
          step={0.5}
          value={nota}
          onValueChange={setNota}
          minimumTrackTintColor={getCorNota(nota)}
          maximumTrackTintColor="#ccc"
        />

        <TextInput
          placeholder="Comentário sobre a série"
          value={comentario}
          onChangeText={setComentario}
          style={styles.input}
        />

        <Pressable style={styles.botao} onPress={avaliar}>
          <Text style={styles.botaoTexto}>Avaliar Série</Text>
        </Pressable>

        {resultado && (
          <View style={styles.resultadoBox}>
            <Text style={styles.resultadoTitulo}>📋 Resultado</Text>

            <Text>👤 {resultado.nome}</Text>
            <Text>📺 {resultado.serie} {getEmoji()}</Text>

            <Text style={styles.nivel}>
              {resultado.nivel}
            </Text>

            <Text>⭐ Nota: {resultado.nota}</Text>
            <Text>💬 {resultado.comentario || 'Sem comentário'}</Text>
          </View>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '92%',
    backgroundColor: '#111827',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1F2937'
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  label: {
    marginBottom: 5,
    fontWeight: '600',
    color: '#D1D5DB'
  },
  input: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#0B1220',
    color: '#fff'
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: '#0B1220'
  },
  emoji: {
    textAlign: 'center',
    fontSize: 70,
    marginVertical: 10
  },
  nota: {
    marginBottom: 5,
    fontWeight: '700'
  },
  botao: {
    backgroundColor: '#6366F1',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  resultadoBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#0B1220',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1F2937'
  },
  resultadoTitulo: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff'
  },
  nivel: {
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FBBF24'
  }
});