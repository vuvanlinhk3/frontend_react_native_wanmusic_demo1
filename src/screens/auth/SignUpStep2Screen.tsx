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

// Định nghĩa kiểu cho navigation
type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const SignUpStep2Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { signUpData, updateSignUpData } = useSignUp();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleNext = () => {
    if (!signUpData.day || !signUpData.month || !signUpData.year) {
      console.log('Please fill in all fields');
      return;
    }
    navigation.navigate('SignUpStep3');
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

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Ngày sinh của bạn là gì?</Text>
        </View>

        {/* Date Input */}
        <View style={styles.dateContainer}>
          <TextInput
            style={styles.dateInput}
            placeholder="Ngày"
            placeholderTextColor="#aaa"
            value={signUpData.day}
            onChangeText={(text) => updateSignUpData({ day: text })}
            keyboardType="numeric"
            maxLength={2}
          />
          <TextInput
            style={styles.dateInput}
            placeholder="Tháng"
            placeholderTextColor="#aaa"
            value={signUpData.month}
            onChangeText={(text) => updateSignUpData({ month: text })}
            keyboardType="numeric"
            maxLength={2}
          />
          <TextInput
            style={styles.dateInput}
            placeholder="Năm"
            placeholderTextColor="#aaa"
            value={signUpData.year}
            onChangeText={(text) => updateSignUpData({ year: text })}
            keyboardType="numeric"
            maxLength={4}
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Tiếp</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  dateInput: {
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
    width: '30%',
    textAlign: 'center',
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
});

export default SignUpStep2Screen;