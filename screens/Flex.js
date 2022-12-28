import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
import { addMovies, getAllMovies } from '../Redux/Slices/movieSlice'

const Flex = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {

    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=12158e8ce1683d5ba431ba576c81087b`)
        .catch((err) => {
          console.log("error api", err)
        });
      // console.log("response api",response);
      dispatch(addMovies(response.data.results))
    };

    fetchMovies()
  }, []);


  const movies = useSelector(getAllMovies);
  // console.log("movies items displayyyy ", movies)

  return (
    <View style={styles.con}>

      <FlatList
        numColumns={2}
        data={movies}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <View style={styles.card}>
          {/* {console.log("movie item")}
          {console.log(item)} */}
          <TouchableOpacity onPress={() => props.navigation.navigate("Movie", { item })}><View style={{ justifyContent: "center", alignItems: "center", top: -50 }}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} style={{ width: 90, height: 90, borderRadius: 30, marginTop: 30 }} />
          </View>
          </TouchableOpacity>
          <Text style={styles.title}>{item.title}</Text>
          <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 5 }}>
            <Text style={{ fontSize: 16, textAlign: 'center', color: "#4d4b4b" }}>{item.release_date}</Text>
            <TouchableOpacity ><AntDesign name="hearto" color="red" size={24} /></TouchableOpacity>
          </View>

        </View>}
      />

    </View>
  )
}

export default Flex

const styles = StyleSheet.create({
  con:
  {
    backgroundColor: '#01485e',
    flex: 1,
    alignItems: "center",
    // marginTop: 10
  },
  card:
  {
    width: 175,
    height: 200,
    backgroundColor: '#e2e0de',
    margin: 5,
    marginVertical: 25,
    borderRadius: 30
  },
  title:
  {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "#01485e",
    marginTop: -25
  }



})