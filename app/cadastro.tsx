import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Cadastro() {

  const [cadastrante, setCadastrante] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');

  const handleSave = () => {
    if (!cadastrante || !tipo || !valor) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cadastrante:</Text>
      <TextInput
        style={styles.input}
        value={cadastrante}
        onChangeText={setCadastrante}
        placeholder="Nome do cadastrante"
      />
      <Text style={styles.label}>Tipo da Entrada:</Text>
      <TextInput
        style={styles.input}
        value={tipo}
        onChangeText={setTipo}
        placeholder="Dízimo ou Oferta"
      />
      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});