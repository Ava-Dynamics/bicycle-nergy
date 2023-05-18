/// <reference types="nativewind/types" />

import React from 'react';
import NavRouter from './src/components/navigation/NavRouter';
import 'react-native-gesture-handler';
// import { NativeWindStyleSheet } from 'nativewind';

// NativeWindStyleSheet.setOutput({
//   default:'native'
// })

export default function App() {
  return (
    <NavRouter/>
  );
}
