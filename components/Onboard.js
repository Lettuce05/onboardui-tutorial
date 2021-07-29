import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from "../assets/colors/colors";
import {LinearGradient} from 'expo-linear-gradient';

const data = [
    {
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: require('../assets/images/Onboard1.png'),
      bg: '#59b2ab',
    },
    {
      title: 'Stay on top of your education',
      text: 'Reduce your stress, increase your productivity',
      image: require('../assets/images/Onboard2.png'),
      bg: '#febe29',
    },
    {
      title: 'Spend more time doing the things you love',
      text: "Get started within five minutes",
      image: require('../assets/images/Onboard3.png'),
      bg: '#22bcb5',
    },
];

function Onboard({handleDone}) {
    const renderItem = ({item}) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image}/>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        )
    }
    const keyExtractor = (item) => item.title;

    const renderDoneButton = () => {
        return (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#a5c8ff', '#23286b']} style={styles.doneButtonWrapper}>
                <Text style={styles.doneButtonText}>
                    Done
                </Text>
            </LinearGradient>
        );
    }

    const renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        );
    }

    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        );
    }

    return (
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          showPrevButton
          data={data}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          onDone={handleDone}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
        marginBottom: 150
    },
    image: {
        marginVertical: 60
    },
    title: {
        fontSize: 24,
        color: colors.black,
        textAlign: "center",
        fontFamily: "OpenSans-Bold",
        marginHorizontal: 60
    },
    text: {
        fontSize: 14,
        color: colors.gray,
        textAlign: "center",
        fontFamily: "OpenSans-SemiBold",
        marginHorizontal: 60,
        marginTop: 20
    },
    leftTextWrapper: {
        width: 40,
        height: 40,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    leftText: {
        color: colors.blue,
        fontFamily: "OpenSans-SemiBold",
        fontSize: 14
    },
    rightTextWrapper: {
        width: 40,
        height: 40,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    rightText: {
        color: colors.blue,
        fontFamily: "OpenSans-SemiBold",
        fontSize: 14
    },
    dotStyle: {
        backgroundColor: colors.blueFaded
    },
    activeDotStyle: {
        backgroundColor: colors.blue
    },
    doneButtonWrapper: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        paddingLeft: 35,
        paddingRight: 50,
        borderRadius: 25,
        marginRight: -40
    },
    doneButtonText: {
        fontSize: 14,
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'center',
        margin: 10,
        color: colors.white,
    },
})

export default Onboard
