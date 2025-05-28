import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add stickers to your image using</Text>
      <Text style={styles.textColorfull}>STICKER SMASH</Text>
      <Text style={styles.textColorfull}>📸</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    margin: 10,
    fontSize: 15,
  },
  textColorfull: {
    color: "#ffd33d",
    fontSize: 24,
  },
});
