import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Pressable } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { COLORS } from '../../constants';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
const AddNewService = ({ navigation }) => {
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState(0);

  const addNewService = async () => {
    try {
      // Thêm dịch vụ mới vào Firestore
      await firestore().collection('services').add({
        name: serviceName,
        price: price,
        // Thêm các trường khác tùy thuộc vào yêu cầu của bạn
      });

      console.log('Dịch vụ đã được thêm thành công');
      // Hiển thị thông báo thành công
      alert('Dịch vụ đã được thêm thành công');

      // Sau khi thêm thành công, chuyển đến màn hình "Admin"
      navigation.navigate('Admin');
    } catch (error) {
      console.error('Lỗi khi thêm dịch vụ', error);

      // Hiển thị thông báo lỗi
      alert('Lỗi khi thêm dịch vụ');
    }
  };

  return (
    <View style={{justifyContent:'center', margin:10, borderRadius:20}}>
        <Text style={{marginLeft: 10, fontWeight: 'bold',color:'#FF0000' }}>Service name * </Text>
        <TextInput
            color='#000'
            style={{margin: 10, borderRadius:10}}
            label="Input service name"
            value={serviceName}
            underlineColor='transparent'
            onChangeText={(text) => setServiceName(text)}
            backgroundColor= "#FFC0CB"
        />
         <Text style={{marginLeft: 10, fontWeight: 'bold', color:'#FF0000'}}>Price * </Text>
        <TextInput
         style={{margin: 10, borderRadius:10}}
            label="input price service"
            value={price}
            underlineColor='transparent'
            onChangeText={price => setPrice(price)}
            backgroundColor= "#FFC0CB"

        />
       
        <View style={{justifyContent: 'center', padding: 10 }}>
            <Pressable 
            onPress={addNewService}
            style={{backgroundColor: "#FF1493", 
            alignItems:'center',
            padding: 15, 
            borderRadius:10, 
            
           }}
            >
              <Text  style={{color: '#FFC0CB', fontSize: 15, fontWeight: 'bold'}}>Add</Text>
            </Pressable>
        </View>
       
             
    </View>
);
};

const styles = StyleSheet.create({})

export default AddNewService;
