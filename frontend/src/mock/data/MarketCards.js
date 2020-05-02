import Mock from 'mockjs';

function randomTag(){
    let res = []
    let base = ["Spanish","English","IT","Bio","Chinese","News"];
    let i = Math.floor(Math.random() * Math.floor(4));
    if(i ==0)i = 1;
    for(let j =0 ; j<i; j++){
        let k = Math.floor(Math.random() * Math.floor(6));
        res.push(base[k]);
    }
    return res;

}

const Cards = [
    // test data
    // { title: 'Mock.Random.date()', abstract: 'This is the translation abstract', fee:4 , ddl:Mock.Random.date(), labels:["News","IT", "Hi-Tech"]},
    // { title: 'title_2', abstract: 'This is the translation abstract', fee:4 , ddl:Mock.Random.date(), labels:["News","IT", "Hi-Tech"]},
    // { title: 'title_3', abstract: 'This is the translation abstract', fee:4 , ddl:Mock.Random.date(), labels:["News","IT", "Hi-Tech"]},
    // { title: 'title_1', abstract: 'This is the translation abstract', fee:4 , ddl:Mock.Random.date(), labels:["News","IT", "Hi-Tech"]},
    // { title: 'title_2', abstract: 'This is the translation abstract', fee:4 , ddl:Mock.Random.date(), labels:["News","IT", "Hi-Tech"]},
    // { title: 'title_3', abstract: 'This is the translation abstract', fee:4 , ddl:Mock.Random.date(), labels:["News","IT", "Hi-Tech"]},
    // { title: 'title_1', abstract: 'This is the translation abstract', fee:4 , ddl:Mock.Random.date(), labels:["News","IT", "Hi-Tech"]},
    // { title: 'title_2', abstract: 'This is the translation abstract', fee:4 , ddl:Mock.Random.date(), labels:["News","IT", "Hi-Tech"]},
    // { title: 'title_3', abstract: 'This is the translation abstract', fee:4 , ddl:Mock.Random.date(), labels:["News","IT", "Hi-Tech"]}
    
  ];

for(let i =0; i<12; i++){
    Cards.push(Mock.mock({
        title: Mock.mock('@title(5)'),
        abstract: Mock.mock('@paragraph(1)'),
        fee: Mock.mock('@integer(50,200)'),
        ddl:Mock.Random.date(),
        labels: randomTag()
        

    }));
}


export {Cards};