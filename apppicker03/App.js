import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function LanchoneteApp() {
  const [nome, setNome] = useState("");
  const [lanche, setLanche] = useState("Pizza");
  const [observacao, setObservacao] = useState("");
  const [pedido, setPedido] = useState(null);

  // 🍔 Cardápio com mais opções + emojis
  const cardapio = {
    Pizza: "🍕",
    Hambúrguer: "🍔",
    "Cachorro-quente": "🌭",
    "Batata frita": "🍟",
    "X-Bacon": "🥓",
    "Salada": "🥗",
    "Frango frito": "🍗",
    Refrigerante: "🥤",
    Sorvete: "🍦",
    Café: "☕"
  };

  const getEmoji = (item) => cardapio[item] || "🍽️";

  const getStatus = () => {
    const estados = ["🟡 Recebido", "🟠 Em preparo", "🟢 Pronto"];
    return estados[Math.floor(Math.random() * estados.length)];
  };

  const handleSubmit = () => {
    if (!nome.trim()) return;

    setPedido({
      nome,
      lanche,
      observacao: observacao || "Sem observações",
      status: getStatus(),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>🍽️ Lanchonete Digital</Text>

        <TextInput
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <Text style={styles.label}>Escolha seu pedido:</Text>

        <View style={styles.pickerWrapper}>
          <Picker selectedValue={lanche} onValueChange={setLanche}>
            {Object.keys(cardapio).map((item) => (
              <Picker.Item
                key={item}
                label={`${cardapio[item]} ${item}`}
                value={item}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.emoji}>{getEmoji(lanche)}</Text>

        <TextInput
          placeholder="Observações (ex: sem cebola, extra queijo)"
          value={observacao}
          onChangeText={setObservacao}
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Fazer Pedido</Text>
        </Pressable>

        {pedido && (
          <View style={styles.resultado}>
            <Text style={styles.resultTitle}>📋 Pedido Confirmado</Text>

            <Text>👤 Cliente: {pedido.nome}</Text>

            <Text>
              🍽️ Pedido: {pedido.lanche} {getEmoji(pedido.lanche)}
            </Text>

            <Text style={styles.status}>
              📦 Status: {pedido.status}
            </Text>

            <Text>📝 Obs: {pedido.observacao}</Text>
          </View>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "92%",
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#334155"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#F9FAFB"
  },
  label: {
    marginBottom: 5,
    fontWeight: "600",
    color: "#CBD5E1"
  },
  input: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#0B1220",
    color: "#fff"
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    backgroundColor: "#0B1220"
  },
  emoji: {
    textAlign: "center",
    fontSize: 70,
    marginBottom: 15
  },
  button: {
    backgroundColor: "#22C55E",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#0B1220",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155"
  },
  resultTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    color: "#fff"
  },
  status: {
    marginVertical: 5,
    fontWeight: "bold",
    color: "#FACC15"
  }
});