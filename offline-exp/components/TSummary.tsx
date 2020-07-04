import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const backendData = {
  aggregated_amount: 1234.56,
  transaction_count: 3,
};

const TSummary = () => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={["#00345d", "#001c34"]}
    style={styles.container}
  >
    <View style={styles.row}>
      <Text style={[styles.white, styles.medium, styles.normal]}>{"\u20B9"}</Text>
      <Text style={[styles.white, styles.large]}>{backendData.aggregated_amount}</Text>
    </View>
    <Text style={[styles.white, styles.small]}>{backendData.transaction_count} Transactions</Text>
  </LinearGradient>
);
export default TSummary;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    height: 132,
    justifyContent: 'center'
  },
  row: {
    flexDirection: "row",
  },
  white: {
    color: "white"
  },
  medium: {
      fontSize: 15,
  },
  small: {
      fontSize: 13
  },
  large: {  
      fontSize: 38,
      fontWeight: "500",
      fontStyle: "normal",
  },
  normal: {
    fontWeight: "normal",
    fontStyle: "normal",
  }
});