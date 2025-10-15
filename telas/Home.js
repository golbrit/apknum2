import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({navigation}){
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo!

            </Text>
            <br></br>

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Receitas') }>
                <Text style={styles.textButton}>
                    Ver Receitas
                </Text>
            </TouchableOpacity>

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
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#8f9',
      textAlign: 'center' 
    },
    button: {
      backgroundColor: '#435cf9ff',
      padding: 15,
      borderRadius: 10
    },
    textButton:{
      color: '#ef3'
    }
  });
  


