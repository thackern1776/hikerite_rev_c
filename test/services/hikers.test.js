const app = require('../../src/app');

describe('\'hikers\' service', () => {
  it('registered the service', () => {
    const service = app.service('hikers');
    expect(service).toBeTruthy();
  });
});
