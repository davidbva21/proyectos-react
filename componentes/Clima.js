import React from 'react';

import {StyleSheet,View,Text,Image,FlatList}from 'react-native';




const Clima = ({resultado}) =>{

    const{origin,destination,status,events} = resultado;

    const kelvin = 273.15;

    if(!destination) return null;

    return(
        
            <View style={styles.clima}>
                <View style={styles.resultado}>                    
                    
                    <Text style={styles.texto}> Origen{' '}
                        <Text style={styles.span} >{origin.address.addressLocality} %</Text>
                    </Text>
                    <Text style={styles.texto}> Destino{' '}
                        <Text style={styles.span} >{destination.address.addressLocality } </Text>
                    </Text>

                    <Text style={styles.texto}> Estatus:{' '}
                        <Text style={styles.span} >{status.description}</Text>
                    </Text>
                    <Text style={styles.texto}> Fecha estimada de llegada:{' '}
                        <Text style={styles.span} >{resultado.estimatedTimeOfDelivery}</Text>
                    </Text>
                    <Text style={styles.texto}> Hora estimada de llegada:{' '}
                        <Text style={styles.span} >{resultado.estimatedTimeOfDeliveryRemark}</Text>
                    </Text>
                </View>

                                                      
                    <Text style={styles.texto}> Eventos:{' '}     </Text> 
                        {events.map(item =>(
                            <View style={styles.resultado}> 
                                <Text style={styles.texto}> Hora :{' '}
                                    <Text style={styles.span} >{item.timestamp}</Text>
                                </Text>
                                <Text style={styles.texto}> Estatus :{' '}
                                    <Text style={styles.span} >{item.description}</Text>
                                </Text>
                            </View>
                        ))      
                        }
                    
                   
                         
                        
                    </View>
        
         
                                
                
        
    );
}

const styles = StyleSheet.create({
    resultado:{
        padding:20,
    },
    texto:{
        color:"#FFF",
        fontFamily:"Lato-Regular",
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold'
    },precio:{
        fontSize:38
    },
    clima:{
        marginBottom:20
    },
    actual:{
        fontSize:80,
        marginRight:0,
        fontWeight:'bold'
    },
    temperatura:{
        fontSize:24,
        fontWeight:'bold'
    },
    temperaturas:{
        flexDirection:'row',
        justifyContent:'center'
    },
    span:{
        fontWeight:'normal',
        fontSize:14,
    }
});

export default Clima;