import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers} from './data/user';

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
      let {username, password, identifycode} = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          var arrs = LoginUsers.filter(u=>u.username === username && u.password === password);
          if (arrs === null || arrs.length === 0){
            resolve([200, { code: 500, msg: '账号或密码错误，请再次输入' }]);
          } else {
            user = JSON.parse(JSON.stringify(arrs[0]));
            user.password = undefined;
            resolve([200, { code: 200, msg: '请求成功', user }]);
          }
        }, 1000);
      });
    });
  }
};