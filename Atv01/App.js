import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import UserForm from './src/components/UserForm';
import UserList from './src/components/UserList';
import { styles } from './src/components/Styles/styles';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([

  ]);

  const handleRegister = () => {
    if (name.trim() && phone.trim()) {
      setUsers([...users, { name, phone }]);
      setName('');
      setPhone('');
    }
  };

  return (
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
  );
}