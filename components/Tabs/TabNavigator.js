import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Chats from './Chats';
import Tasks from './Task/MyTasks/Tasks';
import MapsNavigation from '../Maps/MapsNavigation';
import GoToMaps from '../Maps/GoToMaps';


const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }>
            <BottomTab.Screen
                name="Chats"
                component={Chats}
                options={{
                    title: 'Чаты',
                    tabBarIcon: ({color, size}) => {
                        let iconName = 'chatbubble-outline';
                        return <Ionicons name={iconName} size={size} color={color}/>;

                    },
                    tabBarInactiveTintColor: 'gray',
                }}
            />
            <BottomTab.Screen
                name="Tasks"
                component={Tasks}
                options={{
                    title: 'Задачи',
                    tabBarIcon: ({color, size}) => {
                        let iconName = 'tasks';
                        return <FontAwesome name={iconName} size={size} color={color}/>;

                    },
                    tabBarInactiveTintColor: 'gray',
                }}
            />
            <BottomTab.Screen
                name="Maps"
                options={{
                    title: 'Карты',
                    tabBarIcon: ({color, size}) => {
                        let iconName = 'map-marker';
                        return <FontAwesome name={iconName} size={size} color={color}/>;

                    },
                    tabBarInactiveTintColor: 'gray',
                }}
            >
              {props => <GoToMaps {...props}/>}
            </BottomTab.Screen>
        </BottomTab.Navigator>
    );
};

export default TabNavigator;
