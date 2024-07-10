// https://reactnavigation.org/docs/bottom-tab-navigator

import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

import Bottom from './index';
import BottomOne from './bottomone';
import BottomTwo from './bottomtwo';

// https://www.youtube.com/watch?v=AP08wUBhpKM

// const { Navigator } = createBottomTabNavigator();

// export const BottomTabs = withLayoutContext<
// BottomTabNavigationOptions,
// typeof Navigator,
// TabNavigationState<ParamListBase>,
// BottomTabNavigationEventMap
// >(Navigator);

const BottomTabs = createBottomTabNavigator();

const Layout = () => {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen name="Bottom" component={Bottom} />
			<BottomTabs.Screen name="BottomOne" component={BottomOne} />
			<BottomTabs.Screen name="BottomTwo" component={BottomTwo} />
		</BottomTabs.Navigator>
	);
};

export default Layout;
