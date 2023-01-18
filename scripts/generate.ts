import fs from 'fs';
import path from 'path';
import { difficultyMap, languages, topicKeyLabelMap, TopicKeys, } from './config';
import { genFolderName, } from './common';

import questionMapData from './question.json';

const extLabelMap = languages.reduce<Record<string, string>>((obj, { label, ext, }) => {
    obj[ext] = label;
    return obj;
}, {});

const fileList = fs.readdirSync(path.join(__dirname, '../src'));

const answersMap = fileList.reduce<Record<TopicKeys, Record<string, string[]>>>((obj, dirName) => {
    const answers = fs.readdirSync(path.join(__dirname, '../src', dirName));
    const fields = dirName.split('.');
    const topicKey = fields[0] as TopicKeys;

    obj[topicKey][fields[fields.length - 1]] = answers;
    return obj;
}, {
    algorithm: {},
    js: {},
});

const topicKeys:TopicKeys[] = [
    'algorithm',
    'js',
];

const mainData = topicKeys.map((topicKey) => {
    const tbody = questionMapData[topicKey].map((question) => {
        const {
            questionNo,
            questionTitle,
            questionId,
            difficulty,
        } = question;

        const answers = (answersMap[topicKey][questionId] || []).filter((answerFileName) => {
            // 未来考虑添加md做题解
            const ext = answerFileName.split('.').pop()!;
            return extLabelMap[ext];
        }).map((answerFileName) => {
            const name = answerFileName.split('.');
            const ext = name.pop()!;
            const label = extLabelMap[ext];
            return `[${label}](./src/${genFolderName(topicKey, question)}/${answerFileName})`;
        }).join(' ');

        return `| ${questionNo} | ${questionTitle} | ${answers} | ${difficultyMap[difficulty as keyof typeof difficultyMap]}  |`;
    }).join('\n');

    return `
## ${topicKeyLabelMap[topicKey]} (${Object.keys(answersMap[topicKey]).length}/${questionMapData[topicKey].length})

| index |       title            | code           |  Difficulty   |
| :--:  | :-------------------:  | :---:          |  :--:         |
${tbody}`;
}).join('\n');

const prefix = fs.readFileSync(path.join(__dirname, './_prefix.md'), 'utf8');

fs.writeFile(path.join(__dirname, '../README.md'), prefix + mainData + '\n', 'utf8', (err) => {
    if (err) throw err;
    console.log('文件已被保存');
});
