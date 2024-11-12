import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface Collection {
  id: string;
  type: string;
  date: string;
}

const UserPanelScreen = () => {
  const [collections, setCollections] = useState<Collection[]>([
    { id: '1', type: 'Plástico', date: '2023-10-01' },
    { id: '2', type: 'Papel', date: '2023-10-15' }
  ]);

  return (
    <View style={styles.container}>
      <Text>Histórico de Coletas</Text>
      <FlatList
        data={collections}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Tipo de resíduo: {item.type}</Text>
            <Text>Data da coleta: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  }
});

export default UserPanelScreen;
