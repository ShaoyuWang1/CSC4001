import Mock from 'mockjs';
const Jobs = [];

for (let i = 0; i < 30; i++) {
  Jobs.push(Mock.mock({
    id: Mock.Random.id(),
    'uid|1': {
        a: 1,
        b: 2,
    },
    title: Mock.Random.cname(),
    'abstract|3': '*',
    date: Mock.Random.date(),
    ddl: Mock.Random.date(),
    'content|20': '*',
    'translate_text1': '*'
  }));
}

export {Jobs};