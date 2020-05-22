import React,{useState} from 'react';
import { Text, View,TextInput,StyleSheet, TouchableWithoutFeedback, Animated,Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';



const Formulario = ({ciudad,guardarCiudad,guardarConsultar}) =>{

const[ animacionboton ] = useState(new Animated.Value(1));

const consultarClima = () =>{
    
    if(ciudad.trim() === ''){
        mostarAlerta();
        return;
    }
    guardarConsultar(true);

}

const mostarAlerta = () =>{
    Alert.alert(
        'error',
        'Agregar número de guía',
        [{text:'Entendido'}]
    );
}

const animacionEntrada = () => {
 
    Animated.spring(animacionboton, {
        toValue: .75,
        useNativeDriver: true
    }).start();

}

const animacionSalida = () =>{
    Animated.spring(animacionboton, {
        toValue: 1,
        useNativeDriver: true,
        friction:4,
        tension:30
    }).start();
    
}

const estiloAnimacion ={
    transform:[{scale:animacionboton}]
}


    return(
        <>
            <View style={styles.formulario}>
                <View>
                    <TextInput style={styles.input}
                        placeholder="Número de guía"
                        onChangeText={ciudad=> guardarCiudad(ciudad)}
                        placeholderTextColor="#666" 
                    />
                    
                </View>
                
                <TouchableWithoutFeedback 
                    onPressIn={() => animacionEntrada()}
                    onPressOut={() => animacionSalida()}
                    onPress={() => consultarClima()}
                >
                    <Animated.View style={[styles.btnBuscar,estiloAnimacion]} >
                        <Text style={styles.txtBuscar}>Buscar</Text>

                    </Animated.View>
                </TouchableWithoutFeedback>
                
                

            </View>


        </>


    );


}

const styles = StyleSheet.create({
  input:{
    padding:10,
    height:50,
    backgroundColor:'#FFF',
    fontSize:18,
    marginBottom:20,
    textAlign: 'center'
  },
  btnBuscar:{
    marginTop:50,
    backgroundColor:'black',
    padding:10,
    justifyContent:'center'
  },
  txtBuscar:{
    color:'#FFF',
    fontWeight:'bold',
    textTransform: 'uppercase',
    textAlign:'center',
    fontSize:18
  }

});



export default Formulario;