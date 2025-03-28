import { ImageBackground } from 'expo-image';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require("./img/fundopreto.png")} style={styles.imagemfundo}>
    <View style={styles.container}>
      <Image source={require("./img/logoimg.png")} style={styles.perfilimg}/>
      <Text style={styles.text}>Le Rêve Sucré é uma cafeteria elegante que serve doces franceses e cafés refinados.</Text>
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

  perfilimg: {
    width: 250,
    height: 250,
    borderRadius: 100,
    marginBottom: 10
  },

  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    width: "65%",
    textAlign: "center",
    marginTop: 0
  }
});
