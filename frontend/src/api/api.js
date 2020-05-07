import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login/`, params).then(res => res.data); };

export const refreshcode = params => { return axios.post(`${base}/refreshcode`, params).then(res => res.data); };

export const getResourse = params => { return axios.post(`${base}/getResourse`, params).then(res => res.data); };

export const getAbnormalInfo = params => { return axios.post(`${base}/getAbnormalInfo`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

// jobs related
export const getOneJob = params => { return axios.post(`${base}/getOneJob/`, params).then(res => res.data); };
export const getAllJobs = params => { return axios.post(`${base}/getAllJobs/`, params).then(res => res.data); };
export const postOneJob = params => { return axios.post(`${base}/postOneJob/`, params).then(res => res.data); };
export const completeOneJob = params => { return axios.post(`${base}/completeOneJob/`, params).then(res => res.data); };

// Market.vue
export const getAllOrders = params => { return axios.post(`${base}/getAllOrders/`, params).then(res => res.data); };
export const takeOneOrder = params => {return axios.post(`${base}/takeOneOrder/`, params).then(res => res.data);};
// create one order
export const createAnOrder = params => { return axios.post(`${base}/createAnOrder/`, params).then(res => res.data); };
export const getPostedOrders = params => { return axios.post(`${base}/getPostedOrders/`, params).then(res => res.data); };
export const completeOneOrder = params => { return axios.post(`${base}/completeOneOrder/`, params).then(res => res.data); };
// check translate
export const checkTranslatedText = params => { return axios.post(`${base}/checkTranslatedText/`, params).then(res => res.data); };


