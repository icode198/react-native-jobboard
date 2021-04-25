import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import {Dims} from '../constants/Dimensions';

const SkillItem = ({item, onRemove, error}) => {
    return (
        <View
            style={[
                styles.container,
                {backgroundColor: error ? Colors.ERROR : Colors.PRIMARY},
            ]}>
            <Text style={styles.text}>{item}</Text>
            <TouchableOpacity onPress={onRemove} style={styles.deleteBtn}>
                <Text style={styles.text}>X</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: Dims.RADIUS,
        paddingLeft: 10,
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    text: {
        color: Colors.WHITE,
        textTransform: 'uppercase',
    },
    deleteBtn: {
        marginLeft: 10,
        padding: 10,
    },
});

export default SkillItem;
