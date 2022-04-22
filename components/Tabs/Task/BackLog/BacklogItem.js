import React from "react";
import { Image, Text, View } from "react-native";

const BacklogItem = ({
                         midContent, rightContent = undefined,
                         description = undefined, width = '100%',
                         paddingRight = 10, press
                     }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: 60,
                backgroundColor: '#fff',
                width: width,
                paddingRight: paddingRight
            }}
            onPress={press}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: 10
                    }}
                    source={require('../../../../assets/box.png')}/>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start'
                    }}>
                    <Text>{midContent}</Text>
                    {description && <Text style={{color: '#ccc'}}>{description}</Text>}
                </View>
            </View>
            <Text>{rightContent}</Text>
        </View>
    );
};

export default BacklogItem;
