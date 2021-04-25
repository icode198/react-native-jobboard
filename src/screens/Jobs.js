import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import JobItem from '../components/JobItem';
import PageTitle from '../components/PageTitle';

const Jobs = ({jobs}) => {
    return (
        <View style={styles.container}>
            <PageTitle light={'Jobs'} bold={'List'} />
            <View>
                <FlatList
                    data={jobs}
                    ItemSeparatorComponent={() => (
                        <View style={{width: 20, height: 20}} />
                    )}
                    renderItem={({item}) => <JobItem item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
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
});

export default Jobs;
