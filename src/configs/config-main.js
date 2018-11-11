import { Api, JsonRpc, JsSignatureProvider } from 'eosjs'

/** ****** Start EOSJS Configuration ******* */
const defaultPrivateKey = '5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5'
const signatureProvider = new JsSignatureProvider([defaultPrivateKey])
const rpc = new JsonRpc('http://127.0.0.1:8888')
/** ****** End EOSJS Configuration ******* */

export const api = new Api({ rpc, signatureProvider })

export const appConfig = {
  name: 'Track Record',
  shortName: 'TrackRecord',
  description: 'Build your immutable reputation on blockchain, and get the jobs you want fast',
  splashScreenBackground: '#ffffff'
}

export const jobTypes = [
  {
    category: 'Machine Learning',
    title: 'Create our machine learning model',
    description: "Here's our training dataset and test dataset. Please create a ML model. We have reserved test dataset to evaluate your result.",
    compensation: '$100',
    time: '1 week',
    kpi: '80%'
  },
  {
    category: 'Software Development',
    title: 'Develop our React Dapp',
    description: "If what you're doing doesn't make you happy - you're doing the wrong thing. Now, we're going to fluff this cloud. But we're not there yet, so we don't need to worry about it. You are only limited by your imagination.",
    compensation: '$20,000',
    time: '2 months',
    kpi: '80%'
  },
  {
    category: 'User Experience',
    title: 'Create the exerience of our SAAS product',
    description: "Nice little fluffy clouds laying around in the sky being lazy. We spend so much of our life looking - but never seeing. Isn't that fantastic? You can just push a little tree out of your brush like that. From all of us here, I want to wish you happy painting and God bless, my friends.",
    compensation: '$5,000',
    time: '1 month',
    kpi: '80%'
  }
]
