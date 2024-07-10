import {Stack} from 'expo-router';

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="(toptabs)" options={{headerShown: false}} />
			<Stack.Screen name="(bottomtabs)" options={{headerShown: false}} />
		</Stack>
	);
};

export default Layout;
