import { ImageBackground } from 'expo-image';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require("./img/imagemfundo.jpg")} style={styles.imagemfundo}>
    <View style={styles.overlay} />
    <View style={styles.container}>
      <Image source={require("./img/perfilimg.jpeg")} style={styles.perfilimg}/>
      <Text style={styles.text}>Evelyn Gonçalves de Oliveira</Text>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagemfundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",   
  },

  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
  },


  perfilimg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10
  },

  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }

});
