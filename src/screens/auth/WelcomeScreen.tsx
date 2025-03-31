import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Gradient
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@src/types/index'; // Import kiểu
import logo from '../../assets/images/logoms.png'; // Logo

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps['navigation']>(); // Áp dụng kiểu

  // Ẩn thanh điều hướng
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Ẩn navigation bar
    });
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#1a0033', '#004d40']} // Gradient từ tím đậm đến xanh đậm
      style={styles.welcomeContainer}
    >
      <SafeAreaView style={styles.innerContainer}>
        {/* Logo và Tiêu đề */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImage} />
          <Text style={styles.title}>Wan Music</Text>
        </View>

        {/* Nút Đăng ký miễn phí */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('SignUp')} // Điều hướng đến màn hình đăng ký
        >
          <Text style={styles.registerButtonText}>Đăng ký miễn phí</Text>
        </TouchableOpacity>

        {/* Nút Đăng nhập */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')} // Điều hướng đến màn hình đăng nhập
        >
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 100, // Khoảng cách lớn giữa logo và nút
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 15,
    letterSpacing: 2,
  },
  registerButton: {
    backgroundColor: '#00cc99', // Màu xanh của nút
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#00cc99',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    width: '80%', // Độ rộng nút
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  loginButton: {
    backgroundColor: 'transparent', // Nền trong suốt
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)', // Viền trắng mờ
    width: '80%', // Độ rộng nút
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default WelcomeScreen;