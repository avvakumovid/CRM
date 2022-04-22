import React from 'react';
import {ScrollView} from 'react-native';
import DialogsItem from './DialogsItem';

const Dialogs = ({navigation, dialogs}) => {
    const dialogsList = dialogs?.map(dialog => <DialogsItem key={dialog.id + Math.random()} navigation={navigation} dialog={dialog}/> )
    return (
        <ScrollView>
            {dialogsList}
        </ScrollView>
    );
};

export default Dialogs;