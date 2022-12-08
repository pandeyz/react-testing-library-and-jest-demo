import { fetchApiData } from '../fetchApiData';

global.fetch = jest.fn(() => 
  Promise.resolve({
    jest: () => Promise.resolve({})
  })
)

// it('Real API call', async () => {
//   let url= 'https://jsonplaceholder.typicode.com/users';
//   const apiData = await fetchApiData(url);
//   expect(Array.isArray(apiData)).toBe(true);
//   expect(apiData[0].username).toEqual('Bret');
// });

it('Mock API call', () => {
  let url= 'https://jsonplaceholder.typicode.com/users';
  const apiData = fetchApiData(url);
  console.log('apiData: ', apiData);
});