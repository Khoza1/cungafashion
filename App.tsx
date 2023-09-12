import * as React from 'react';
import firebase from "firebase/compat/app"
import { initializeApp } from 'firebase/app';
import {getDatabase ,ref,set} from "firebase/database"
import {Feather} from "@expo/vector-icons"
import {StyleSheet, Text, View,StatusBar,TextInput,TouchableOpacity,ScrollView,Image,Button,Alert,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

////////////////////////////////////////////////////////////////////////////
function mostrar_produto() {

  const [nome, setNome] = React.useState('');
  const [quantidade, setQuantidade] = React.useState('');
  const [categoria, setCategoria] = React.useState('');
  const [preco, setPreco] = React.useState('');
  const [lucro, setLucro] = React.useState('');
  const [image, setImage] = React.useState('');




  React.useEffect(() => {
    // Recupere os dados salvos do AsyncStorage quando o componente for montado.
    async function carregarDadosSalvos() {
      try {
        const nomeSalvo = await AsyncStorage.getItem('nome');
        const quantidadeSalva = await AsyncStorage.getItem('quantidade');
        const categoriaSalvo = await AsyncStorage.getItem('categoria');
        const precoSalva = await AsyncStorage.getItem('preco');
        const lucroSalvo = await AsyncStorage.getItem('lucro');
        const imageSalva = await AsyncStorage.getItem('image');

        if (nomeSalvo !== null) {
          setNome(nomeSalvo);
        }
        if (quantidadeSalva !== null) {
          setQuantidade(quantidadeSalva);
        }
        if (categoriaSalvo !== null) {
          setCategoria(categoriaSalvo);
        }
        if (precoSalva !== null) {
          setPreco(precoSalva);
        }

        if (lucroSalvo !== null) {
          setLucro(lucroSalvo);
        }

        if (imageSalva !== null) {
          setImage(imageSalva);
        }
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    }

    carregarDadosSalvos();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center' ,backgroundColor: '#5076a5'}}>

      <View style={styles.topcard} > 
        <Text style={{color: "#ff9696" ,fontSize:20,fontWeight:'800'}}>Estoque Cungafashion</Text>

        <View style={{alignItems:'center'}} >
          <Text style={{color:'#fff'}}>Lucro total: {lucro} MT</Text>
          <Text style={{color:'#fff'}}>Total venda: {preco} MT</Text>
          <Text style={{color: "#fff" ,fontSize:18,lineHeight:35,}}>Produtos Cadastrados</Text>
        </View>
      </View>
      
      <ScrollView>
        <View style={styles.cartao}>
            <Text style={styles.testocard}>Nome: <Text style={styles.testocardv2}>{nome}</Text>  </Text>
            <Text style={styles.testocard}>Quantidade: <Text style={styles.testocardv2}>{quantidade}</Text></Text>
            <Text style={styles.testocard}>Categoria: <Text style={styles.testocardv2}>{categoria}</Text></Text>
            <Text style={styles.testocard}>Preco: <Text style={styles.testocardv2}>{preco}</Text></Text>
            <Text style={styles.testocard}>Lucro: <Text style={styles.testocardv2}>{lucro}</Text></Text>
        </View>


        <View style={styles.cartao}>
            <Text style={styles.testocard}>Nome: <Text style={styles.testocardv2}>{nome}</Text>  </Text>
            <Text style={styles.testocard}>Quantidade: <Text style={styles.testocardv2}>{quantidade}</Text></Text>
            <Text style={styles.testocard}>Categoria: <Text style={styles.testocardv2}>{categoria}</Text></Text>
            <Text style={styles.testocard}>Preco: <Text style={styles.testocardv2}>{preco}</Text></Text>
            <Text style={styles.testocard}>Lucro: <Text style={styles.testocardv2}>{lucro}</Text></Text>
        </View>

      <View style={styles.cartao}>
          <Text style={styles.testocard}>Nome: <Text style={styles.testocardv2}>Sapato Jordan</Text>  </Text>
          <Text style={styles.testocard}>Quantidade: <Text style={styles.testocardv2}>85</Text></Text>
          <Text style={styles.testocard}>Categoria: <Text style={styles.testocardv2}>Sapatos</Text></Text>
          <Text style={styles.testocard}>Preco: <Text style={styles.testocardv2}>2000 MT</Text></Text>
          <Text style={styles.testocard}>Lucro: <Text style={styles.testocardv2}>800 MT</Text></Text>
      </View>

      <View style={styles.cartao}>
          <Text style={styles.testocard}>Nome: <Text style={styles.testocardv2}>Sapato Jordan</Text>  </Text>
          <Text style={styles.testocard}>Quantidade: <Text style={styles.testocardv2}>85</Text></Text>
          <Text style={styles.testocard}>Categoria: <Text style={styles.testocardv2}>Sapatos</Text></Text>
          <Text style={styles.testocard}>Preco: <Text style={styles.testocardv2}>2000 MT</Text></Text>
          <Text style={styles.testocard}>Lucro: <Text style={styles.testocardv2}>800 MT</Text></Text>
      </View>
      </ScrollView>
      
    </View>
  );
}


function Sair_produto() {

  function alertaDeretirada(){
    Alert.alert("Produto retirado do estoque com sucesso!");
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#5076a5' }}>

      <ScrollView>
        <View style={styles.prodcard}>
          <View>
            {/* Adicione a imagem ao card */}
          <Image
            source={{ uri: 'https://lojavirus.fbitsstatic.net/img/p/tenis-nike-air-force-1-07-le-black-black-cw2288-001-73867/304818.jpg?w=1200&h=1200&v=no-change&qs=ignore' }}
            style={{ width: '100%', height: 200,borderRadius:12}}
          />
          <Text >Air force</Text>
          <Text>Geraçao z do sapatos</Text>

          <TouchableOpacity >
          <Text style={{color:'red', fontWeight:"bold"}} onPress={alertaDeretirada} >retirada</Text>
        </TouchableOpacity>
          </View>
        </View>

        <View style={styles.prodcard}>
        <View>
          {/* Adicione a imagem ao card */}
        <Image
          source={{ uri: 'https://terramagna.com.br/wp-content/uploads/2022/09/aparelho-imagens-de-satelite-espaco-terra.jpg.webp' }}
          style={{ width: '100%', height: 200,borderRadius:12}}
        />
        <Text >Satelite </Text>
        <Text>O melhor satelite da Cungafashion</Text>

        <TouchableOpacity >
          <Text style={{color:'red', fontWeight:"bold"}} onPress={alertaDeretirada} >retirada</Text>
        </TouchableOpacity>
        </View>
      </View>


      <View style={styles.prodcard}>
        <View>
          {/* Adicione a imagem ao card */}
        <Image
          source={{ uri: 'https://www.tradeinn.com/f/13896/138967077/hp-desktop-pc-290g4-mt-i5-10500-8gb-512gb-ssd.jpg' }}
          style={{ width: '100%', height: 200,borderRadius:12}}
        />
        <Text >hp</Text>
        <Text>Gabine ultra </Text>

        <TouchableOpacity >
          <Text style={{color:'red', fontWeight:"bold"}} onPress={alertaDeretirada} >retirada</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.prodcard}>
        <View>
          {/* Adicione a imagem ao card */}
        <Image
          source={{ uri: 'https://s2-techtudo.glbimg.com/203WQvCz_WQUkWrA59vjlkBUnn4=/0x0:1280x853/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/T/r/vB7dIwSsyNVJ3ivIfONQ/apple-laptop-macbook-computer-191158.jpg' }}
          style={{objectFit:'cover', width: '100%', height: 200,borderRadius:12}}
        />
        <Text >Mac</Text>
        <Text>Um dos melhores computador da ipple</Text>

        <TouchableOpacity >
          <Text style={{color:'red', fontWeight:"bold",}} onPress={alertaDeretirada} >retirada</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

function cadastrar_produto() {
  const [nome, setNome] = React.useState('');
  const [quantidade, setQuantidade] = React.useState('');
  const [categoria, setCategoria] = React.useState('');
  const [preco, setPreco] = React.useState('');
  const [lucro, setLucro] = React.useState('');
  const [image, setImage] = React.useState('');
  const salvarDados = async () => {
  try {
    if(nome=="" && quantidade=="" && categoria=="" && preco=="" && lucro=="" && image==""){
      Alert.alert('Porfavor prencha todos os campos!');
    }else{
      await AsyncStorage.setItem('nome',nome);
      await AsyncStorage.setItem('quantidade',quantidade);
      await AsyncStorage.setItem('categoria',categoria);
      await AsyncStorage.setItem('preco',preco);
      await AsyncStorage.setItem('lucro',lucro);
      await AsyncStorage.setItem('preco',preco);
      await AsyncStorage.setItem('image',image);
      Alert.alert('Dados salvos com sucesso!');
    }
    
  } catch (error) {
    console.error('Erro ao salvar os dados:', error);
  }
  };

 
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#5076a5' }}>
      <Text style={styles.testo} >CADASTRAR PRODUTO</Text>
      
      <View style={styles.cartaocad}>
        <View>
          <Text>Nome do produto:</Text>
          <TextInput value={nome} onChangeText={(text) => setNome(text)} style={styles.input} ></TextInput>
        </View>

        <View>
          <Text>Quantidade do produto:</Text>
          <TextInput value={quantidade} onChangeText={(text) => setQuantidade(text)} style={styles.input} ></TextInput>
        </View>

        <View>
          <Text>Categoria:</Text>
          <TextInput   value={categoria} onChangeText={(text) => setCategoria(text)}  style={styles.input}></TextInput>
        </View>

        <View>
          <Text>Preco do produto:</Text>
          <TextInput value={preco} onChangeText={(text) => setPreco(text)} style={styles.input}></TextInput>
        </View>

        <View>
          <Text>Lucro do produto:</Text>
          <TextInput value={lucro} onChangeText={(text) => setLucro(text)} style={styles.input}></TextInput>
        </View>

        <View>
          <Text>Url Image do produto:</Text>
          <TextInput value={image} onChangeText={(text) => setImage(text)} style={styles.input}></TextInput>
        </View>

        <TouchableOpacity >
          <Text style={styles.butao1}  onPress={salvarDados}>cadastrar produto</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>  
        <Tab.Screen 
        name="Estoque" 
        component={mostrar_produto}
        options={{
          tabBarIcon: () => <Feather name="layers" size={24} color="black" />, // Substitua "black" pela cor desejada
        }}
        />

      <Tab.Screen 
          name="saida" 
          component={Sair_produto}
          options={{
          tabBarIcon: () => <Feather name="shopping-bag" size={24} color="black" />, // Substitua "black" pela cor desejada
        }}
        />

        <Tab.Screen 
          name="cadastro"
          component={cadastrar_produto}
          options={{
          tabBarIcon: () => <Feather name="list" size={24} color="black" />, // Substitua "black" pela cor desejada
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5076a5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartao:{
      color:'#fff',
      marginBottom:7,
      padding:15,
      height:280,
      width:260,
      borderRadius:12,
      backgroundColor:'#1212',
    },
 
  topcard:{
      marginTop:20,
      backgroundColor:'#5076a5',
      paddingLeft:25,
      paddingRight:25,
      paddingBottom:15,
      paddingTop:15,
      borderRadius:12,
  },

  prodcard:{
    color:'#fff',
    marginTop:35,
    marginBottom:24,
    padding:15,
    height:300,
    width:280,
    borderRadius:12,
    backgroundColor:'#FFDAB9',
},

  testocard:{
      color:'#fff',
      lineHeight:40,
  },

  testocardv2:{
    color:'#9696ff',
  },

  cartaocad:{
    color:'#fff',
    marginTop:5,
    padding:15,
    height:340,
    width:240,
    borderRadius:12,
    backgroundColor:'#1212',
  },

  testo:{
    fontSize:14,
    fontStyle:'normal',
    fontWeight:'800'
  },

  input:{
    border:0,
    paddingLeft:9,
    borderRadius:12,
    backgroundColor:'#ADD8E6',
  },

  butao1:{
    border:0,
    textAlign:'center',
    borderRadius:12,
    paddingBottom:4,
    backgroundColor:'#ADD8E6',
    marginTop:10,
  },

  butao2:{
    border:0,
    color:'blue',
    marginTop:7,
  },

});


/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/