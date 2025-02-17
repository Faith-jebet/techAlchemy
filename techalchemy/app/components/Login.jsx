import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const[text, onChangeText] =React.useState('');
    const[password, setPassword] = useState('');

    const[showPassword, setShowpassword] = useState('false');

    const toggleShowPassword = () => {
       setShowpassword(!showPassword)
    };
  return (
    <>
    <View style={styles.header}>
        <Text>Alchemy Liquor</Text>
    </View>
    <view style = {styles.body}>
        <p>Username: <TextInput placeholder='Username' value={text} onChangeText={onChangeText} /></p>
        <p>Password: <TextInput secureTextEntry={!showPassword} placeholder='' value={password} onChangeText={setPassword} /></p>
    </view>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
header:{
    color:'red',
    backgroundColor:'blue',
    height:'30px',
    borderRadius:'5px',
    justifyContent:'center',
    textAlign:'center',
    alignContent:'center',
    }
})