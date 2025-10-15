import { useState } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList} from 'react-native';
import AdicionarReceitas from'../componentes/AdicionarReceitas'

export default function Receitas({navigation}){

    const dados_fake=[
        {id: '1', nome: 'Bolo de Cenoura', ingredientes: 'Cenoura', modoDePreparo: 'Pré-aqueça o forno a 180°C (forno médio) No liquidificador, bata as cenouras, os ovos e o óleo até formar um creme liso. Adicione o açúcar e bata mais um pouco até misturar bem. Em uma tigela grande, coloque a farinha de trigo peneirada e misture o creme do liquidificador aos poucos. Misture o fermento por último, delicadamente. Despeje a massa em uma forma untada e enfarinhada (forma retangular média ou redonda com furo no meio). Asse por 40 a 50 minutos, ou até o palito sair limpo.'},
        {id: '2', nome: 'Bolo de Fuba', ingredientes: 'Fuba', modoDePreparo: 'Pré-aqueça o forno a 180 °C. No liquidificador, bata os ovos, o açúcar e o óleo por 1 minuto. Em seguida, adicione o leite e bata por mais 30 segundos. Acrescente o fubá, a farinha de trigo e o sal, batendo até obter uma mistura homogênea. Por último, adicione o fermento (e a erva-doce, se desejar) e misture delicadamente com uma colher ou espátula, sem bater demais. Despeje a massa em uma forma untada e enfarinhada, que pode ser retangular média ou redonda com furo no meio. Leve ao forno por cerca de 40 a 45 minutos, ou até que o bolo esteja dourado e um palito inserido no centro saia limpo.'},
    ]

    const [view, setView] = useState('lista');
    const [receitas, setReceitas] = useState(dados_fake);

    const renderizaItemReceita = ({item})=>{
        console.log(item);
        return(
            <View>
                <Text>{'\n'}</Text>{/*esse é o equivalente ao br br  */}
                <Text>Titulo da receita: {item.nome} </Text>
                <Text>{item.ingredientes}</Text>
                <Text>{item.modoDePreparo}</Text>
            </View>
        )
    }
    return(
        <View style= {styles.container}>

            <ScrollView>
                <view>

                <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.button}>{/*para voltar diretamente para a pagina anterior use o goBack */}
                    <Image source={require('../assets/Back_Arrow.png')}></Image>
                </TouchableOpacity>

                    <Text>Receitas</Text>
                </view>
                
                {(view === 'lista') ? (
                    <View>
                        <TouchableOpacity onPress={()=>setView('lista')} style={styles.button}>
                            <Text>Adicionar Receitas</Text>
                        </TouchableOpacity> 
                    <FlatList
                        data = {receitas}
                        keyExtractor={item => item.id}
                        renderItem={renderizaItemReceita}
                    />

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
        padding: 7,
        borderRadius: 6,
        
    }
});