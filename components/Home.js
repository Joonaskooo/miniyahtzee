import { useState} from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from './Header';
import Footer from './Footer';
import { 
    NBR_OF_DICES, 
    NBR_OF_THROWS,
    MIN_SPOT,
    MAX_SPOT,
    BONUS_POINTS_LIMIT,
    BONUS_POINTS } from '../constants/Game'; 
import styles from '../style/style';

export default function Home({ navigation }) {

    const [playerName, setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

  return (
    <>
      <Header />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginTop: 100 }}>
        <MaterialCommunityIcons
          name="information"
          size={90}
          color="red"
        />
        {!hasPlayerName ?
          <>
            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10, color: 'darkblue' }}>
              For scoreboard, enter your name...
            </Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 20 }}
              onChangeText={setPlayerName}
              autoFocus={true}
              placeholder="Your Name"
              placeholderTextColor="gray"
            />
            <Pressable
              style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
              onPress={() => handlePlayerName(playerName)}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>OK</Text>
            </Pressable>
          </>
          :
          <>
            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10, fontWeight: 'bold', color: 'darkgreen' }}>
              Rules of the game
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 14, marginBottom: 20, color: 'gray' }} multiline={true}>
              THE GAME: Upper section of the classic Yahtzee 
              dice game. You have {NBR_OF_DICES} dices and 
              for every dice, you have {NBR_OF_THROWS} 
              throws. After each throw, you can keep dices in 
              order to get the same dice spot counts as many as 
              possible. At the end of the turn, you must select 
              your points from {MIN_SPOT} to {MAX_SPOT}. 
              The game ends when all points have been selected. 
              The order for selecting those is free.
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 16, color: 'darkblue' }}>Good luck, {playerName}</Text>
            <Pressable
              style={{ backgroundColor: 'red', padding: 15, borderRadius: 8, marginTop: 20 }}
              onPress={() => navigation.navigate('Gameboard', { player: playerName })}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>PLAY</Text>
            </Pressable>
          </>
        }
      </View>
      <Footer />
    </>
  )
}