import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Image, ImageBackground } from 'react-native';
import carro from '../../assets/carro_on.png';
import jardin from '../../assets/jardin_on.png';
import regadera from '../../assets/regadera_on.png';
import wc from '../../assets/wc_on.png';
import lavabo from '../../assets/lavabo_on.png';

const ProfileScreen = () => {
  const [nivelDeAgua, setNivelDeAgua] = useState(100);
  const nivelAnimado = useRef(new Animated.Value(100)).current;

  const actions = [
    { name: 'Lavado de auto', image: carro, usage: 20 },
    { name: 'Riego del jardin', image: jardin, usage: 19 },
    { name: 'Regadera', image: regadera, usage: 23 },
    { name: 'Inodoro', image: wc, usage: 18 },
    { name: 'Lavado de ropa', image: lavabo, usage: 20 },
  ];

  const handleAction = (action) => {
    const nuevoNivel = Math.max(0, nivelDeAgua - action.usage);
    setNivelDeAgua(nuevoNivel);

    Animated.timing(nivelAnimado, {
      toValue: nuevoNivel,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const restablecerContenedor = () => {
    setNivelDeAgua(100);
    Animated.timing(nivelAnimado, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ImageBackground
      source={require('../../assets/fondo.png')}
      style={styles.backgroundImage}
    >

      <View style={styles.container}>
        <View style={styles.waterContainer}>
          <Animated.View
            style={[
              styles.waterLevel,
              {
                height: nivelAnimado.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>

        <View style={styles.actionsContainer}>
          {actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleAction(action)}
            >
              <Image source={action.image} style={styles.actionImage} />
              <Text style={styles.buttonText}>{action.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.resetButton} onPress={restablecerContenedor}>
            <Text style={styles.buttonText}>Restablecer contenedor</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'rgba(58, 58, 59, 0.4)', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  waterContainer: {
    width: 150,
    height: 300,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#b7bcc7',
    overflow: 'hidden',
    marginBottom: 20,
  },
  waterLevel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#466fc1',
  },
  actionsContainer: {
    borderRadius: 15,
    backgroundColor: 'rgba(34, 51, 83, 0.52)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
  actionImage: {
    borderRadius: 23,
    width: 74,
    height: 80,
    resizeMode: 'contain',
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF', 
  },
  resetButton: {
    width: 150,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#3761a6',
    borderRadius: 10,
    marginTop: 15,
  },
});

export default ProfileScreen;