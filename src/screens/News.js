import React from 'react';
import {
  View,
  Text,
  AccessibilityInfo,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {news_articles} from '../articles';

class NewsScreen extends React.Component {
  state = {screenReaderEnabled: false};
  static navigationOptions = {
    headerTitle: () => (
      <Text accessibilityLabel="Wiadomości" accessibilityRole="header">
        News
      </Text>
    ),
  };

  componentDidMount() {
    AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      this.handleScreenReaderToggled,
    );
    AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled => {
      this.setState({screenReaderEnabled});
    });
  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      'screenReaderChanged',
      this.handleScreenReaderToggled,
    );
  }

  handleScreenReaderToggled = screenReaderEnabled => {
    this.setState({screenReaderEnabled});
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
    const isScreenReaderEnabled = this.state.screenReaderEnabled
      ? 'włączony'
      : 'wyłączony';
    return (
      <View style={styles.container}>
        <Text
          accessibilityRole="text"
          style={
            styles.screenReaderInfo
          }>{`Czytnik ekranu jest obecnie ${isScreenReaderEnabled}`}</Text>
        <FlatList
          data={news_articles}
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
  screenReaderInfo: {color: 'tomato', padding: 10},
});

export default NewsScreen;
