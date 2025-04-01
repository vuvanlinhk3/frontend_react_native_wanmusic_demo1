import React, { createContext, useContext, useState } from 'react';

interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
  day: string;
  month: string;
  year: string;
  gender: string;
  name: string;
  province: string;
  district: string;
  musicPreferences: string[];
}

interface SignUpContextType {
  signUpData: SignUpData;
  updateSignUpData: (data: Partial<SignUpData>) => void;
}

const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

export const SignUpProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: '',
    password: '',
    confirmPassword: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    name: '',
    province: '',
    district: '',
    musicPreferences: [],
  });

  const updateSignUpData = (data: Partial<SignUpData>) => {
    setSignUpData((prev) => ({ ...prev, ...data }));
  };

  return (
    <SignUpContext.Provider value={{ signUpData, updateSignUpData }}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error('useSignUp must be used within a SignUpProvider');
  }
  return context;
};