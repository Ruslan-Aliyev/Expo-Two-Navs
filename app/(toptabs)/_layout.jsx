// https://reactnavigation.org/docs/material-top-tab-navigator/

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTabs = createMaterialTopTabNavigator();

import Top from './index';
import TopOne from './topone';
import TopTwo from './toptwo';

const Layout = () => {
	return (
		<TopTabs.Navigator>
			<TopTabs.Screen name="Top" component={Top} />
			<TopTabs.Screen name="TopOne" component={TopOne} />
			<TopTabs.Screen name="TopTwo" component={TopTwo} />
		</TopTabs.Navigator>
	);
};

export default Layout;
