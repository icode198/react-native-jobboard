export const isJobContainsSkill = (skill, job) => {
    return job.toLowerCase().includes(skill.toLowerCase());
};

export const parseJobsText = text => {
    let newUnanalyzedJobsArr = text.split('\n');

    //remove empty items in array
    newUnanalyzedJobsArr = newUnanalyzedJobsArr.filter(
        item => item !== '' && item.includes('"'),
    );

    return newUnanalyzedJobsArr.map(jobInfoText => {
        const jobInfoArr = jobInfoText.split('"');
        return {
            company: jobInfoArr[1],
            jobDetails: jobInfoArr[2].substring(1), //substring removes fist space char
            matchedSkills: [],
        };
    });
};

export const matchNewJobsWithSkills = (jobsArr, userSkills) => {
    return jobsArr.map(job => {
        const matchedSkills = job.matchedSkills.slice(0);
        userSkills.forEach(skill => {
            if (
                isJobContainsSkill(skill, job.jobDetails) &&
                !matchedSkills.includes(skill)
            ) {
                matchedSkills.push(skill);
            }
        });
        return {...job, matchedSkills: matchedSkills};
    });
};

export const matchSkillWithJobs = (jobsArr, skill) => {
    return jobsArr.map(job => {
        if (
            isJobContainsSkill(skill, job.jobDetails) &&
            !job.matchedSkills.includes(skill)
        ) {
            //if skill was in job details text and was not in previous matched skills then:
            const matchedSkills = job.matchedSkills.slice(0);
            matchedSkills.push(skill);
            return {...job, matchedSkills: matchedSkills};
        }
        return job;
    });
};

export const removeSkillFromJobs = (jobsArr, skill) => {
    return jobsArr.map(job => {
        if (job.matchedSkills.includes(skill.toLowerCase())) {
            const matchedSkills = job.matchedSkills.filter(
                word => word !== skill,
            );
            return {...job, matchedSkills: matchedSkills};
        }
        return job;
    });
};
