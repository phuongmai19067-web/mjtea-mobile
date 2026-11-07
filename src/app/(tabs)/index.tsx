import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo-brown.png')} style={styles.logo} />
        <View>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.title}>Welcome to MJtea</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: Spacing.md },
  header: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  logo: { width: 52, height: 52, borderRadius: 14 },
  greeting: { fontSize: 14, color: Colors.textMuted },
  title: { fontSize: 24, fontWeight: '700', color: Colors.text },
});
