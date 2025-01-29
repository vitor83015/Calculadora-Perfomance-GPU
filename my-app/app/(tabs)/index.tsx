import React, { useState } from "react";
import { View, Text, Picker, ScrollView, StyleSheet, ImageBackground } from "react-native";

const gpuData: Record<string, { low: number; medium: number; high: number }> = {
  "NVIDIA RTX 3090": { low: 80, medium: 60, high: 40 },
  "NVIDIA GTX 1080": { low: 70, medium: 50, high: 35 },
  "AMD RX 6800 XT": { low: 75, medium: 55, high: 38 },
  "NVIDIA RTX 4060": { low: 85, medium: 65, high: 45 },
};

export default function IndexScreen() {
  const [selectedGPU, setSelectedGPU] = useState<string>("NVIDIA RTX 3090");

  return (
    <ImageBackground
      source={{ uri: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWg2bnNoMnFjeGgybnZvZ2VjaWxod3U4anE3bmt3ZXZreWt0c2hqdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SslCqqiLlToPgcOlzj/giphy.gif" }} // Replace with a Witcher 3 GIF URL
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>Hardware Comparator</Text>
        <Text>Select a GPU:</Text>
        <Picker selectedValue={selectedGPU} onValueChange={(itemValue) => setSelectedGPU(itemValue)}>
          {Object.keys(gpuData).map((gpu) => (
            <Picker.Item key={gpu} label={gpu} value={gpu} />
          ))}
        </Picker>

        <View style={styles.card}>
          <Text style={styles.gpuTitle}>{selectedGPU}</Text>
          <Text>Low: {gpuData[selectedGPU].low} FPS</Text>
          <Text>Medium: {gpuData[selectedGPU].medium} FPS</Text>
          <Text>High: {gpuData[selectedGPU].high} FPS</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "rgba(233, 149, 149, 0.7)",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  gpuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
