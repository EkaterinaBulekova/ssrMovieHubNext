import {
  fn, describe, it, expect,
} from 'jest';
import getData from './data-provider';


describe('getData', () => {
  it('getData will fetch with right url', () => {
    const testData = { search: 'search', searchBy: 'searchBy', sortBy: 'sortBy' };
    global.fetch = fn(() => new Promise(resolve => resolve({ json: () => ({ data: 'test' }) })));
    return getData(testData).then(result => expect(result.data).toBe('test'));
  });
});
