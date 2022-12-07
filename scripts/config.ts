export const languages = [
    {
        label: 'JavaScript',
        ext: 'js',
    },
    {
        label: 'TypeScript',
        ext: 'ts',
    },
];

export const difficultyMap = {
    1: '入门',
    2: '简单',
    3: '中等',
    4: '较难',
    5: '困难',
};

export const topIdKeyMap = {
    196: 'algorithm',
    271: 'js',
} as const;

type TopIdKeyMap = typeof topIdKeyMap
export type TopicIds = keyof TopIdKeyMap
export type TopicKeys = TopIdKeyMap[keyof TopIdKeyMap]

export const topicKeyLabelMap:Record<TopicKeys, string> = {
    algorithm: '算法',
    js: 'JS能力测评',
};

export function isTopicId (x:number): x is TopicIds {
    return x in topIdKeyMap;
}
