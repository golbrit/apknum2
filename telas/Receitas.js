import { useState } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native';
import AdicionarReceitas from'../componentes/AdicionarReceitas'

export default function Receitas({navegar}){

    const [view, setView] = useState('lista');
    const [receitas, setReceitas] = useState([]);

    
    return(
        <View style= {styles.container}>

            <ScrollView>
                <view>

                <TouchableOpacity onPress={()=> navegar('home')} style={styles.button}>
                    <Image source={require('../assets/Back_Arrow.png')}></Image>
                </TouchableOpacity>

                    <Text>Receitas</Text>
                </view>
                
                {(view === 'lista') ? (
                    <View>
                        <TouchableOpacity onPress={()=>setView('lista')} style={styles.button}>
                            <Text>Adicionar Receitas</Text>
                        </TouchableOpacity> 
                    {(receitas.length === 0) ? (
                        <Text> Nenhuma receita cadastrada </Text>
                    ) : (
                        <View></View>
                    )}
                    </View>
                ): (
                    <View>
                        <AdicionarReceitas/>
                    </View>
                )}
                

            </ScrollView>
            
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#343',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#435cf9ff',
        padding: 10,
        borderRadius: 10,
        width: "auto"
    }
});