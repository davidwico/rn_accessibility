import React from 'react';
import {ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <Text
        accessibilityLabel="Szczegóły wiadomości"
        accessibilityRole="header">
        Details
      </Text>
    ),
  };

  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <ScrollView style={styles.container}>
        <Text accessibilityRole="text">{item.date}</Text>
        <Text accessibilityRole="text" style={styles.header}>
          {item.title}
        </Text>
        <Text accessibilityRole="text">{item.article}</Text>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Wróć do listy wiadomości"
          style={styles.button}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {fontSize: 16, marginVertical: 10},
  button: {
    backgroundColor: 'tomato',
    borderRadius: 4,
    padding: 10,
    margin: 20,
    alignItems: 'center',
  },
  buttonText: {color: '#fff'},
});

export default DetailsScreen;
