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
import LinearGradient from 'react-native-linear-gradient'; // Gradient
import { NavigationProps } from '@src/types/index'; // Import kiểu
import logo from '../../assets/images/logoms.png';
import googleLogo from '../../assets/images/google-logo.png'; // Logo Google

const LoginScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProps['navigation']>(); // Áp dụng kiểu

  // Ẩn thanh điều hướng
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Ẩn navigation bar
    });
  }, [navigation]);

  const handleSubmit = () => {
    if (!email || !password) {
      console.log('Email and password are required');
      return;
    }
    console.log({ email, password });
  };

  const handlePhoneLogin = () => {
    // Logic cho đăng nhập bằng số điện thoại (có thể điều hướng đến màn hình nhập số điện thoại)
    console.log('Tiếp tục bằng số điện thoại');
    // Ví dụ: navigation.navigate('PhoneLogin');
  };

  return (
    <LinearGradient
      colors={['#1a0033', '#004d40']} // Gradient từ tím đậm đến xanh đậm
      style={styles.loginContainer}
    >
      <SafeAreaView style={styles.innerContainer}>
        {/* Back Arrow */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        {/* Logo */}
        <View style={styles.loginLogo}>
          <Image source={logo} style={styles.logoImage} />
          <Text style={styles.title}>Đăng nhập</Text>
        </View>

        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email hoặc Tên người dùng</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mật khẩu</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#aaa"
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
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>

        {/* Forgot Password & Sign Up Links */}
        <Text style={styles.linkText}>Bạn quên mật khẩu?</Text>
        <Text style={styles.linkText}>
          Chưa có tài khoản?{' '}
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('SignUp')}
          >
            Đăng ký
          </Text>
        </Text>

        {/* Phone Login Button */}
        <TouchableOpacity style={styles.phoneButton} onPress={handlePhoneLogin}>
          <Icon name="phone" size={24} color="#fff" style={styles.phoneIcon} />
          <Text style={styles.phoneButtonText}>Tiếp tục bằng số điện thoại</Text>
        </TouchableOpacity>

        {/* Google Login Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image source={googleLogo} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Tiếp tục bằng Google</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Nền mờ cho nút back
    borderRadius: 20,
    padding: 8,
  },
  loginLogo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 15,
    letterSpacing: 2,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Nền mờ cho input
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  loginButton: {
    backgroundColor: '#00cc99', // Màu xanh của nút LOGIN
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 25,
    shadowColor: '#00cc99',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  linkText: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 14,
    fontWeight: '400',
    opacity: 0.9,
  },
  signUpText: {
    color: '#00cc99', // Màu xanh cho "Sign up for WebMusic"
    fontWeight: '600',
  },
  phoneButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Nền mờ cho nút Phone
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between', // Đẩy icon và text ra hai bên
    marginTop: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  phoneIcon: {
    marginLeft: 15, // Đẩy icon sát lề trái
  },
  phoneButtonText: {
    flex: 1, // Chiếm toàn bộ không gian còn lại
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center', // Căn giữa chữ
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Nền mờ cho nút Google
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between', // Đẩy icon và text ra hai bên
    marginTop: 15, // Khoảng cách với nút Phone
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginLeft: 15, // Đẩy icon sát lề trái, thẳng hàng với icon Phone
  },
  googleButtonText: {
    flex: 1, // Chiếm toàn bộ không gian còn lại
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center', // Căn giữa chữ
  },
});

export default LoginScreen;