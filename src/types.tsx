export type Question = {
    title: string,
    options: string[];
    correctAnswer?: string; // ? mean optinal, it can be undefined
}