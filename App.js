import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function SearchShell() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: "https://www.google.com" }}
          style={styles.webview}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
