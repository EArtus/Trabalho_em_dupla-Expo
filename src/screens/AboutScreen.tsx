import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const WasteInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        {"Tipos de Lixo e Descarte Correto\n\n"}
        {"1. Lixo Orgânico\n"}
        {"Exemplos: Restos de comida, cascas de frutas, borra de café.\n"}
        {"Descarte: Lixeira verde. Pode ser transformado em adubo por compostagem.\n\n"}
        {"2. Lixo Reciclável\n"}
        {"Exemplos: Plástico (garrafas), vidro (potes), papel (jornais), metal (latas).\n"}
        {"Descarte: Lixeira azul ou amarela. Lave os itens antes de descartar.\n\n"}
        {"3. Lixo Seco (Não Reciclável)\n"}
        {"Exemplos: Fraldas, espelhos, cerâmica quebrada.\n"}
        {"Descarte: Lixeira preta ou cinza. Vai para aterros sanitários.\n\n"}
        {"4. Lixo Perigoso\n"}
        {"Exemplos: Pilhas, baterias, medicamentos vencidos, lâmpadas.\n"}
        {"Descarte: Pontos de coleta específicos para produtos perigosos.\n\n"}
        {"5. Resíduos de Construção e Demolição\n"}
        {"Exemplos: Tijolos, cimento, madeiras.\n"}
        {"Descarte: Caçambas específicas para resíduos de construção.\n\n"}
        {"6. Lixo Eletrônico (e-lixo)\n"}
        {"Exemplos: Celulares, computadores, televisores.\n"}
        {"Descarte: Pontos de coleta de eletrônicos ou programas de devolução de empresas.\n"}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,  
  }
});

export default WasteInfoScreen;
