import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        source={{
          uri: "https://th.bing.com/th/id/OIP.CU0l4eHPq5rz_1opIEMhgQHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7",
        }}
      />
      
      <Text style={styles.title}>Bad Bunny en El Salvador</Text>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>Luis Lovo</Text>
          <Text style={styles.time}>12 hours ago</Text>
        </View>
        <Text style={styles.description}>
          La gira del artista puertorriqueño lo ha llevado a diferentes ciudades
          de Latinoamérica, este sábado finalmente será el turno de nuestro
          país.
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>📍 Estadio Cuscatlán</Text>
          <Text style={styles.infoText}>📅 Dom, 30 de Mar</Text>
          <Text style={styles.infoText}>🎟️ Tickets disponibles</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 16,
  },
  mainImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  contentContainer: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  time: {
    fontSize: 14,
    color: "#888",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
    lineHeight: 20,
  },
  infoContainer: {
    marginTop: 12,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
});
