return (
  <View style={[estilos.conteudo, { backgroundColor: corFundo }]}>

    <View style={estilos.card}>

      <Text style={[estilos.textoConteudo, { color: corTexto }]}>
        {texto}
      </Text>

      <TextInput
        style={[estilos.entradaTextoConteudo, { backgroundColor: corInput }]}
        value={nome}
        onChangeText={setNome}
        onFocus={foco}
        onBlur={blur}
        placeholder="Digite seu nome"
      />

      <View style={estilos.blocoSlider}>
        <Text style={estilos.textoConteudo}>Slider 1 (texto)</Text>

        <Slider
          minimumValue={0}
          maximumValue={100}
          step={5}
          onValueChange={slider1}
        />
      </View>

      <View style={estilos.blocoSlider}>
        <Text style={estilos.textoConteudo}>Slider 2 (fundo)</Text>

        <Slider
          minimumValue={0}
          maximumValue={100}
          step={10}
          minimumTrackTintColor="white"
          maximumTrackTintColor="red"
          onValueChange={slider2}
        />
      </View>

      <TouchableHighlight
        style={estilos.botaoConteudo}
        onPress={verifica}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
          CLIQUE AQUI
        </Text>
      </TouchableHighlight>

    </View>
  </View>
);