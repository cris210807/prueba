import {useState} from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

function CambiaImagen({image1, image2}) {

    const [actual, setActual] = useState(image1);
    const handlePress = () => {
        setActual(actual === image1 ? image2 : image1);
    };
    return (
        <TouchableOpacity onPress={handlePress} style={styles.imageContainer}>
          <Image source={actual} style={styles.image} resizeMode='contain' />
        </TouchableOpacity>
      );
    }
    
    const styles = StyleSheet.create({
      imageContainer: {
        margin: 8,
      },
      image: {
        width: 85, 
        height: 100, 
        borderRadius: 10,
      },
    });
    
    export default CambiaImagen;