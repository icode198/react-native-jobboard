import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import NavItem from './components/NavItem';
import Suggestions from './screens/Suggestions';
import Jobs from './screens/Jobs';
import Import from './screens/Import';
import {Colors} from './constants/Colors';
import {
    matchNewJobsWithSkills,
    matchSkillWithJobs,
    parseJobsText,
    removeSkillFromJobs,
} from './utils/logicHelper';

const App = () => {
    const IMPORT = 'Import';
    const JOBS = 'Jobs';
    const SUGGESTIONS = 'Suggestion';

    const [activeTab, setActiveTab] = useState(SUGGESTIONS);
    const [jobsArr, setJobsArr] = useState([]);
    const [skillsArr, setSkillsArr] = useState(['bike', "driver's license"]);

    const handleAddJob = text => {
        const newJobsArr = matchNewJobsWithSkills(
            parseJobsText(text),
            skillsArr,
        );
        setJobsArr([...jobsArr, ...newJobsArr]);
    };

    const handleSkillAdd = skill => {
        setJobsArr(matchSkillWithJobs(jobsArr, skill));
        setSkillsArr([...skillsArr, skill]);
    };

    const handleSkillRemove = skill => {
        setJobsArr(removeSkillFromJobs(jobsArr, skill));
        setSkillsArr(skillsArr.filter(word => word !== skill));
    };

    const loadedComponent =
        activeTab === SUGGESTIONS ? (
            <Suggestions
                jobs={jobsArr}
                skills={skillsArr}
                onAddSkills={handleSkillAdd}
                onRemoveSkills={handleSkillRemove}
            />
        ) : activeTab === JOBS ? (
            <Jobs jobs={jobsArr} />
        ) : (
            <Import onAddJob={handleAddJob} />
        );

    return (
        <View style={styles.container}>
            {loadedComponent}
            <View style={styles.navigator}>
                <NavItem
                    title={SUGGESTIONS}
                    isActive={activeTab === SUGGESTIONS}
                    onActiveTab={setActiveTab}
                />
                <NavItem
                    title={JOBS}
                    isActive={activeTab === JOBS}
                    onActiveTab={setActiveTab}
                />
                <NavItem
                    title={IMPORT}
                    isActive={activeTab === IMPORT}
                    onActiveTab={setActiveTab}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: Platform.OS === 'ios' ? 40 : 10,
    },
    navigator: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flex: 1,
        height: 50,
        alignItems: 'flex-start',
        backgroundColor: Colors.BACKGROUND,
    },
    navItem: {paddingHorizontal: 20, paddingVertical: 10},
    navItemInactive: {
        backgroundColor: '#fbfbfb',
    },
    navItemActive: {
        backgroundColor: '#bbbbbb',
    },
});

export default App;
