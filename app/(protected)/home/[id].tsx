import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Details = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Details {id}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
