import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const SchedulePickupScreen = () => {
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState(new Date());
  const [address, setAddress] = useState('');
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);

  // Simplificado para 'any' por enquanto até que a documentação específica seja consultada
  const handleDatePicker = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const handleSchedule = () => {
    if (!type || !quantity || !address) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    Alert.alert("Confirmação", `Coleta agendada para ${date.toLocaleDateString()} às ${date.toLocaleTimeString()}.\nTipo: ${type}\nQuantidade: ${quantity}\nEndereço: ${address}`);
    // Clear the form
    setType('');
    setQuantity('');
    setAddress('');
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Coleta de Resíduos</Text>
      <TextInput
        style={styles.input}
        placeholder="Tipo de lixo"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
      />
      <View style={styles.datePicker}>
        <Button title="Escolher Data" onPress={() => showMode('date')} />
        <Button title="Escolher Hora" onPress={() => showMode('time')} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={handleDatePicker}
          />
        )}
      </View>
      <Button title="Agendar Coleta" onPress={handleSchedule} />
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
  input: {
    width: '90%',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  datePicker: {
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  }
});

export default SchedulePickupScreen;
