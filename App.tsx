import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const groceries: {
    name: string;
    quantity: string;
  }[] = [
    {name: 'Broccoli', quantity: '8oz'},
    {name: 'Pasta', quantity: '12oz'},
    {name: 'Crushed Tomatoes', quantity: '22oz'},
    {name: 'Basil', quantity: '4oz'},
    {name: 'Garlic', quantity: '3oz'},
    {name: 'Baguette', quantity: '1 Large'},
  ];

  return (
    <View style={styles.container}>
      <View style={ styles.headerSafe }></View>
      <Text style={styles.headerText}>My React Native Grocery List</Text>
      <FlatList
        data={ groceries }
        keyExtractor={ grocery => grocery.name }
        renderItem={({item}) => {
          return <Text style={ styles.listItem }>{ item.name } - Quantity: { item.quantity }</Text>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerSafe: {
    height: 50,
    width: '100%',
  },
  headerText: {
    fontFamily: 'Times New Roman',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
  listItem: {
    paddingVertical: 5,
  }
});
