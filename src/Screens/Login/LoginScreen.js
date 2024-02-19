import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../../redux/Action';
import DrawerNavigation from '../DrawerNavigator/DrawerNavigation';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    dispatch(authenticate(username, password));
    {isAuthenticated ? (
      navigation.navigate('DrawerNavigation')
    ) : (
      <Text>Invalid username or password.</Text>
    )}
  };

  return (
    <ImageBackground
      source={require('./background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Adresse email</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="qwerty@gmail.com"
              placeholderTextColor="#6b7280"
              value={username}
              onChangeText={setUsername}
              style={styles.inputControl}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Mot de passe</Text>
            <TextInput
              autoCorrect={false}
              placeholder="********"
              placeholderTextColor="#6b7280"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              style={styles.inputControl}
            />
          </View>

          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Se connecter</Text>
            </View>
          </TouchableOpacity>
          
        </View>
      </SafeAreaView>
    
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
  },
  form: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 50,
    borderRadius: 10,
  },
  input: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  message: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default LoginScreen;
