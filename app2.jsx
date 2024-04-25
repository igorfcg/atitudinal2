import react, {useState} from 'react';
import {Stylesheet, View, Text, TextInpuwt, Button, Image, TouchableOpacity} from 'react-native';
import styles from './src/constants/style';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
    const [text, setText] = useState('');

    const handleTextChange = newText =>{
      setText(newText);
    };

  return (
    <View style={styles.container}>
      <View >
          <Image   source={require('./src/assets/aja.jpeg')} style={styles.image}/>
            </View>
    <Text style={styles.texth1
    }>  create to your account</Text>
<View>
      <TextInput
          style={styles.input}
          placeholder="email"
          value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="confirmar senha"
          value={text}
        />
      <Button
      style={styles.button}
 title="Press me"
 onPress={() => Alert.alert('Simple Button pressed')}
/>
      </View>
    </View>
  )
}