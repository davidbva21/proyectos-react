
import React,{useState,useEffect} from 'react';
import {StyleSheet,  View,  Text,  TouchableWithoutFeedback,Keyboard,Alert, ScrollView} from 'react-native';
import Fomulario from './componentes/Formulario';
import Clima from './componentes/Clima';


const App = ()  => {

  const [ ciudad, guardarCiudad] = useState('');

  const[consultar,guardarConsultar]= useState(false);

  const[resultado,guardarResultado]= useState({});

  const[bgColor,guardarBgColor]= useState('rgb(71,149,212)');

  const bgColorApp ={
    backgroundColor:bgColor
  };

  useEffect(() =>{
    const consultarClima = async() =>{
      if(consultar){
        const appId ="654888862b04da25baf9f20170170c41";
        const url = `https://api-eu.dhl.com/track/shipments?trackingNumber=${ciudad}&service=express&requesterCountryCode=MX&originCountryCode=MX&language=es`;
        cerrarTeclado();       
        try{
          const respuesta = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'DHL-API-Key':'Ya5kcXb2YixnR3A1ZC2qzBX9qjs1wNtU'
            }
                    });
          const resultado = await respuesta.json();
          console.log(resultado);
          console.log(resultado.shipments[0]);
          guardarResultado(resultado.shipments[0]);
          guardarConsultar(false);

         
        }catch(error){
          mostrarAlerta();
          guardarConsultar(false);
          guardarResultado({});
        }
  
        
      }

    }

    consultarClima();
   

  },[consultar]);

  const mostrarAlerta = () =>{
    Alert.alert(
        'error',
        'No hay resultados, intenta con otra guía',
        [{text:'ok'}]
    );
}

  const cerrarTeclado = ()=>{
     Keyboard.dismiss();
    
  }

  return (
    <>
      <ScrollView>
        <TouchableWithoutFeedback onPress={()=>cerrarTeclado()}>
            <View style={[styles.app,bgColorApp]}>
                  
              <View style={styles.contenido}>
                
                
                <Fomulario  
                    ciudad={ciudad}
                    guardarCiudad={guardarCiudad}
                    guardarConsultar={guardarConsultar}
                />
                <Clima
                  resultado={resultado}
                >
                </Clima>
              </View>

            </View>
            </TouchableWithoutFeedback>

            </ScrollView>
      
      </>
  );
};

const styles = StyleSheet.create({
  app:{
    flex:1,
    justifyContent: 'center'
  },
  contenido:{
    marginHorizontal : '2.5%'
  },label:{
    fontWeight:'bold',
    fontSize:18,
    marginTop:20

},
input:{
    marginTop:10,
    height:50,
    borderColor:'#e1e1e1',
    borderWidth:1,
    borderStyle:'solid'

},
});

export default App;
