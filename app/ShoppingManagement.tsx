import { Link } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { pic } from "../app/ShoppingManagement/shopping-cart.png";
export default function ShoppingManagement() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Shopping Management</ThemedText>
      <Image source={pic} style={styles.image} />
      <ThemedText type="subtitle">Manage your shopping list with ease!</ThemedText>
      <Link href="/ShoppingManagement/Create" style={styles.button}>
        <ThemedText type="button">Add New Item</ThemedText>
      </Link>
      <Link href="/ShoppingManagement/List" style={styles.button}>
        <ThemedText type="button">View Shopping List</ThemedText>
      </Link>
      <Link href="/ShoppingManagement/Edit" style={styles.button}>
        <ThemedText type="button">Edit Item</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
});