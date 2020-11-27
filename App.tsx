import React, {useState, useCallback} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const handleAdd = useCallback(() => {
    setCounter((count) => count + 1);
  }, []);
  const handleSubtract = useCallback(() => {
    setCounter((count) => count - 1);
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
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
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;
