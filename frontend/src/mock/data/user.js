import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    identifycode:'1234',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588485979370&di=886f1350cffaa3a61cc26aaea8151d5f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F02%2F20160702122710_iRUXT.thumb.700_0.jpeg',
    name: '系统管理员',
    type: 'admin'
  },
  {
    id: 2,
    username: 'admin01',
    password: '123456',
    identifycode:'1234',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '广告主01',
    type: 'advert'
  }
];
/* export { LoginUsers }; */
const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
