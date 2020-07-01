import React from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text
} from 'react-native'
import { getImage, getIsloading } from '../store'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header'
import { setFavoriteImage } from '../store/images';
import { Spinner } from 'native-base';

const width = Dimensions.get('window').width - 20;

const Gallery = () => {
  const dispatch = useDispatch();
  const images = useSelector(getImage);
  const loading = useSelector(getIsloading)

  const handleChange = (id) => {
    dispatch(setFavoriteImage(id))
  }

  return (
    <>
      <Header />

      <View style={styles.content}>
        {loading
          ? <Spinner color='red' />
          : <FlatList
            data={images}
            renderItem={({ item }) => (

              <View style={styles.itemViewImage} >
                <Image source={{ uri: item.image }} style={styles.itemImage} />

                <View style={styles.boxInfo}>
                  <TouchableOpacity onPress={() => handleChange(item.id)}>
                    <Image source={item.favorite
                      ? require('../assets/heart-on.png')
                      : require('../assets/heart-off.png')
                    } style={{ width: 32, height: 32 }} />
                  </TouchableOpacity>

                  <Text>{new Date(+item.id).toLocaleDateString().replace(/\//g, '.')}</Text>
                </View>
                <View style={styles.span}></View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        }
      </View>
      
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    marginBottom: 60,
  },
  itemViewImage: {
    marginBottom: 10,
    alignItems: 'center',

  },

  itemImage: {
    flex: 1,
    resizeMode: 'cover',
    width: width,
    height: 370,
    marginBottom: 5,
  },
  boxInfo: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  span: {
    width: width,
    height: 2,
    backgroundColor: 'black'
  }
});

export default Gallery
