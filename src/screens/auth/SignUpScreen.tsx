import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSignUp } from '../../context/SignUpContext';
import { AuthStackParamList } from '../../types/navigation';
import logo from '../../assets/images/logoms.png';
import googleLogo from '../../assets/images/google-logo.png';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { signUpData, updateSignUpData } = useSignUp();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleNext = () => {
    if (!signUpData.email) {
      console.log('Please enter an email or username');
      return;
    }
    navigation.navigate('SignUpStep1');
  };

  const handlePhoneSignUp = () => {
    console.log('Tiếp tục bằng số điện thoại');
  };

  return (
    <LinearGradient colors={['#1a0033', '#004d40']} style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Icon name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImage} />
          <Text style={styles.title}>SIGN UP</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email or Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Email or Username"
            placeholderTextColor="#aaa"
            value={signUpData.email}
            onChangeText={(text) => updateSignUpData({ email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>

        <Text style={styles.linkText}>
          Đã có tài khoản?{' '}
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('Login')}
          >
            Đăng nhập
          </Text>
        </Text>

        <TouchableOpacity style={styles.phoneButton} onPress={handlePhoneSignUp}>
          <Icon name="phone" size={24} color="#fff" style={styles.phoneIcon} />
          <Text style={styles.phoneButtonText}>Tiếp tục bằng số điện thoại</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <Image source={googleLogo} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Tiếp tục bằng Google</Text>
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
  logoContainer: {
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
  nextButton: {
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
  nextButtonText: {
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
    color: '#00cc99',
    fontWeight: '600',
  },
  phoneButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginLeft: 15,
  },
  phoneButtonText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
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
    marginLeft: 15,
  },
  googleButtonText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default SignUpScreen;