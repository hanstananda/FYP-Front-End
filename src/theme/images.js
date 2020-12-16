import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'
import Folder from '../../assets/images/folder.svg'
import Info from '../../assets/images/information.svg'
import Camera from '../../assets/images/photo-camera.svg'
// import { ReactComponent as Logo } from '../../assets/images/logo.svg'
// import { ReactComponent as Folder } from '../../assets/images/folder.svg'
// import { ReactComponent as Info } from '../../assets/images/information.svg'
// import {ReactComponent as Camera } from '../../assets/images/photo-camera.svg'

export const svgs = {
  logo: Logo,
  folder: Folder,
  info: Info,
  camera: Camera,
}

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/logo.png'),
  logo_lg: require('../../assets/images/logo.png'),
  folder: require('../../assets/images/folder.png'),
  info: require('../../assets/images/information.png'),
  camera: require('../../assets/images/photo-camera.png'),
  right_arrow: require('../../assets/images/right-arrow.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
