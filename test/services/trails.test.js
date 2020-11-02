const app = require('../../src/app');

describe('\'trails\' service', () => {
  it('registered the service', () => {
    const service = app.service('trails');
    expect(service).toBeTruthy();
  });
});
