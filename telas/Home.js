import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({navegar}){
    
    return(
        <View>
            <Text>Bem vindo!

            </Text>
            <br></br>

            <TouchableOpacity onPress={()=> navegar('receitas')}>
                <Text>
                    Ver Receitas
                </Text>
            </TouchableOpacity>

        </View>
    )
}


