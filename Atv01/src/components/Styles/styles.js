import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'left',
    color: '#333',
  },
  inputContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  input: {
    marginRight: 15,
    marginLeft: 15,
    height: 40,
    width: 240,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  button: {
    backgroundColor: '#a9c9ff',
    height: 40,
    width: 240,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 15,
    borderColor : '#000',
    borderWidth: 1,

  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  userPhone: {
    color: '#666',
  },
  line: {
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});