require('dotenv').config();
const fetch = require('node-fetch');
let currentDate = new Date();
class Integration {
    async createRun() {
        console.log('Process.env: ' + process.env.ENV);
        console.log('Current Date: ' + currentDate);
        console.log('Process env token: ' + process.env.TOKEN)
        const response = await fetch('https://api.qase.io/v1/run/SHA', {
            method: 'POST',
            body: JSON.stringify({ title: 'automationRun-' + process.env.ENV + '-' + currentDate }),
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                Token: process.env.TOKEN,
            },
        });
        const myJson = await response.json(); // extract JSON from the http response
        console.log('Running Create Run API');
        console.log("Creating test run: " + myJson);
        const data = JSON.stringify(myJson);
        const answer = JSON.parse(data);
        process.env.globalid = Number(answer.result.id);
        console.log("Global ID: pro" + process.env.globalid);
    }
    async getGlobalId() {
        return await this.globalI;
    }
    async afterMethodCall(hookscasestatus, hookscaseid) {
        console.log('Checkssxz');
        console.log('GLobal iXX');
        console.log("GLobal iX : " + process.env.globalid);
        await this.addCaseToTestRun(process.env.globalid, hookscasestatus, hookscaseid);
    }
    async updateTestRunStatus() {
        console.log('Update Test Run Status');
        await this.markRunWithCompleteStatus(globalid);
    }
    async addCaseToTestRun(funcglobalid, casestatus, testcaseID) {
        console.log("Global id : " + funcglobalid);
        const response = await fetch('https://api.qase.io/v1/result/SHA/' + funcglobalid, {
            method: 'POST',
            body: JSON.stringify({ status: casestatus, case_id: testcaseID }),
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                Token: process.env.TOKEN,
            },
        });
        const myJson = await response.json(); // extract JSON from the http response
        console.log('RESULT AGYA'+ myJson);
    }
    async markRunWithCompleteStatus(funcglobalid) {
        const response = await fetch('https://api.qase.io/v1/run/SHA/' + funcglobalid + '/complete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Token: process.env.TOKEN,
            },
        });
        const myJson = await response.json();
        console.log(myJson);
    }
}
module.exports = new Integration();
