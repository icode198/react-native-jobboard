import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {FontSizes, FontWeights} from '../constants/Fonts';
import {Colors} from '../constants/Colors';

const PageTitle = ({light, bold}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.light}>{light}</Text>
            <Text style={styles.bold}>{bold}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    light: {
        fontWeight: FontWeights.LIGHT,
        fontSize: FontSizes.XLARGE,
        color: Colors.ACTIVE_TEXT,
    },
    bold: {
        fontWeight: FontWeights.HEAVY,
        fontSize: FontSizes.XLARGE,
        color: Colors.ACTIVE_TEXT,
    },
});

export default PageTitle;
