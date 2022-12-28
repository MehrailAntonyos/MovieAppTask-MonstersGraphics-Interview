import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Product = (props) => {
  console.log("propssssss", props);
  // const [movie, setMovie] = useState(props.route.params.item);
  const movie = props.route.params.item;

  return (
    <View style={{ backgroundColor: '#e2e0de', width: 400, display: 'flex', height: 700 }}>

      {/* <Text>{JSON.stringify(movie)}</Text> */}

      <View style={styles.productCardCetails}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }} style={{
          width: 300, height: 200, borderRadius: 10, borderRadius: 30,
          shadowColor: 'black',
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 5,
          elevation: 3,
          margin: '7%'
        }} />
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '8%' }}>
        <View style={{ width: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ width: '98%', fontSize: 20, fontWeight: '600' }}><Text style={{ fontWeight: '800' }}>Title:</Text> {movie.title}</Text>
          <AntDesign name="hearto" color="red" size={24} />
        </View>
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#01789c' }}><Text style={{ fontWeight: '800' }}>Release Date:</Text> ({movie.release_date})</Text>
      </View>

      <View style={{ width: 300, marginLeft: '8%' }}>
        <Text style={{ fontSize: 16, color: 'rgba(9, 10, 10, 0.6)', margin: 5 }}><Text style={{ fontWeight: '800' }}>Overview:</Text> {movie.overview}</Text>
      </View>

      <View style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#01789c', fontSize: 14, marginTop: 5 }}>Vote Average</Text>
          <View style={{ backgroundColor: 'transparent', width: 60, borderRadius: 20, padding: 5, marginBottom: 5, borderColor: '#01789c', borderWidth: 1 }}>
            <Text style={{ color: 'rgba(9, 10, 10, 0.6)', textAlign: 'center' }}>{movie.vote_average}</Text>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#01789c', fontSize: 14, marginTop: 5 }}>Age Allowed</Text>
          <View style={{ backgroundColor: 'transparent', width: 60, borderRadius: 20, padding: 5, marginBottom: 5, borderColor: '#01789c', borderWidth: 1 }}>
            <Text style={{ color: 'rgba(9, 10, 10, 0.6)', textAlign: 'center' }}>{movie.adult == 'true' ? "adult" : "All Ages"}</Text>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#01789c', fontSize: 14, marginTop: 5 }}>Vote Count</Text>
          <View style={{ backgroundColor: 'transparent', width: 60, borderRadius: 20, padding: 5, marginBottom: 5, borderColor: '#01789c', borderWidth: 1 }}>
            <Text style={{ color: 'rgba(9, 10, 10, 0.6)', textAlign: 'center' }}>{movie.vote_count}</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})