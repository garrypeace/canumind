import { View } from 'react-native';
import { BackCard } from './components/BackCard';
import { CardMeta } from './components/CardMeta';
import { Controls } from './components/Controls';
import { FrontCard } from './components/FrontCard';
import { styles } from './styles/globalStyles';

const App = () => {
  return (
    <View style={styles.container}>
      <FrontCard />
      <BackCard />
      <CardMeta />
      <Controls />
    </View>
  );
}

export default App;