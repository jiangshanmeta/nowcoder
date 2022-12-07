import { Question, } from './typing';

export function genFolderName (topicKey:string, question:Question) {
    return `${topicKey}.${question.questionNo}.${question.questionId}`;
}
