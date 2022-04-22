import React from 'react';
import {Dimensions, View} from 'react-native';
import {List} from 'react-native-paper';
import {AddTaskButton} from '../Tabs/Task/BackLog/AddTaskButton';


const AccordionList = ({title = null, left = null, items}) => {
    const {width: windowWidth} = Dimensions.get('window');
    return (
        <List.Accordion
            title={title}
            left={left}
            titleStyle={{
                color: 'black',
            }}
            style={{
                backgroundColor: '#fff',
                paddingHorizontal: 0,
                height: 60,
            }}>
            <View style={{
                backgroundColor: '#fff',
                paddingLeft: title ? 0 :  windowWidth * 0.05
            }}>
                {items}
            </View>
            <AddTaskButton/>
        </List.Accordion>
    );
};

export default AccordionList;