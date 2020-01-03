import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {lifestyle_articles} from '../articles';

class LifestyleScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => (
      <Text accessibilityLabel="Życie i styl" accessibilityRole="header">
        Lifestyle
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
          data={lifestyle_articles}
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

export default LifestyleScreen;
