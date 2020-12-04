import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();
  const handleNavigate = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
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

export default About;
