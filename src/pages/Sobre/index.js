import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Sobre() {


  return (
    <View style={styles.container}>
      <Text>Pagina sobre</Text>
      
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

/**
 * 
 *  route recebe por parametro
 export default function Sobre({route}) {
  return (
    <View style={styles.container}>
      <Text>Pagina sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>

    </View>
  );
}

    uso de Buttom
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome
    })
  }, [navigation])

  <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button title='CONTATO' onPress={() => navigation.navigate('Contato')} />
      <Button title='VOLTAR' onPress={() => navigation.goBack()} />

 */