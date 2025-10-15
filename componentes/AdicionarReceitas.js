import { ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";
import { TextInput } from "react-native-web";

export default function AdicionarReceitas() {
    const {nome, setNome}= useState('');
    const {ingredientes, setIngredientes}= useState('')
    const salvar =()=>{
        if (!nome.trim() || !ingredientes.trim()) {</*trim serve para apagar os espaços */></>
            alert('po man faltoru coisa')
            return
        }
        const novaReceita = (
            nome,
            ingredientes
        )
    }

    return(
        <ScrollView>
            <Text>Adicionar Receitas</Text> 
            <TextInput value={nome}
                onChangeText={setNome}
                placeholder="Digite o nome da receita"
            />
            <TextInput value={ingredientes}
                onChangeText={setIngredientes}
                placeholder="Digite os ingredientes da receita"
            />
            <TouchableOpacity onPress={salvar}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}