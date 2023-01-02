const PocketBase = require('pocketbase/cjs')
require('cross-fetch/polyfill');
global.EventSource = require('eventsource');

const pb = new PocketBase('http://127.0.0.1:8090');

exports.diseaseList = async (min, max) => {
    const resultList = await pb.collection('diseases').getList(min, max);    
    return resultList;
}

exports.diseaseCreate= async (data,data1)=> {
    const record = await pb.collection('diseases').create(data,data1);
    return record;
}




