import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
      color: '#fff',
        padding: 5,
      paddingTop: 50
    },
    card: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center',
      text: {
          color: '#aaa',
          textAlign: 'center',
          textAlignVertical: 'center'
      },
      margin: 10,
      backgroundColor: '#222',
      textAlignVertical: 'center',
      meta: {
        flex: 0.2,
        text: {
          color: '#fff'
        }
      }
    },
    controls: {
      flex: 0.1,
      text: {
        color: '#fff',
        backgroundColor: '#fff',
      }
    }
  });