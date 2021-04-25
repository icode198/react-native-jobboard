// some SIMPLE test

import {
    isJobContainsSkill,
    matchNewJobsWithSkills,
    matchSkillWithJobs,
    parseJobsText,
    removeSkillFromJobs,
} from './logicHelper';
const JOBS_TEXT =
    '"Company A" requires an apartment or house, and property insurance.\n' +
    '"Company B" requires 5 door car or 4 door car, and a driver\'s license and car insurance.\n' +
    '"Company C" requires a social security number and a work permit. \n' +
    '"Company D" requires an apartment or a flat or a house.\n' +
    '"Company E" requires a driver\'s license and a 2 door car or a 3 door car or a 4 door car or a 5 door car.\n' +
    '"Company F" requires a scooter or a bike, or a motorcycle and a driver\'s license and motorcycle insurance.\n' +
    '"Company G" requires a massage qualification certificate and liability insurance.\n' +
    '"Company H" requires a storage place or a garage.\n' +
    '"Company J" doesn\'t require anything, you can come and start working immediately.\n' +
    '"Company K" requires a PayPal account.\n';

const SKILLS = ['bike', "driver's license"];

it('should finds SKILL in JoBSkIlL', () => {
    expect(isJobContainsSkill('SKILL', 'ThIs JoB NeeDs ThIs sKiLL')).toBe(true);
});

it('should finds skill in JoBSkIlL', () => {
    expect(isJobContainsSkill('skill', 'ThIs JoB NeeDs ThIs sKiLL')).toBe(true);
});

it('should finds Skill in JoBSkIlL', () => {
    expect(isJobContainsSkill('skill', 'ThIs JoB NeeDs ThIs sKiLL')).toBe(true);
});

it('should parse text correctly', () => {
    const parsedText = parseJobsText(JOBS_TEXT);
    expect(parsedText).toBeArray();
    expect(parsedText[0]).toBeObject();
    expect(parsedText[0].company).toBe('Company A');
    expect(parsedText[0].jobDetails).toBeString();
    expect(parsedText[0].jobDetails).toBe(
        'requires an apartment or house, and property insurance.',
    );
    expect(parsedText[0].matchedSkills).toBeArray();
});

it('should match PARSED_TEXT with a SKILLS arr', () => {
    const jobWithMatchedSkills = matchNewJobsWithSkills(
        parseJobsText(JOBS_TEXT),
        SKILLS,
    );
    expect(jobWithMatchedSkills).toBeArray();
    expect(jobWithMatchedSkills[5]).toBeObject();
    expect(jobWithMatchedSkills[5].company).toBe('Company F');
    expect(jobWithMatchedSkills[5].jobDetails).toBeString();
    expect(jobWithMatchedSkills[5].jobDetails).toBe(
        "requires a scooter or a bike, or a motorcycle and a driver's license and motorcycle insurance.",
    );
    expect(jobWithMatchedSkills[5].matchedSkills).toBeArray();
    expect(jobWithMatchedSkills[5].matchedSkills.length).toBe(2);
});

it('should match PARSED_TEXT with a new SKILL', () => {
    const jobWithMatchedSkills = matchSkillWithJobs(
        parseJobsText(JOBS_TEXT),
        'scooter',
    );
    expect(jobWithMatchedSkills).toBeArray();
    expect(jobWithMatchedSkills[5]).toBeObject();
    expect(jobWithMatchedSkills[5].company).toBe('Company F');
    expect(jobWithMatchedSkills[5].jobDetails).toBeString();
    expect(jobWithMatchedSkills[5].jobDetails).toBe(
        "requires a scooter or a bike, or a motorcycle and a driver's license and motorcycle insurance.",
    );
    expect(jobWithMatchedSkills[5].matchedSkills).toBeArray();
    expect(jobWithMatchedSkills[5].matchedSkills.length).toBe(1);
});

it('should remove a SKILL from PARSED_TEXT', () => {
    const parsedText = matchNewJobsWithSkills(parseJobsText(JOBS_TEXT), SKILLS);

    const jobWithMatchedSkills = removeSkillFromJobs(parsedText, 'bike');
    expect(jobWithMatchedSkills).toBeArray();
    expect(jobWithMatchedSkills[5]).toBeObject();
    expect(jobWithMatchedSkills[5].company).toBe('Company F');
    expect(jobWithMatchedSkills[5].jobDetails).toBeString();
    expect(jobWithMatchedSkills[5].jobDetails).toBe(
        "requires a scooter or a bike, or a motorcycle and a driver's license and motorcycle insurance.",
    );
    expect(jobWithMatchedSkills[5].matchedSkills).toBeArray();
    expect(jobWithMatchedSkills[5].matchedSkills.length).toBe(1);
});
