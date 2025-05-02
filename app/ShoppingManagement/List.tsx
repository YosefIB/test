import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now().toString(), name: newItem }]);
      setNewItem('');
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, newName) => {
    setItems(items.map(item => item.id === id ? { ...item, name: newName } : item));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new item"
        value={newItem}
        onChangeText={setNewItem}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Button title="Edit" onPress={() => {
              const newName = prompt('Edit item name:', item.name);
              if (newName) editItem(item.id, newName);
            }} />
            <Button title="Delete" onPress={() => deleteItem(item.id)} />
          </View>
        )}
      />
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});