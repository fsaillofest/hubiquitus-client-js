({
  baseUrl: '../',
  out: '../build/hubiquitus.min.js',
  name: 'hubiquitus',
  paths: {
    sockjs: 'vendor/sockjs',
    events: 'lib/events',
    uuid: 'lib/uuid',
    lodash: 'vendor/lodash'
  },
  shim: {
    'sockjs': {exports: ['SockJS']},
    'lodash': {exports: ['_']}
  }
})