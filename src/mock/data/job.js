import Mock from 'mockjs';
const Jobs = [];

for (let i = 0; i < 30; i++) {
  Jobs.push(Mock.mock({
    id: Mock.Random.id(),
    'uid|1': [
      1,
      2
    ]
    ,
    title: '@word(3, 5)',
    abstract: '@sentence(1)',
    date: Mock.Random.date(),
    ddl: Mock.Random.date(),
    content: '@paragraph(2,3)',
    translate_title: '@word(3, 5)',
    translate_text: '@paragraph(2)'
  }));
}

export {Jobs};