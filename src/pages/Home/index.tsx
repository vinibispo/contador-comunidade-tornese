import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const handleAdd = useCallback(() => {
    setCounter((count) => count + 1);
  }, []);
  const handleSubtract = useCallback(() => {
    setCounter((count) => count - 1);
  }, []);
  const navigation = useNavigation();
  const handleNavigate = useCallback(() => {
    navigation.navigate('About');
  }, [navigation]);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 20}}>Contador: {counter}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#f00',
          padding: 10,
          borderRadius: 5,
          marginTop: 30,
        }}
        onPress={handleAdd}>
        <Text style={{color: '#fff', textTransform: 'uppercase'}}>
          Adicionar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#f00',
          padding: 10,
          borderRadius: 5,
          marginTop: 30,
        }}
        onPress={handleSubtract}>
        <Text style={{color: '#fff', textTransform: 'uppercase'}}>
          Subtrair
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#f00',
          padding: 10,
          borderRadius: 5,
          marginTop: 30,
        }}
        onPress={handleNavigate}>
        <Text style={{color: '#fff', textTransform: 'uppercase'}}>
          Trocar de tela
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
