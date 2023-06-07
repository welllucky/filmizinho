import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { StyleSheet, Text, View, Image } from "react-native";
import { FilmObjectItem, SearchBar } from "./components";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");

  const searchUserIssue = (filmTitle) => {
    setIsLoading(true);
    setHasContent(false);
    axios
      .get(
        `http://www.omdbapi.com/?s=${filmTitle}&type=movie&plot=short&apikey=f598d536`
      )
      .then((response) => {
        setIsLoading(false);
        setHasContent(true);
        setSearchResults(response.data.Search); // Atualizado para response.data.Search
      })
      .catch((error) => {
        console.log(error);
        setHasContent(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    search && searchUserIssue(search);
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image
              source={require("./assets/filminho-96.png")}
              style={{ width: 32, height: 32 }}
            />
            <Text style={styles.projectName}>Filminho</Text>
          </View>
          <SearchBar getInputValue={(value) => setSearch(value)} />
        </View>
        <View style={styles.contentContainer}>
          {isLoading ? (
            <Text>Carregando...</Text>
          ) : searchResults.length === 0 ? (
            <Text>Nenhum filme encontrado</Text>
          ) : (
            searchResults.map((film) => (
              <FilmObjectItem
                key={film.imdbID}
                poster={film.Poster} // Atualizado para film.Poster
                title={film.Title} // Atualizado para film.Title
                genre={film.Genre} // Atualizado para film.Genre
                year={film.Year} // Atualizado para film.Year
                runTime={film.Runtime} // Atualizado para film.Runtime
                director={film.Director}
              />
            ))
          )}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 0,
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: "#F2E3D5",
  },
  projectName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F2E3D5",
  },
  headerContainer: {
    width: "100%",
    gap: 24,
    backgroundColor: "#024959",
    paddingHorizontal: "6%",
    paddingVertical: "8%",
  },
  contentContainer: {
    flexGrow: 2,
    width: "100%",
    overflow: "scroll",
    gap: 12,
    paddingHorizontal: "6%",
  },
  pageContainer: {
    width: "100%",
    height: "100%",
    gap: "4%",
  },
});
