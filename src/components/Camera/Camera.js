import { StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { CaptureButton, ContainerCamera, ContainerInsideButtons, FlipButton, FlipCamera, ImageModal, InsideButtons } from './Style';

import { useEffect, useState, useRef } from 'react';


export const OpenCamera = ({ visibleCamera, type, onPressType, onPressExit }) => {
    const cameraRef = useRef(null)
    const [photo, setPhoto] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)

    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhoto(photo.uri)
            setOpenModal(true)

            console.log(photo)

        }
    }

    function ClearPhoto() {
        setPhoto(null)

        setOpenModal(false)
    }

    async function SavePhoto() {
        if (photo) {
            await MediaLibrary.createAssetAsync(photo).then(() => {
                alert('Sucesso', 'Foto salva na galeria')
            }).catch(error => {
                alert("Erro ao processar função")
            })
        }
    }

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();

        })();
    }, [])

    return (
        <Modal
            visible={visibleCamera}
            animationType='slide'
            transparent={false}
        >
            <ContainerCamera>
                <Camera
                    ref={cameraRef}
                    type={cameraType}
                    style={styles.camera}
                    ratio={'16:9'}
                >
                    <FlipCamera>
                        <FlipButton onPress={() => setCameraType(cameraType == CameraType.front ? CameraType.back : CameraType.front)}>
                            <MaterialCommunityIcons name="camera-flip" size={24} color="white" />
                        </FlipButton>
                    </FlipCamera>
                </Camera>
                <CaptureButton onPress={() => CapturePhoto()}>
                    <MaterialCommunityIcons name="pokeball" size={40} color="black" />
                </CaptureButton>

                <Modal animationType='slide' transparent={false} visible={openModal}>
                    <ImageModal>
                        <Image
                            style={{ width: '100%', height: 500, borderRadius: 10 }}
                            source={{ uri: photo }}
                        />
                        <ContainerInsideButtons>
                            <InsideButtons>
                                <FontAwesome name='trash' size={35} color={'#ff0000'} onPress={() => ClearPhoto()} />
                            </InsideButtons>
                            <InsideButtons>
                                <FontAwesome name='save' size={33} color={'#121212'} onPress={() => SavePhoto()} />
                            </InsideButtons>
                        </ContainerInsideButtons>
                    </ImageModal>
                </Modal>

            </ContainerCamera>
        </Modal>
    );
}
const styles = StyleSheet.create({
    camera: {
        flex: 1,
        height: '80%',
        width: '100%'
    },
});
