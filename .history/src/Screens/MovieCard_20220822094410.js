import { View, Image, TouchableOpacity,Text } from "react-native";

export default function Mo ({ movie }) {
  return (
    <View >
        <Image
          style={{
            width: '90%',
            height: 500,
            margin: 10,
            borderRadius: 10,
          }}
          resizeMode ="cover"
          source={{ uri: movie.Poster }}
        />
        <Text style={{fontSize:20,fontWeight: 'bold',paddingLeft:10}}>{movie.Title}</Text>
        <Text style={{paddingLeft:10}}>{movie.Year}</Text>
        <Text style={{paddingLeft:10}}>{movie.Type}</Text>
    </View>
  );
}