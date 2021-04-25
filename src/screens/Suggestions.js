import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SkillItem from '../components/SkillItem';
import InputText from '../components/InputText';
import PageTitle from '../components/PageTitle';
import JobItem from '../components/JobItem';

const Suggestions = ({jobs, skills, onAddSkills, onRemoveSkills}) => {
    const [newSkill, setNewSkill] = useState('');

    return (
        <View style={styles.container}>
            <PageTitle light={'Jobs'} bold={'Suggestion'} />
            <InputText
                value={newSkill}
                onChangeText={e => {
                    setNewSkill(e.toString());
                }}
                onPressBtn={() => {
                    if (!skills.includes(newSkill)) {
                        onAddSkills(newSkill);
                        setNewSkill('');
                    }
                }}
                btnLabel={'+'}
                placeholder={'New Skill'}
                autoCapitalize={'none'}
                autoCorrect={false}
            />
            <View>
                <FlatList
                    horizontal={true}
                    data={skills}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <SkillItem
                            error={item === newSkill}
                            item={item}
                            onRemove={() => onRemoveSkills(item)}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{width: 10, height: 10}} />
                    )}
                />
            </View>
            <View>
                <FlatList
                    data={jobs.filter(item => item.matchedSkills.length > 0)}
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
    },
    skillContainer: {
        width: '100%',
    },
});

export default Suggestions;
