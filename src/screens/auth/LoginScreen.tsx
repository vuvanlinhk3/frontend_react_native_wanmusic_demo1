import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@src/types/index'; // Import kiểu
import logo from '../../assets/images/logoms.png';

const LoginScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation<NavigationProps['navigation']>(); // Áp dụng kiểu

  const handleSubmit = () => {
    if (!email || !password) {
      console.log('Email and password are required');
      return;
    }
    console.log({ email, password, rememberMe });
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.loginBox}>
        <View style={styles.loginLogo}>
          <View style={styles.dLogo}>
            <Image source={logo} style={styles.logoImage} />
          </View>
          <Text style={styles.title}>Login</Text>
        </View>

        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Icon name="email" size={24} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Icon name="lock" size={24} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? 'visibility-off' : 'visibility'}
              size={24}
              color="#00C4B4"
            />
          </TouchableOpacity>
        </View>

        {/* Remember Me & Forgot Password */}
        <View style={styles.options}>
          <View style={styles.rememberMe}>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={styles.checkbox}
            >
              {rememberMe && <View style={styles.checkboxInner} />}
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotLink}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Alternative Login Options */}
        <View style={styles.alternativeLogin}>
          <TouchableOpacity style={styles.googleButton}>
            <Icon name="google" size={24} color="#00C4B4" />
            <Text style={styles.altButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.phoneButton}>
            <Icon name="phone" size={24} color="#00C4B4" />
            <Text style={styles.altButtonText}>Sign in with Phone</Text>
          </TouchableOpacity>
        </View>

        {/* Register Link */}
        <View style={styles.registerLink}>
          <Text style={styles.registerText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Sign up now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles giữ nguyên như trước
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#F1F8E9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.1,
    shadowRadius: 40,
    elevation: 10,
    width: '100%',
    maxWidth: 420,
    borderWidth: 1,
    borderColor: 'rgba(0, 196, 180, 0.2)',
  },
  loginLogo: {
    alignItems: 'center',
    marginBottom: 35,
  },
  dLogo: {
    width: 48,
    height: 48,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    color: '#00C4B4',
    fontSize: 28,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },
  icon: {
    color: '#00C4B4',
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 14,
    borderWidth: 2,
    borderColor: '#B2EBF2',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#E0F7FA',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#0288D1',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#0288D1',
    borderRadius: 2,
  },
  rememberText: {
    color: '#0288D1',
    fontSize: 14,
  },
  forgotLink: {
    color: '#0288D1',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#00C4B4',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  alternativeLogin: {
    marginTop: 25,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderWidth: 2,
    borderColor: '#B2EBF2',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderWidth: 2,
    borderColor: '#B2EBF2',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  altButtonText: {
    color: '#00C4B4',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 12,
  },
  registerLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  registerText: {
    color: '#0288D1',
    fontSize: 14,
  },
  link: {
    color: '#00C4B4',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LoginScreen;