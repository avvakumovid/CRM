import React, {useRef, useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import SimplePaginationDot from './SimplePaginationDot';


const {width: windowWidth} = Dimensions.get('window');


const INITIAL_INDEX = 0;
export default function ReferencesCarousel({data, title, subTitle, ...props}) {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

    function handleCarouselScrollEnd(item, index) {
        setCurrentIndex(index);
    }

    function renderItem({item, index}) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => {
                    if (index === currentIndex) {
                        console.log('navigate')
                    }
                    carouselRef.current.scrollToIndex(index);
                }}>
                <Text style={{fontSize: 12}}>{subTitle}</Text>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>{title}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{fontSize: 12, color: 'grey'}}>{item.date}</Text>
                    <Text style={{fontSize: 12, color: 'grey'}}>Статус</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{maxWidth: 0.3 * windowWidth}}>{item.title}</Text>
                    <Text style={{fontSize: 12, maxWidth: 0.3 * windowWidth}}>{item.status}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.containerCarousel}>
            <Carousel
                style={styles.carousel}
                data={data}
                renderItem={renderItem}
                itemWidth={0.6 * windowWidth}
                inActiveOpacity={0.7}
                containerWidth={windowWidth - 80}
                onScrollEnd={handleCarouselScrollEnd}
                ref={carouselRef}
            />
            <SimplePaginationDot currentIndex={currentIndex} length={data.length}/>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCarousel: {
        paddingVertical: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
    },
    carousel: {},
    item: {
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        padding: 10,
    },
});
