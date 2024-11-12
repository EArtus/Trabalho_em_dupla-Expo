import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de Pontos de Descarte</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -29.6988018, 
          longitude: -53.520636,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      
      >
        <Marker
          coordinate={{ latitude: -29.6985501, longitude: -53.6008651 }}
          title="Faculdade Antônio Meneghetti"
          description="Local para descarte de recicláveis"
          
        />
        <Marker
          coordinate={{ latitude: -29.6984878, longitude: -53.5206713 }}
          title="Fundação Antônio Meneghetti"
          description="Local para descarte de recicláveis"
          
        /><Marker
          coordinate={{ latitude: -29.701513, longitude: -53.5142405 }}
          title="Centro Esportivo Antônio Meneghetti"
          description="Local para descarte de recicláveis"
        
        /><Marker
          coordinate={{ latitude: -29.6992791, longitude: -53.5115286 }}
          title="Hotel Recanto Business Center"
          description="Local para descarte de recicláveis"
      
    />
      </MapView>
    </View>
    
  );
};

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: '80%',
  },
});

export default MapScreen;
