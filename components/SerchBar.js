import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { StyleSheet, Image, View, TextInput } from "react-native";

export const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const debouncedGetInputValue = debounce(props.getInputValue, 1500);

  useEffect(() => {
    debouncedGetInputValue(search);
    return () => {
      debouncedGetInputValue.cancel();
    };
  }, [debouncedGetInputValue, search]);
  return (
    <View style={styles.container}>
      <Image
        source="https://img.icons8.com/sf-regular/48/ffffff/search.png"
        style={styles.searchIcon}
      />
      <TextInput
        onChange={(e) => setSearch(event.target.value)}
        style={styles.input}
        value={search}
        placeholder="Digite o nome de um filme"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#012E40",
    paddingHorizontal: 20,
    borderColor: "#3CA6A6",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 30,
    width: "100%",
    height: 48,
  },
  input: {
    flexGrow: 1,
    fontSize: 16,
    paddingVertical: 2,
    color: "#F2E3D5",
    fontWeight: "400",
    overflow: "hidden",
  },
  searchIcon: {
    width: 20,
    height: 20,
    color: "#FFFF",
  },
});
