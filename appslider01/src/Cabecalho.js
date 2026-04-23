import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './stylesheet/estilos';

export default function Cabecalho() {

  return (
    <View style={estilos.cabecalho}>

      <Image
        source={{
          uri: "https://tse4.mm.bing.net/th/id/OIP._gZ1HnfhL6DgjTNFPPaXrAHaFj"
        }}
        style={estilos.logo}
      />

      <Text style={estilos.textoCabecalho}>
        São Paulo FC App
      </Text>

    </View>
  );
}