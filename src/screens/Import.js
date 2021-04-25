import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PageTitle from '../components/PageTitle';
import InputText from '../components/InputText';
import PrimaryButton from '../components/PrimaryButton';

const Import = ({onAddJob}) => {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <PageTitle light={'Import'} bold={'Text'} />
            <InputText
                value={text}
                placeholder={
                    'Paste the text \n "Company A" requires an apartment or house, and property insurance'
                }
                multiline={true}
                numberOfLines={10}
                style={styles.inputText}
                onChangeText={e => setText(e.toString())}
            />
            <PrimaryButton
                style={styles.btn}
                onPress={() => {
                    onAddJob(text);
                    setText('');
                }}
                label={'Import'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        padding: 20,
        paddingBottom: 50,
    },
    inputText: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 5,
        flex: 1,
    },
    btn: {
        marginBottom: 20,
        marginTop: 20,
    },
});

export default Import;
