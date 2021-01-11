const NetworkTest = require('opentok-network-test-js').default;
const ErrorNames = require('opentok-network-test-js').ErrorNames;
const OT = require('@opentok/client');

const otNetworkTest = new NetworkTest(OT, {
  apiKey: '47071434', // Add the API key for your OpenTok project here.
  sessionId: '2_MX40NzA3MTQzNH5-MTYxMDAwMzg5NDQ2MH45WjBWbklBRWdQRXkxR2FsN3BrRytHbit-fg', // Add a test session ID for that project
  token: 'T1==cGFydG5lcl9pZD00NzA3MTQzNCZzaWc9N2NhOTE3NThiZTFhNDgwYmYwYThkYmQzZjhjY2M4ZjRmZWEwODI3NDpzZXNzaW9uX2lkPTJfTVg0ME56QTNNVFF6Tkg1LU1UWXhNREF3TXpnNU5EUTJNSDQ1V2pCV2JrbEJSV2RRUlhreFIyRnNOM0JyUnl0SGJpdC1mZyZjcmVhdGVfdGltZT0xNjEwMDAzOTM4Jm5vbmNlPTAuMjQzMTk0NTMyMzY3NTI5NTMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYxMjU5NTkzNyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==' // Add a token for that session here
});

otNetworkTest.testConnectivity().then((connectivityResult) => {
  otNetworkTest.testQuality((qualityCb) => {
    console.log('qualityCb', qualityCb);
  }).then((results) => {
    console.log('results', results);
  }).catch((error) => {
    console.log('test quality error', error);
  })
}).catch((error) => {
  console.log('connectivity error', error);
})