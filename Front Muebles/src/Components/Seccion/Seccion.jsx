import React from 'react'
import { useParams } from 'react-router-dom'

function Seccion() {
  const {id, itemName} = useParams();

  const seccion = id.replace(/-/g, ' ');
  const mueble = itemName.replace(/-/g, ' ');


  const allMuebles = 
    { //Importante para la base de datos, debo crear la base allMuebles y concatenarla con una key a las distintas listas de los muebles especificos como por ejemplo "alacena"
      // id: 0,
      // seccion: 'Muebles de Cocina',
      // muebles: {
        alacena: {
          0: {
            imagen: 'https://acdn.mitiendanube.com/stores/001/322/259/products/img_20230118_122056_6211-8fe7018b50f153b85716740553848192-1024-1024.jpg',
            description: 'Es información de la imagen 1'
          },
          1: {
            imagen: 'https://acdn.mitiendanube.com/stores/912/364/products/alacena-120-cm-de-pino11-99b156a1c6e40ba81816344007454739-640-0.jpg',
            description: 'Es información de la imagen 2'
          },
          2: {
            imagen: 'https://dcdn.mitiendanube.com/stores/405/944/products/alacena-801-ae511bcce789747bbd16722010621989-1024-1024.jpeg',
            description: 'Es información de la imagen 3'
          }, 
          3: {
            imagen: 'https://mhamoblamientos.com/wp-content/uploads/2020/07/180-20.jpg',
            description: 'Es información de la imagen 4'
          },
          4: {
            imagen: 'https://www.dualequipamientos.com.ar/wp-content/uploads/2021/07/Alacena-1.20-pino-lustrado.jpg',
            description: 'Es información de la imagen 5'
          },
          5: {
            imagen: 'https://dcdn.mitiendanube.com/stores/002/226/350/products/alacena1-6011-df0a5d1bcc5b80a95016702454258094-1024-1024.jpg',
            description: 'Es información de la imagen 6'
          },
        },
        bajo_Mesada: {},
        isla: {}, 
        especiero: {},
        despensa: {},
      // },
    // },
    // {
      // id: 1,
      // seccion: 'Muebles de Comedor',
      // muebles: {
        mesa: '',
        sillas: '',
        modular: '',
        mesa_de_televisor: '',
      // }
    // },
    // {
      // id: 2,
      // seccion: 'Sala de Estar',
      // muebles: {
        sillones: '',
        mesa_Ratonera: '',
        mesita_Esquinera: '',
        recibidores: '',
        repisas_Flotantes: '',
      // }
    }
  

  if (allMuebles[mueble.toLowerCase()]) {
    const mueblesEncontrados = allMuebles[mueble.toLowerCase()];
    console.log("Muebles encontrados:", mueblesEncontrados);
  } else {
    console.log(`No se encontraron muebles para la sección "${mueble.toLowerCase()}"`);
    console.log("Es para ver el objeto", allMuebles['alacena'] );
  }



  return (
    <div>
      <div className='font-josefin text-xl bg-red-300 text-left pl-12'>{seccion}: {mueble}</div>
      <div >
        
      </div>
    </div>
  )
}

export default Seccion