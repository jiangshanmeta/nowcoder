import readline from 'readline';
import path from 'path';
import fs from 'fs';
import { genFolderName, } from './common';
import { Question, } from './typing';
import questionData from './question.json';
import { languages, } from './config';

interface QuestionItem {
    topicKey:string;
    question:Question;
}

const questionMap = Object.entries(questionData).reduce((acc, [topicKey, questions,]) => {
    questions.forEach((question) => {
        acc[question.questionUUid] = {
            topicKey,
            question,
        };
    });

    return acc;
}, {} as Record<string, QuestionItem >);

const extSet = new Set(languages.map(item => item.ext));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getQuestionItemByUuid () {
    return new Promise<QuestionItem>((resolve) => {
        rl.question('uuid? ', (uuid) => {
            uuid = uuid.trim();
            const question = questionMap[uuid];
            console.log(question);
            if (!question) {
                console.log('没有对应的问题');
                resolve(getQuestionItemByUuid());
            } else {
                resolve(question);
            }
        });
    });
}

function getExts () {
    return new Promise<string[]>((resolve) => {
        rl.question('exts? ', (extstr) => {
            const exts = extstr.split(' ').filter(item => extSet.has(item));
            if (exts.length === 0) {
                resolve(getExts());
            } else {
                resolve(exts);
            }
        });
    });
}

function append (questionItem:QuestionItem, exts:string[]) {
    const folderName = genFolderName(questionItem.topicKey, questionItem.question);
    const folderDir = path.join(__dirname, '../src', folderName);
    for (const ext of exts) {
        if (!fs.existsSync(folderDir)) {
            fs.mkdirSync(folderDir);
        }

        const fileName = `solution.${ext}`;
        const file = path.join(__dirname, `../src/${folderName}/${fileName}`);
        if (fs.existsSync(file)) {
            console.log('文件已存在');
            continue;
        }

        fs.writeFileSync(file, '');
    }
}

async function main () {
    while (true) {
        const title_slug = await getQuestionItemByUuid();
        const exts = await getExts();
        append(title_slug, exts);
    }
}

main();
