import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      {/* Guess */}
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
        {/* text */}
      </View>
      <View>Log Rounds</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

});

export default GameScreen;
