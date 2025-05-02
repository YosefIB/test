import { Link } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome to XO Game!</ThemedText>
      <Image source={require('@/assets/images/react-logo.png')} style={styles.image} />
      <ThemedText type="subtitle">Are you ready to play?</ThemedText>
      <Link href="/XOGame" style={styles.button}>
        <ThemedText type="button">Enter the Game</ThemedText>
      </Link>

      <ThemedText type="title" style={styles.shoppingTitle}>Shopping Management</ThemedText>
      <Link href="/ShoppingManagement" style={styles.button}>
        <ThemedText type="button">Manage Shopping</ThemedText>
      </Link>

      <ThemedText type="title" style={styles.casinoTitle}>Casino Game</ThemedText>
      <Link href="/casino/CasinoGame" style={styles.button}>
        <ThemedText type="button">Try Your Luck</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
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
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  shoppingTitle: {
    marginTop: 40,
  },
  casinoTitle: {
    marginTop: 40,
  },
});
