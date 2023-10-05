import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

// Esta función toma una foto con la cámara del dispositivo y la guarda en la variable 'image', podemos modificarle los ENUMs para que nos permita editar la foto y que nos devuelva la imagen en Base64
const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,              // Podemos ir a la definición de este ENUM y ver que solo tiene 3 valores, 'Base64', 'DataUrl' y 'Uri', si usamos otro valor nos dará un error
    direction: CameraDirection.Front                  // Podemos ir a la definición de este ENUM y ver que solo tiene 2 valores, 'Rear' y 'Front', si usamos otro valor nos dará un error
  });
};