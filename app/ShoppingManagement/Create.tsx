import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CreateShoppingItem() {
  const [itemName, setItemName] = useState('');

  const handleCreate = () => {
    if (itemName.trim()) {
      console.log('Item created:', itemName);
      setItemName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Shopping Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={itemName}
        onChangeText={setItemName}
      />
      <Button title="Create Item" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});