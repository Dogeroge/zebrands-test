import http from '../config/axios';
import { useDispatch } from 'react-redux';
import { getRepos } from '../features/gitApi/reposReducer';
import { showNotification } from '../features/notifications/notifReducer';

const useGetRepos = () => {
  const dispatch = useDispatch();
  /**
   * Make the request to get the Repository list
   * @param {Object} payload Object with the data to handle request query
   * @param {Object} ctx Contains extra functions to handle loading behavior
   */
  const requestGitRepos = (payload, ctx) => {
    ctx.setLoading(true);
    const params = {
      q: payload.search,
      page: payload.page,
      per_page: 15,
    }
    http.get('search/repositories', {params})
    .then((response) => {
      ctx.setLoading(false);
      dispatch(getRepos(response.data));
    })
    .catch((error) => {
      ctx.setLoading(false);
      dispatch(showNotification({type: 'danger', title: error.response.data.message, message: error.response.data.message}))
    })
  }
  return requestGitRepos
};

export default useGetRepos;