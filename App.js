import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import PoroFeed from './component/poroFeed/poroFeed';
import PoroPlay from './component/poroPlay/poroPlay';


export default function App() {
  const [loaded] = useFonts({
    'Caudex-Bold': require('./assets/fonts/Caudex-Bold.ttf'),

  });
  const [alimentar, setAlimentar] = useState(false)
  const [jugar, setJugar] = useState(false)

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color='#BE5A04' />
      </View>
    )
  }

  let home = <View style={styles.container}>
    <Text style={styles.header}>El poro te estaba esperando!</Text>
    <Image
      source={require('./assets/img/poro.png')}
      style={{ width: 300, height: 300, margin: 80 }}
    />
  </View>

  let content = home

  let juego = () => {
    if (!jugar) {
      setJugar(true)
      setAlimentar(false)
    } else if (jugar) {
      setJugar(false)
    }
  }

  let hambre = () => {
    if (!alimentar) {
      setAlimentar(true)
      setJugar(false)
    } else if (alimentar) {
      setAlimentar(false)
    }
  }

  if (!alimentar && !jugar) {
    content = home
  } else if (alimentar) {
    content = <PoroFeed />
  } else if (jugar) {
    content = <PoroPlay />
  }


  return (
    <ScrollView style={styles.fondo}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {content}
        <View style={styles.containerNav}>
          <Button title='Alimentar' color='#256579' onPress={hambre} />
          <Text style={styles.spacing}> </Text>
          <Button title='Jugar' color='#256579' onPress={juego} />
        </View>
      </View>
    </ScrollView>
  );
}
// 
const styles = StyleSheet.create({

  fondo: {
    backgroundColor: '#2c2f3e',
  },

  container: {
    flex: 1,
    backgroundColor: '#2c2f3e',
    marginTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    marginBottom: 20,
    marginTop: 20,
    fontFamily: 'Caudex-Bold',
    color: '#e2d9c6',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,

  },
  containerNav: {
    flex: 1,
    flexDirection: "row",
    marginTop: 40,

  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  spacing: {
    marginLeft: 25,
    marginRight: 25,
  }
});
