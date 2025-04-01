import React from 'react';
import {
  View,
  Text,
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

const SignUpStep3Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { signUpData, updateSignUpData } = useSignUp();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleNext = () => {
    if (!signUpData.gender) {
      console.log('Please select a gender');
      return;
    }
    navigation.navigate('SignUpStep4');
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
          <Text style={styles.title}>Giới tính của bạn là gì?</Text>
        </View>

        {/* Gender Selection */}
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              signUpData.gender === 'Nam' && styles.genderButtonSelected,
            ]}
            onPress={() => updateSignUpData({ gender: 'Nam' })}
          >
            <Text style={styles.genderButtonText}>Nam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              signUpData.gender === 'Nữ' && styles.genderButtonSelected,
            ]}
            onPress={() => updateSignUpData({ gender: 'Nữ' })}
          >
            <Text style={styles.genderButtonText}>Nữ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              signUpData.gender === 'Khác' && styles.genderButtonSelected,
            ]}
            onPress={() => updateSignUpData({ gender: 'Khác' })}
          >
            <Text style={styles.genderButtonText}>Khác</Text>
          </TouchableOpacity>
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
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  genderButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    width: '30%',
    alignItems: 'center',
  },
  genderButtonSelected: {
    backgroundColor: '#00cc99',
    borderColor: '#00cc99',
  },
  genderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
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

export default SignUpStep3Screen;