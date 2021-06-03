import { apiCreator } from './index';

const getBigEventList = () => {
  const url = '/getBigEventList';
  return apiCreator().get(url);
}
export default {
  getBigEventList,
}
