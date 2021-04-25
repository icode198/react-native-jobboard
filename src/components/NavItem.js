import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import {FontSizes} from '../constants/Fonts';

const NavItem = ({title, isActive, onActiveTab}) => {
    const activeContainerStyle = {
        backgroundColor: isActive ? Colors.WHITE : Colors.BACKGROUND,
    };
    const activeTextStyle = {
        fontSize: FontSizes.SMALL,
        color: isActive ? Colors.ACTIVE_TEXT : Colors.INACTIVE_TEXT,
        textTransform: 'uppercase',
    };
    return (
        <TouchableOpacity
            onPress={() => onActiveTab(title)}
            style={[styles.container, activeContainerStyle]}>
            <Text style={activeTextStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default NavItem;
