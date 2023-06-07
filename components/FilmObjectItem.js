import { StyleSheet, Text, View, Image } from "react-native";

const Info = (props) => {
  return (
    <View>
      <Text>{props.genre}</Text>
      <Text>{props.year}</Text>
    </View>
  );
};

export const FilmObjectItem = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={`${props.poster}`}
        style={{ width: "25%", height: "100%" }}
      />
      <View style={{ width: "75%", gap: 12, padding: "3%" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 2,
            flexWrap: "wrap",
            flexGrow: 1,
          }}
        >
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subTitle}>({props.year})</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.text}>{props.director}</Text>
            <Text style={styles.text}>{props.genre}</Text>
          </View>
          <View>
            <Text style={styles.text}>{props.runTime}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "fit-content",
    borderRadius: 10,
    backgroundColor: "#024959",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "white",
  },
  text: {
    color: "white",
    overflow: "hidden",
  },
});
