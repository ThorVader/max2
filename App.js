import { useState } from 'react'; 
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[enteredGoalText, setenteredGoalText]= useState(''); //use state left blank coz we dont have it yet. Its user input.
  
  const [enteredGoals, setEnteredGoals] = useState( [] ); //used to collect the list of goals/user input.

function goalInputHandler(enteredText) {
   setenteredGoalText(enteredText);
};// collecting user input as the user types

function addGoalHandler() {
  setEnteredGoals((currentEnteredGoals) => [
    ...currentEnteredGoals, enteredGoalText,]
)}; //fired when the button is clicked

return (
  <View style={styles.container}>
   <View style= {styles.inputContainer}>
    <TextInput style= {styles.takeText}placeholder='Your course goal.'
    onChangeText={goalInputHandler}>
      
    </TextInput>
    <Button title='Add goal' onPress={addGoalHandler}></Button>

     </View>
   <View>
     {enteredGoals.map((goal) => <Text style={styles.goalItem} key={goal}>{goal} </Text> )}
   </View>
  </View>
);
} 

const styles = StyleSheet.create({
  container: {
   padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingBottom: "10%",
    borderTopWidthnp: 1 
  },
  takeText: {
    borderWidth: 1,
    borderEndColor: "black",
    width: '80%',
    marginRight: "5%"
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white', 
  }
  });