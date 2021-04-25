import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Dims} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';

const PrimaryButton = props => {
    const {label, style = undefined} = props;
    return (
        <TouchableOpacity {...props} style={[styles.container, style]}>
            <Text style={styles.btnLabel}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: Dims.RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colors.PRIMARY,
        marginBottom: 10,
        flexDirection: 'row',
    },
    btnLabel: {
        color: Colors.WHITE,
        textTransform: 'uppercase',
    },
});

export default PrimaryButton;
