// @flow
type Filter = {
  search: string,
  searchBy: string,
  sortBy: string };

export default function getQueryUrl({ search, searchBy, sortBy }: Filter) {
  let resultUrl = 'http://react-cdp-api.herokuapp.com/movies?';
  if (searchBy === 'genres' && Array.isArray(search) && search.length > 1) {
    resultUrl = `${resultUrl}?filter=${search.join(',')}`;
  } else {
    resultUrl += `search=${search}&searchBy=${searchBy}`;
  }
  resultUrl += `&sortBy=${sortBy}&sortOrder=desc`;
  console.log(resultUrl);
  return resultUrl;
}
