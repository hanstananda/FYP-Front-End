import { Asset } from 'expo-asset'

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/logo.png'),
  logo_lg: require('../../assets/images/logo.png'),
  sample_snake: require('../../assets/images/sample_snake.jpg'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
