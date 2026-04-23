import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './stylesheet/estilos';

export default function Rodape() {

  const logo = "https://tse4.mm.bing.net/th/id/OIP._gZ1HnfhL6DgjTNFPPaXrAHaFj";

  return (
    <View style={estilos.rodape}>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: logo }} style={estilos.imgRodape} />
        <Text style={estilos.textoRodape}>São Paulo FC</Text>
      </View>

      <Text style={estilos.textoRodape}>2026</Text>

    </View>
  );
}