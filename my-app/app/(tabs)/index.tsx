import React, { useState } from "react";
import { View, Text, Picker, ScrollView, StyleSheet, ImageBackground } from "react-native";

// Simulated FPS data for The Witcher 3 based on CPU + GPU combination
const hardwareData: Record<string, Record<string, { low: number; medium: number; high: number; ultra: number }>> = {
  "Intel i5-12400F": {
    "NVIDIA RTX 3090": { low: 120, medium: 100, high: 80, ultra: 60 },
    "NVIDIA GTX 1080": { low: 90, medium: 70, high: 50, ultra: 35 },
    "AMD RX 6800 XT": { low: 110, medium: 90, high: 70, ultra: 50 },
  },
  "AMD Ryzen 5 5600X": {
    "NVIDIA RTX 3090": { low: 125, medium: 105, high: 85, ultra: 65 },
    "NVIDIA GTX 1080": { low: 95, medium: 75, high: 55, ultra: 40 },
    "AMD RX 6800 XT": { low: 115, medium: 95, high: 75, ultra: 55 },
  },
};

export default function IndexScreen() {
  const [selectedCPU, setSelectedCPU] = useState<string>("Intel i5-12400F");
  const [selectedGPU, setSelectedGPU] = useState<string>("NVIDIA RTX 3090");

  const fpsData = hardwareData[selectedCPU]?.[selectedGPU] || { low: 0, medium: 0, high: 0, ultra: 0 };

  return (
    <ImageBackground source={{ uri: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWg2bnNoMnFjeGgybnZvZ2VjaWxod3U4anE3bmt3ZXZreWt0c2hqdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SslCqqiLlToPgcOlzj/giphy.gif" }} style={styles.background}>
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>The Witcher 3 Hardware Comparator</Text>
        
        <Text style={styles.label}>Select CPU:</Text>
        <Picker selectedValue={selectedCPU} onValueChange={(value) => setSelectedCPU(value)}>
          {Object.keys(hardwareData).map((cpu) => (
            <Picker.Item key={cpu} label={cpu} value={cpu} />
          ))}
        </Picker>
        
        <Text style={styles.label}>Select GPU:</Text>
        <Picker selectedValue={selectedGPU} onValueChange={(value) => setSelectedGPU(value)}>
          {Object.keys(hardwareData[selectedCPU] || {}).map((gpu) => (
            <Picker.Item key={gpu} label={gpu} value={gpu} />
          ))}
        </Picker>
        
        <View style={styles.card}>
          <Text style={styles.gpuTitle}>{selectedCPU} + {selectedGPU}</Text>
          <Text>Low: {fpsData.low} FPS</Text>
          <Text>Medium: {fpsData.medium} FPS</Text>
          <Text>High: {fpsData.high} FPS</Text>
          <Text>Ultra: {fpsData.ultra} FPS</Text>
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
    backgroundColor: "rgba(219, 161, 161, 0.5)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
  },
  card: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
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
