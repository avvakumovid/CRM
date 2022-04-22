import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyTasks from './MyTasks';
import Backlog from '../BackLog/Backlog';


const TopTab = createMaterialTopTabNavigator();
const Tasks = () => {
    const tasks = [
        {
            id: 1,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 2,
            name: 'Название задачии',
            description: 'Короткое описание'
        },
        {
            id: 3,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 4,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 5,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 6,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 7,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 8,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 9,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 10,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 11,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 12,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 13,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 14,
            name: 'Название задачи',
            description: 'Короткое описание'
        },
        {
            id: 15,
            name: 'Название задачи',
            description: 'Короткое описание'
        },

    ]
    return (
        <TopTab.Navigator>
            <TopTab.Screen
                name="Бэклог"
            >
                {props => <Backlog {...props}/>}
            </TopTab.Screen>
            <TopTab.Screen
                name="Назначенные мне"
            >
                {props => <MyTasks {...props} tasks={tasks}/>}
            </TopTab.Screen>
        </TopTab.Navigator>
    );
};

export default Tasks;