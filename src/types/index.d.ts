import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Định nghĩa danh sách các màn hình và tham số (nếu có)
export type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  // Thêm các màn hình khác nếu cần
};

// Kiểu cho navigation props
export type NavigationProps = NativeStackScreenProps<RootStackParamList>;