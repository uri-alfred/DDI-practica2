import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { styles } from './TabNavigation.styles';
import StackNavigation from '../StackNavigation/StackNavigation';
import StackFavoritos from '../StackNavigation/StackFavoritos';
import StackAccount from '../StackNavigation/StackAccount';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName='StackNavigation'
            screenOptions={({ route }) => ({
                tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false
            })}
        >
            <Tab.Screen
                name='Account'
                component={StackAccount}
                options={{
                    title: '',
                    tabBarLabel: '',
                    // headerStyle: {
                    //     backgroundColor: '#000'
                    // }
                    headerTransparent: true
                }}
            />
            <Tab.Screen
                name='StackNavigation'
                component={StackNavigation}
                options={{
                    title: '',
                    tabBarIcon: () => <Image
                          source={require('../../../assets/logo-button.png')}
                          style={{ width: 90, height: 90, top: -10 }}
                        />,
                    tabBarLabel: '',
                    headerTransparent: true
                }}
            />
            <Tab.Screen
                name='StackFavoritos'
                component={StackFavoritos}
                options={{
                    title: '',
                    tabBarLabel: '',
                    headerTransparent: true
                }}
            />
        </Tab.Navigator>
    )
}

const setIcon = (route, routeStatus) => {
    let iconName = '';
    let color = '#79B547';

    if (routeStatus.focused) {
        color = '#fff';
    }

    if (route.name === 'StackFavoritos') {
        iconName = 'heart';
    }
    if (route.name === 'Account') {
        iconName = 'user';

    }

    return <AwesomeIcon name={iconName} color={color} style={styles.icon} />
}