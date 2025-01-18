import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 2,
      name: "Anurag Tiwari",
      status: "I ❤️ To Code and Teach!",
      imageUrl: "https://i.pinimg.com/474x/31/d4/90/31d49031a101bcdb5bc8a73eeb18dd15.jpg",
    },
    {
      uid: 3,
      name: "Ravi Sharma",
      status: "Passionate about Python and AI.",
      imageUrl: "https://i.pinimg.com/736x/c2/26/14/c2261443ff273378a93b9d61f2e5bce7.jpg",
    },
    {
      uid: 4,
      name: "Neha Verma",
      status: "Frontend Developer | React Enthusiast.",
      imageUrl: "https://i.pinimg.com/474x/9b/23/3b/9b233b7cf9d5c53e79f7b768200c0af6.jpg",
    },
    {
      uid: 5,
      name: "Amit Singh",
      status: "Full Stack Dev | Node.js & MongoDB",
      imageUrl: "https://i.pinimg.com/474x/f6/b5/e6/f6b5e641be0119089fde3833e2b6e05f.jpg",
    },
    {
      uid: 6,
      name: "Priya Kapoor",
      status: "Creative Designer | UI/UX Expert.",
      imageUrl: "https://i.pinimg.com/474x/1d/6c/6c/1d6c6c9d4c2dd4991a31b700d7b4a142.jpg",
    },
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
  userCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userStatus: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
