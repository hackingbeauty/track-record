/* Main app configs go here */

export const appConfig = {
  name: 'Track Record',
  shortName: 'TrackRecord',
  description: 'Build your immutable reputation on blockchain, and get the jobs you want fast',
  splashScreenBackground: '#ffffff'
}

export const EOSConfig = {
  defaultPrivateKey: 'asdfasdfasfasdfasdf',
  signatureProvider: ''
}

export const jobTypes = [
  {
    category: 'Graphic Design',
    title: 'Create our new logo',
    description: "A tree needs to be your friend if you're going to paint him. Go out on a limb - that's where the fruit is. We'll put a happy little bush here. Isn't it fantastic that you can change your mind and create all these happy things? You better get your coat out, this is going to be a cold painting.",
    compensation: '$100',
    time: '1 week'
  },
  {
    category: 'Software Development',
    title: 'Develop our React Dapp',
    description: "If what you're doing doesn't make you happy - you're doing the wrong thing. Now, we're going to fluff this cloud. But we're not there yet, so we don't need to worry about it. You are only limited by your imagination.",
    compensation: '$20,000',
    time: '2 months'
  },
  {
    category: 'User Experience',
    title: 'Create the exerience of our SAAS product',
    description: "Nice little fluffy clouds laying around in the sky being lazy. We spend so much of our life looking - but never seeing. Isn't that fantastic? You can just push a little tree out of your brush like that. From all of us here, I want to wish you happy painting and God bless, my friends.",
    compensation: '$5,000',
    time: '1 month'
  }
]
