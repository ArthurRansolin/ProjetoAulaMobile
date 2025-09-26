import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";



export default function Produtor({nome, imagem, distancia, estrelas}) {
    return <View style={estilos.cartao}> 
        <Image style={estilos.imagem} source={ imagem} accessibilityLabel={nome}/>
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Text> *****</Text>
            </View>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    </View>

}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 8,
        marginLeft: 16,
        marginVertical: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    },
});