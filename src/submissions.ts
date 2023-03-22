import { Submission } from "./models";

const submissions: Submission[] = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true },
    { name: "Joe", score: 77, date: "2018-05-14", passed: true },
    { name: "Jack", score: 59, date: "2019-07-05", passed: false },
    { name: "Jill", score: 88, date: "2020-04-22", passed: true }
];
const addSubmission = (allSubmissions: Submission[], newName: string, newScore: number, newDate: string): void => {
    const newSubmission: Submission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore > 60
    };
    allSubmissions.push(newSubmission);
};
const deleteSubmissionByIndex = (allSubmissions: Submission[], index: number): void => {
    allSubmissions.splice(index, 1);
};
const findSubmissionByName = (allSubmissions: Submission[], name: string): Submission | undefined => {
    const match = allSubmissions.find((submission) => submission.name === name);
    return match;
};
const findLowestScore = (allSubmission: Submission[]): Submission | undefined => {
    const lowestScore = submissions.reduce((previous, current) => previous.score < current.score ? previous : current);
    return lowestScore;
};
const findAverageScore = (allSubmissions: Submission[]): number => {
    return submissions.reduce((total, current) => total += current.score, 0) / submissions.length;
};
const filterPassing = (alllSubmissions: Submission[]): Submission[] => {
    return submissions.filter((submission) => submission.passed);
};
