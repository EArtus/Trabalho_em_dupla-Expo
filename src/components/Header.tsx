import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import simbolomapa from './assets/simbolomapa'


type RootStackParamList = {
  MapScreen: undefined;
  SchedulePickupScreen: undefined;
  UserPanelScreen?: undefined;
  RecyclingInfoScreen?: undefined;
};

type HeaderNavigationType = StackNavigationProp<RootStackParamList>;

const Header = () => {
  const navigation = useNavigation<HeaderNavigationType>();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
        <Text style={styles.button}>Mapa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SchedulePickupScreen')}>
        <Text style={styles.button}>Agendar Coleta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6200ea",
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    fontSize: 18,
    color: "white",
  },
});

export default Header;
