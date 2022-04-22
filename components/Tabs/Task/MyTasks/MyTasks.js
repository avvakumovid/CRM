import React from 'react';
import {ScrollView} from 'react-native';
import TasksItem from './TasksItem';

const MyTasks = ({tasks, navigation}) => {
    const tasksView = tasks.map(t => <TasksItem key={Math.random()} name={t.name} description={t.description} navigation={navigation}/>)
    return (
        <ScrollView>
            {tasksView}
        </ScrollView>
    );
};

export default MyTasks;