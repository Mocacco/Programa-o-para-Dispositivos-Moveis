import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { labels } from './labels';
import { styles } from './Styles/styles';

const UserList = ({ users }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={[styles.title, { fontSize: 20 }]}>{labels.userListTitle}</Text>
      
      <ScrollView>
        {users.map((user, index) => (
          <View key={index} style={styles.userCard}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userPhone}>{user.phone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserList;