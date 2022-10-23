import http from '../config/axios';
import { useDispatch } from 'react-redux';
import { getRepos } from '../features/gitApi/reposReducer';
import { showNotification } from '../features/notifications/notifReducer';

const useGetRepos = () => {
  const dispatch = useDispatch();
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
      console.log('error', error)
      ctx.setLoading(false);
      dispatch(showNotification({type: 'danger', title: error.response.data.message, message: error.response.data.message}))
    })
  }
  return requestGitRepos
};

export default useGetRepos;