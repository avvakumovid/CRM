import React from 'react';

import {View, StyleSheet} from 'react-native';

function genCircleStyle(size) {
    if (!size) {
        return {};
    }
    return {width: size, height: size, borderRadius: size / 2};
}

function Dot({isActive, color, activeDotSize, inActiveDotSize, dotSeparator}) {
    const processedActiveDotStyle = [
        styles.activeDot,
        {
            backgroundColor: 'white',
            borderColor: 'white',
            marginHorizontal: dotSeparator / 2,
            ...genCircleStyle(activeDotSize),
        },
    ];
    const processedInActiveDotStyle = [
        styles.inActiveDot,
        {
            backgroundColor: '#dbdbdb',
            borderColor: color,
            marginHorizontal: dotSeparator / 2,
            ...genCircleStyle(inActiveDotSize),
        },
    ];
    return (
        <View
            style={[
                styles.baseDot,
                isActive ? processedActiveDotStyle : processedInActiveDotStyle,
            ]}
        />
    );
}

export default function SimplePaginationDot(props) {
    const {
        style,
        length,
        currentIndex = 0,
        color = '#dbdbdb',
        activeDotSize = 10,
        inActiveDotSize = 8,
        dotSeparator = 10,
    } = props;

    function renderItem(item, index) {
        return (
            <Dot
                key={index}
                isActive={index === currentIndex}
                color={color}
                activeDotSize={activeDotSize}
                inActiveDotSize={inActiveDotSize}
                dotSeparator={dotSeparator}
            />
        );
    }

    return (
        <View style={[styles.container, style]}>
            {Array(length).fill(0).map(renderItem)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cccccc',
        flexDirection: 'row',
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        marginTop: 10,
    },
    baseDot: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dbdbdb',
    },
    activeDot: {
        backgroundColor: 'white',
    },
    inActiveDot: {
        backgroundColor: 'white',
    },
});