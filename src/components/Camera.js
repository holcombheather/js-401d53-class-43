// import React from 'react';
// import {StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, StatusBar} from 'react-native';
// import {Camera} from 'expo-camera';

// export default function CameraComponent() {
//   const [startCamera, setStartCamera] = React.useState(false)
//   const [previewVisible, setPreviewVisible] = React.useState(false)
//   const [capturedImage, setCapturedImage] = React.useState<any>(null)
//   const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
//   const [flashMode, setFlashMode] = React.useState(Camera.Constants.FlashMode.off)
//   const cameraRef = React.useRef(null); // Define the ref

//   const __startCamera = async () => {
//     const {status} = await Camera.requestPermissionsAsync()
//     console.log(status)
//     if (status === 'granted') {
//       setStartCamera(true)
//     } else {
//       Alert.alert('Access denied')
//     }
//   }
//   // const __takePicture = async () => {
//   //   if (cameraRef.current) {
//   //     const photo = await cameraRef.current.takePictureAsync();
//   //     console.log(photo);
//   //     setPreviewVisible(true);
//   //     setCapturedImage(photo);
//   //   }
//   };  

//   // const __savePhoto = () => {
//   // }

//   const __retakePicture = () => {
//     setCapturedImage(null)
//     setPreviewVisible(false)
//     __startCamera()
//   }
//   const __handleFlashMode = () => {
//     if (flashMode === Camera.Constants.FlashMode.on) {
//       setFlashMode(Camera.Constants.FlashMode.off)
//     } else if (flashMode === Camera.Constants.FlashMode.off) {
//       setFlashMode(Camera.Constants.FlashMode.on)
//     } else {
//       setFlashMode(Camera.Constants.FlashMode.auto)
//     }
//   }
//   const __switchCamera = () => {
//     if (cameraType === Camera.Constants.Type.back) {
//       setCameraType(Camera.Constants.Type.front)
//     } else {
//       setCameraType(Camera.Constants.Type.back)
//     }
//   }

//   return (
//     <View style={styles.container}>
//       {startCamera ? (
//         <View
//           style={{
//             flex: 1,
//             width: '100%'
//           }}
//         >
//           {previewVisible && capturedImage ? (
//             <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
//           ) : (
//             <Camera
//               type={cameraType}
//               flashMode={flashMode}
//               style={{flex: 1}}
//               ref={cameraRef}
//             >
//               <View
//                 style={{
//                   flex: 1,
//                   width: '100%',
//                   backgroundColor: 'transparent',
//                   flexDirection: 'row'
//                 }}
//               >
//                 <View
//                   style={{
//                     position: 'absolute',
//                     left: '5%',
//                     top: '10%',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between'
//                   }}
//                 >
//                   <TouchableOpacity
//                     onPress={__handleFlashMode}
//                     style={{
//                       backgroundColor: flashMode === 'off' ? '#000' : '#fff',
//                       borderRadius: '50%',
//                       height: 25,
//                       width: 25
//                     }}
//                   >
//                     <Text
//                       style={{
//                         fontSize: 20
//                       }}
//                     >
//                       ⚡️
//                     </Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     onPress={__switchCamera}
//                     style={{
//                       marginTop: 20,
//                       borderRadius: '50%',
//                       height: 25,
//                       width: 25
//                     }}
//                   >
//                     <Text
//                       style={{
//                         fontSize: 20
//                       }}
//                     >
//                       {cameraType === 'front' ? '🤳' : '📷'}
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//                 <View
//                   style={{
//                     position: 'absolute',
//                     bottom: 0,
//                     flexDirection: 'row',
//                     flex: 1,
//                     width: '100%',
//                     padding: 20,
//                     justifyContent: 'space-between'
//                   }}
//                 >
//                   <View
//                     style={{
//                       alignSelf: 'center',
//                       flex: 1,
//                       alignItems: 'center'
//                     }}
//                   >
//                     <TouchableOpacity
//                       onPress={__takePicture}
//                       style={{
//                         width: 70,
//                         height: 70,
//                         bottom: 0,
//                         borderRadius: 50,
//                         backgroundColor: '#fff'
//                       }}
//                     />
//                   </View>
//                 </View>
//               </View>
//             </Camera>
//           )}
//         </View>
//       ) : (
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: '#fff',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}
//         >
//           <TouchableOpacity
//             onPress={__startCamera}
//             style={{
//               width: 130,
//               borderRadius: 4,
//               backgroundColor: '#14274e',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//               height: 40
//             }}
//           >
//             <Text
//               style={{
//                 color: '#fff',
//                 fontWeight: 'bold',
//                 textAlign: 'center'
//               }}
//             >
//               Take picture
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       <StatusBar style="auto" />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

// const CameraPreview = ({photo, retakePicture, savePhoto}: any) => {
//   console.log('sdsfds', photo)
//   return (
//     <View
//       style={{
//         backgroundColor: 'transparent',
//         flex: 1,
//         width: '100%',
//         height: '100%'
//       }}
//     >
//       <ImageBackground
//         source={{uri: photo && photo.uri}}
//         style={{
//           flex: 1
//         }}
//       >
//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'column',
//             padding: 15,
//             justifyContent: 'flex-end'
//           }}
//         >
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between'
//             }}
//           >
//             <TouchableOpacity
//               onPress={retakePicture}
//               style={{
//                 width: 130,
//                 height: 40,

//                 alignItems: 'center',
//                 borderRadius: 4
//               }}
//             >
//               <Text
//                 style={{
//                   color: '#fff',
//                   fontSize: 20
//                 }}
//               >
//                 Re-take
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={savePhoto}
//               style={{
//                 width: 130,
//                 height: 40,

//                 alignItems: 'center',
//                 borderRadius: 4
//               }}
//             >
//               <Text
//                 style={{
//                   color: '#fff',
//                   fontSize: 20
//                 }}
//               >
//                 save photo
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   )
// }