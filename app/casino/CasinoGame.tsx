import { useRef, useState } from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';

export default function CasinoGame() {
  const [slots, setSlots] = useState([0, 0, 0]);
  const [message, setMessage] = useState('');
  const animations = useRef([new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]).current;

  const tryYourLuck = () => {
    const newSlots = Array(3).fill(0).map(() => Math.floor(Math.random() * 10));
    setSlots(newSlots);

    animations.forEach(animation => {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000, // Increased duration for the animation
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000, // Increased duration for the animation
          useNativeDriver: true,
        }),
      ]).start();
    });

    if (newSlots.every(slot => slot === 7)) {
      setMessage('Congratulations! You won!');
    } else {
      setMessage('Try again!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Casino Game</Text>
      <View style={styles.slotsContainer}>
        {slots.map((slot, index) => (
          <Animated.View key={index} style={[styles.slot, { transform: [{ scale: animations[index] }] }]}>
            <Text style={styles.slotText}>{slot}</Text>
          </Animated.View>
        ))}
      </View>
      <Button title="Try Your Luck" onPress={tryYourLuck} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  slotsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  slot: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  slotText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});