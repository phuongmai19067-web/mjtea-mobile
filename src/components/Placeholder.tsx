import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';

export default function Placeholder({ label }: { label: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label} – coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  text: { fontSize: 16, color: Colors.textMuted },
});
