import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {Dims} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import {FontSizes} from '../constants/Fonts';

const InputText = props => {
    const {btnLabel, onPressBtn, style = undefined} = props;
    return (
        <View style={[styles.container, style]}>
            <TextInput style={styles.inputText} {...props} />
            <TouchableOpacity onPress={onPressBtn} style={styles.btnContainer}>
                <Text style={styles.btnLabel}>{btnLabel}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: Dims.RADIUS,
        borderColor: Colors.PRIMARY,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        paddingLeft: 15,
        backgroundColor: Colors.BACKGROUND,
        marginBottom: 10,
        flexDirection: 'row',
    },
    btnLabel: {
        fontSize: FontSizes.LARGE,
        color: Colors.PRIMARY,
    },
    btnContainer: {
        paddingTop: 4,
        paddingBottom: 5,
        paddingHorizontal: 15,
    },
    inputText: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },
});

export default InputText;
