import { StyleSheet, View } from 'react-native';

export function Divider() {
  return <View style={styles.base} />;
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
});
