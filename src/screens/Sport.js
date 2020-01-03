import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {sport_articles} from '../articles';

class SportScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <Text accessibilityLabel="Sport" accessibilityRole="header">
        Sport
      </Text>
    ),
  };

  renderItem = item => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        style={styles.touchable}
        onPress={() => this.openDetails(item)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  openDetails = item => {
    this.props.navigation.navigate('Details', {
      item,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={sport_articles}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  touchable: {padding: 10, borderColor: 'grey', borderBottomWidth: 1},
});

export default SportScreen;
