import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {LoginUsers} from './data/user';
import {Jobs} from './data/job';
import {Cards} from './data/MarketCards';

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
    mock.onPost('/login/').reply(config => {
      let {username, password, identifycode} = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          var arrs = LoginUsers.filter(u=>u.username === username && u.password === password);
          if (arrs === null || arrs.length === 0){
            resolve([200, { code: 500, msg: '账号或密码错误，请再次输入' , status_code:1}]);
          } else {
            user = JSON.parse(JSON.stringify(arrs[0]));
            user.password = undefined;
            resolve([200, { code: 200, msg: '请求成功', status_code:0, user }]);
          }
        }, 1000);
      });
    });

    mock.onPost('/getAllJobs').reply(config =>{
      let {user_id} = JSON.parse(config.data)
      // console.log(config.data)
      // console.log(user_id)
      return new Promise((resolve, reject) => {
        let jobs = null;
        setTimeout(() => {
          // console.log(Jobs)
          jobs = Jobs.filter(job=>job.uid === user_id);
          if (jobs === null || jobs.length === 0){
            resolve([200, { code: 500, msg: '未搜索到记录' }]);
          } else {
            resolve([200, { code: 200, msg: '请求成功', jobs}]);
          }
        }, 1000);
      });
    })

    mock.onPost('/getOneJob').reply(config =>{
      let {job_id} = JSON.parse(config.data)
      console.log(config.data)
      return new Promise((resolve, reject) => {
        let one_job = null;
        setTimeout(() => {
          var arrs = Jobs.filter(job=>job.id === job_id);
          if (arrs === null || arrs.length === 0){
            resolve([200, { code: 500, msg: '未搜索到记录' }]);
          } else {
            one_job = JSON.parse(JSON.stringify(arrs[0]));
            resolve([200, { code: 200, msg: '请求成功', one_job}]);
          }
        }, 1000);
      });
    })

    

    mock.onPost('/getTest').reply(config =>{
      return new Promise((resolve, reject) => {
        var test_text = 'abcd'
        setTimeout(() => {
          resolve([200, { code: 200, msg: '请求成功', test_text}]);
          
        }, 1000);
      });
    })


    mock.onPost('/getAllOrders/').reply(config =>{
      return new Promise((resolve, reject) => {
        var cards = [];
        console.log(Cards);
        setTimeout(() => {
          cards = JSON.parse(JSON.stringify(Cards));
          console.log(cards)
          resolve([200, { code: 200, msg: '请求成功', cards}]);
          
        }, 1000);
      });
    })


  }
};