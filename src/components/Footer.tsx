import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Usando os mesmos tipos definidos anteriormente para Header
type FooterNavigationType = StackNavigationProp<RootStackParamList>;

const Footer = () => {
  const navigation = useNavigation<FooterNavigationType>();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('UserPanelScreen')}>
        <Text style={styles.text}>Painel do Usuário</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RecyclingInfoScreen')}>
        <Text style={styles.text}>Informações sobre Reciclagem</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#6200ea",
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});

export default Footer;
