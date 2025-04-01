import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSignUp } from '../../context/SignUpContext';
import { AuthStackParamList } from '../../types/navigation';

// Định nghĩa kiểu cho navigation
type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const SignUpStep4Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { signUpData, updateSignUpData } = useSignUp();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSignUp = () => {
    if (!signUpData.name) {
      console.log('Please fill in the name field');
      return;
    }
    console.log('Sign Up Data:', signUpData);
    // Gửi dữ liệu đăng ký lên server hoặc xử lý logic đăng ký
    navigation.navigate('Login'); // Điều hướng về màn hình đăng nhập sau khi đăng ký thành công
  };

  return (
    <LinearGradient colors={['#1a0033', '#004d40']} style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        {/* Back Arrow */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Tên của bạn là gì?</Text>

        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Tên"
            placeholderTextColor="#aaa"
            value={signUpData.name}
            onChangeText={(text) => updateSignUpData({ name: text })}
          />
        </View>

        {/* Additional Info */}
        <Text style={styles.infoText}>
          Thông tin này sẽ nằm trong hồ sơ Wan Music của bạn.
        </Text>
        <Text style={styles.infoText}>
          Bằng việc nhấn "tạo tài khoản", bạn đồng ý với{' '}
          <Text style={styles.linkText}>Điều khoản sử dụng</Text> và{' '}
          <Text style={styles.linkText}>Chính sách quyền riêng tư</Text> của
          Webmusic.
        </Text>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Tạo tài khoản</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 8,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
  infoText: {
    color: '#fff',
    fontSize: 14,
    // textAlign: 'center',
    marginVertical: 10,
    opacity: 0.9,
  },
  linkText: {
    color: '#00cc99',
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: '#00cc99',
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
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default SignUpStep4Screen;