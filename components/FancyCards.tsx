import { Image, ScrollView, StyleSheet, Text, View, } from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.cardElevated]}>
            <View style={styles.imageContainer}>
            <Image
                source={{
                uri: "https://i.pinimg.com/474x/2b/91/95/2b91959ec4aef28c6a44fe5b17a163dd.jpg",
                }}
                style={styles.cardImage}
            />
            </View>
            <Text style={styles.cardTitle}>Gojo Sataru</Text>
            <Text style={styles.cardSubtitle}>A serene destination for destruction</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <View style={styles.imageContainer}>
            <Image
                source={{
                uri: "https://i.pinimg.com/474x/2b/91/95/2b91959ec4aef28c6a44fe5b17a163dd.jpg",
                }}
                style={styles.cardImage}
            />
            </View>
            <Text style={styles.cardTitle}>Gojo Sataru</Text>
            <Text style={styles.cardSubtitle}>A serene destination for destruction</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <View style={styles.imageContainer}>
            <Image
                source={{
                uri: "https://i.pinimg.com/474x/2b/91/95/2b91959ec4aef28c6a44fe5b17a163dd.jpg",
                }}
                style={styles.cardImage}
            />
            </View>
            <Text style={styles.cardTitle}>Gojo Sataru</Text>
            <Text style={styles.cardSubtitle}>A serene destination for destruction</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color : "black",
    padding: 16,
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    color : "white",
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardElevated: {
    padding: 16,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color : "white",
  },
  cardSubtitle: {
    fontSize: 14,
    marginTop: 4,
    color : "lightgray",
  },
});
