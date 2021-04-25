
<img src="https://github.com/goff-studio/react-native-jobboard/blob/master/src/assets/screens/suggestion.png?raw=true" width="250">

# Job Board
It's a Skill Assessment project.

## What recruiter asked
Imagine you have a bike and a driving license. You also found a job board with a list of companies offering a job. To get the job, you need to fulfill some requirements. There are 100.000 companies on the job board, 10 examples are as follows:

- "Company A" requires an apartment or house, and property insurance.
- "Company B" requires 5 door car or 4 door car, and a driver's license and car insurance.
- "Company C" requires a social security number and a work permit.
- "Company D" requires an apartment or a flat or a house.
- "Company E" requires a driver's license and a 2 door car or a 3 door car or a 4 door car or a 5 door car.
- "Company F" requires a scooter or a bike, or a motorcycle and a driver's license and motorcycle insurance.
- "Company G" requires a massage qualification certificate and liability insurance.
- "Company H" requires a storage place or a garage.
- "Company J" doesn't require anything, you can come and start working immediately.
- "Company K" requires a PayPal account.

Your task is to write code that will calculate for which companies you can work with and for which you can't. You can convert the statements like "Company J requires PayPal account" to whatever form or structure you need. We will check your code against different examples that were not provided in the example above, after all, there are 100.000 companies, right?

## Getting Started
### Prerequisites

This is a super simple project, there is no dependency.


### Installing

Clone the project

```
git clone https://github.com/goff-studio/react-native-jobboard.git
```

Install project dependencies (Actually they are RN dependencies, not the project)

```
cd react-native-job-board
npm install
```

Run the project on the Emulator
```
npx react-native run-ios
```

### Running the tests
There are some super simple tests, you can try them with:
```
npm test
```


### Design

* [Figma](https://www.figma.com/file/oHAxkfz6SdkIQlNU55LVmj/Job-Board) - A simple Design for UI


### It can have some todos
- [x] duplicate detection when adding skills
- [x] avoid importing empty lines - just because of having '\n'
- [ ] duplicate detection on importing
- [ ] input control on import
- [ ] ability to remove jobs from the list
