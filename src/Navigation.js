import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import NewsScreen from './screens/News';
import LifestyleScreen from './screens/Lifestyle';
import SportScreen from './screens/Sport';
import DetailsScreen from './screens/Details';

const NewsStack = createStackNavigator({
  News: NewsScreen,
  Details: DetailsScreen,
});

const SportStack = createStackNavigator({
  Sport: SportScreen,
  Details: DetailsScreen,
});

const LifestyleStack = createStackNavigator({
  Lifestyle: LifestyleScreen,
  Details: DetailsScreen,
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      News: NewsStack,
      Sport: SportStack,
      Lifestyle: LifestyleStack,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarAccessibilityLabel: getAccessibilityLabel(navigation),
      }),
    },
  ),
);

function getAccessibilityLabel(navigation) {
  const {routeName} = navigation.state;
  switch (routeName) {
    case 'News':
      return 'Wiadomości';
    case 'Sport':
      return 'Sport';
    case 'Lifestyle':
      return 'Życie i styl';
    default:
      return 'Przycisk nawigacji';
  }
}
