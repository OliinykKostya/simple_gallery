import React, { useEffect } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import { ActionSheet, Root } from "native-base";
import { useDispatch, useSelector } from 'react-redux';
import { getImage } from '../store'
import Header from '../components/header'
import { loadImage, addImage } from '../store/images'

const width = Dimensions.get('window').width;

export default Home = () => {
  const fileList = useSelector(getImage)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImage())
  }, [])

  const onClickAddPicture = () => {
    const BUTTONS = ["Take Photo", "Choose from Library", 'Cancel'];
    ActionSheet.show(
      { options: BUTTONS, cancelButtonIndex: 2, title: 'Select a Photo' },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            takePhotoFromCamera();
            break;
          case 1:
            choosePhotoFromLibrary();
            break;
          default:
        }
      }
    )
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(image => {
      onSelectedImage(image)
    }).catch(error => {
      throw error('something wrong')
    }
    );
  }

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(image => {
      onSelectedImage(image)
    }).catch(error => {
      throw error('something wrong')
    }
    );
  }

  const onSelectedImage = (image) => {
    let item = {
      id: Date.now() + '',
      image: image.path,
      favorite: false,
    };
    dispatch(addImage(item));
  }

  const { content } = styles;
  return (
    <>
      <Root>

        <Header />

        <View style={content}>
          <TouchableOpacity onPress={() => onClickAddPicture()}>
            <Image
              source={require('../assets/picture.png')}
              style={{ width: 150, height: 150 }}
              resizeMode='contain'
            />
            <Text style={{alignSelf: 'center'}}>Upload photo</Text>
          </TouchableOpacity>
        </View>

      </Root>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
