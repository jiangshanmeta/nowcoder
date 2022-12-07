import https from 'https';
import fs from 'fs';
import path from 'path';
import { Question, } from './typing';
import { topIdKeyMap, TopicKeys, isTopicId, } from './config';
import questionData from './question.json';

interface GetTopicQuestionRes {
    difficultyArray:{
        count:number;
        id:number;
        title:string
    }[];
    questions:Question[];
    totalPage:number;
}

function getQuestion (topicId:number, page:number) {
    return new Promise<GetTopicQuestionRes>((resolve) => {
        https.get(`https://www.nowcoder.com/api/questiontraining/coding/getTopicQuestion?pageSize=50&topicId=${topicId}&page=${page}`, (res) => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData.data);
                } catch (e) {
                    console.error((e as Error).message);
                }
            });
        }).on('error', (e) => {
            console.error(`出现错误: ${e.message}`);
        });
    });
}

async function getQuestions (topicId:number) {
    const {
        questions,
        totalPage,
    } = await getQuestion(topicId, 1);

    const pages:number[] = [];
    for (let i = 2; i <= totalPage; i++) {
        pages.push(i);
    }
    const responses = await Promise.all(pages.map((page) => getQuestion(topicId, page)));
    return responses.reduce((list, item) => {
        list.push(...item.questions);
        return list;
    }, [...questions,]).map((question) => {
        return {
            difficulty: question.difficulty,
            questionNo: question.questionNo,
            questionTitle: question.questionTitle,
            questionUUid: question.questionUUid,
            questionId: question.questionId,
        };
    });
}

async function main () {
    const topicId = +process.argv[2];
    if (!topicId) {
        console.error('请输入topicId');
        return;
    }
    if (!isTopicId(topicId)) {
        console.error('topicId未配置key');
        return;
    }

    (questionData as Record<TopicKeys, Question[]>)[topIdKeyMap[topicId]] = await getQuestions(topicId);

    fs.writeFile(path.join(__dirname, './question.json'), JSON.stringify(questionData, null, 4), 'utf8', (err) => {
        if (err) {
            throw err;
        }
        console.log('文件已被保存');
    });
}

main();
