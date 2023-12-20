import React from 'react';
import { View, Text, Button, Alert, Pressable} from 'react-native';

const ServiceDetail = ({ route }) => {
  // Lấy thông tin về dịch vụ từ route.params
  const { service } = route.params;

  const OrderService = () => {
    Alert.alert("Success","Order Successfully")
  }
    return (
      <View>
      <View style={{padding: 10}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Service Name: {service.name}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Price: {service.price}</Text>
      </View>
      <View style={{justifyContent: 'center', padding: 10,paddingTop:0 }}>
                  <Pressable 
                  style={{backgroundColor: "red", 
                  alignItems:'center',
                  padding: 15, 
                  borderRadius:10, 
              }}
              onPress={OrderService}>
                     <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Order Now</Text>
                  </Pressable>
                  </View>
      </View>
    );
  };

export default ServiceDetail;
