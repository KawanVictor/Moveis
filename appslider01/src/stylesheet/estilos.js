import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({

  cabecalho: {
    backgroundColor: '#111',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ff0000',
  },

  textoCabecalho: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },

  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },

  conteudo: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    elevation: 4,
  },

  textoConteudo: {
    fontSize: 14,
    marginBottom: 12,
    color: '#222',
    textAlign: 'center',
  },

  entradaTextoConteudo: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  blocoSlider: {
    marginVertical: 10,
  },

  botaoConteudo: {
    backgroundColor: '#cc0000',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },

  rodape: {
    backgroundColor: '#111',
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#cc0000',
  },

  textoRodape: {
    fontSize: 12,
    color: '#fff',
  },

  imgRodape: {
    width: 28,
    height: 28,
    marginRight: 6,
  },
});