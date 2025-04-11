import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import UserForm from './src/components/UserForm';
import UserList from './src/components/UserList';
import { styles } from './src/Styles/styles';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([
    { name: 'João da Silva', phone: '61 9090-9099' }
  ]);

  const handleRegister = () => {
    if (name.trim() && phone.trim()) {
      setUsers([...users, { name, phone }]);
      setName('');
      setPhone('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <UserForm
            name={name}
            phone={phone}
            onNameChange={setName}
            onPhoneChange={setPhone}
            onRegister={handleRegister}
          />
          
          <UserList users={users} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}