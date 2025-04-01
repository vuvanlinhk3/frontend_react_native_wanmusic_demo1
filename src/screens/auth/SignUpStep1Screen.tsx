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

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const SignUpStep1Screen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { signUpData, updateSignUpData } = useSignUp();
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState(signUpData.password || '');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Password validation logic
  const isLengthValid = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const hasNoSpaces = !/\s/.test(password);
  const hasNumber = /\d/.test(password);
  const hasNoAccents = !/[àáâãäåèéêëìíîïòóôõöùúûüýÿ]/.test(password.toLowerCase());

  const isPasswordValid = isLengthValid && hasSpecialChar && hasNoSpaces && hasNumber && hasNoAccents;

  const handleNext = () => {
    if (!isPasswordValid) {
      console.log('Password does not meet all requirements');
      return;
    }
    updateSignUpData({ password });
    navigation.navigate('SignUpStep2');
  };

  return (
    <LinearGradient colors={['#1a0033', '#004d40']} style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Tạo mật khẩu</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={(text) => setPassword(text)}
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

        <View style={styles.requirementsContainer}>
          <Text style={styles.requirementsTitle}>Your password must contain at least:</Text>
          <View style={styles.requirementItem}>
            <Icon
              name={isLengthValid ? 'check-circle' : 'radio-button-unchecked'}
              size={20}
              color={isLengthValid ? '#00cc99' : '#aaa'}
            />
            <Text style={styles.requirementText}>8 characters</Text>
          </View>
          <View style={styles.requirementItem}>
            <Icon
              name={hasSpecialChar ? 'check-circle' : 'radio-button-unchecked'}
              size={20}
              color={hasSpecialChar ? '#00cc99' : '#aaa'}
            />
            <Text style={styles.requirementText}>1 special character (example: # ? ! @)</Text>
          </View>
          <View style={styles.requirementItem}>
            <Icon
              name={hasNoSpaces ? 'check-circle' : 'radio-button-unchecked'}
              size={20}
              color={hasNoSpaces ? '#00cc99' : '#aaa'}
            />
            <Text style={styles.requirementText}>No spaces</Text>
          </View>
          <View style={styles.requirementItem}>
            <Icon
              name={hasNumber ? 'check-circle' : 'radio-button-unchecked'}
              size={20}
              color={hasNumber ? '#00cc99' : '#aaa'}
            />
            <Text style={styles.requirementText}>1 number</Text>
          </View>
          <View style={styles.requirementItem}>
            <Icon
              name={hasNoAccents ? 'check-circle' : 'radio-button-unchecked'}
              size={20}
              color={hasNoAccents ? '#00cc99' : '#aaa'}
            />
            <Text style={styles.requirementText}>No accent characters</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>NEXT</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 40,
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
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  requirementsContainer: {
    marginBottom: 25,
  },
  requirementsTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  requirementText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
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

export default SignUpStep1Screen;