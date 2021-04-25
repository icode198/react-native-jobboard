import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Dims} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import {FontSizes, FontWeights} from '../constants/Fonts';

const JobItem = ({item}) => {
    const {company, jobDetails, matchedSkills} = item;

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.matchContainer}>
                <Text style={styles.matchNum}>{matchedSkills.length}</Text>
                <Text style={styles.matchLbl}>Skills</Text>
            </View>
            <View style={styles.jobDetailContainer}>
                <Text style={styles.company}>{company}</Text>
                <Text style={styles.desc} numberOfLines={1}>
                    {jobDetails}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: Dims.RADIUS,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderStyle: 'solid',
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    matchNum: {
        marginVertical: -8,
        fontSize: FontSizes.XLARGE * 1.5,
        fontWeight: FontWeights.THIN,
    },
    matchLbl: {
        fontSize: FontSizes.XSMALL,
        fontWeight: FontWeights.BOLD,
        textTransform: 'uppercase',
        color: Colors.PRIMARY,
    },
    matchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    jobDetailContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    company: {
        fontWeight: FontWeights.BOLD,
        fontSize: FontSizes.MEDIUM,
        marginBottom: 10,
    },
    desc: {color: Colors.INACTIVE_TEXT},
});

export default JobItem;
