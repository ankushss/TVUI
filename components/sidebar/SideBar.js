import * as React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
  TabActions,
} from '@react-navigation/native';
import BackgroundView from '../BackgroundView';
import Glass from '../Glass';

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const {state, navigation, descriptors} = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <BackgroundView>
        <View style={styles.container}>
          <View style={styles.sideBarContainer}>
            <Glass>
              <View style={styles.sideBarInnerContainer}>
                {state.routes.map((route, index) => (
                  <TouchableOpacity
                    key={route.key}
                    onPress={() => {
                      const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                      });

                      if (!event.defaultPrevented) {
                        navigation.dispatch({
                          ...TabActions.jumpTo(route.name),
                          target: state.key,
                        });
                      }
                    }}>
                    <View
                      style={{
                        ...styles.menu,
                        backgroundColor:
                          index == state.index ? '#4b81a5' : 'transparent',
                      }}>
                      <Text style={styles.text}>
                        {descriptors[route.key].options.title || route.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </Glass>
          </View>
          <View style={styles.contentContainer}>
            {descriptors[state.routes[state.index].key].render()}
          </View>
        </View>
      </BackgroundView>
    </NavigationHelpersContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sideBarContainer: {
    width: '24%',
    marginVertical: 14,
    marginHorizontal: 14,
  },
  sideBarInnerContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 14,
    paddingRight: 14,
  },
  menu: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 2,
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
});

export const createSidebarNavigator = createNavigatorFactory(TabNavigator);
