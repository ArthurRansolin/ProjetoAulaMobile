import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { carregaTopo } from "../../../services/carregaDados";
import logo from "../../../assets/logo.png";

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: "",
      legenda: "",
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno });
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

export default Topo;

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#F6F6F6",
    padding: 16,
    width: "100vh",
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 16,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    color: "#464646",
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: "#b1b1b1ff",
  },
});
