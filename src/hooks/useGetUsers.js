import http from '../config/axios';
import { useDispatch } from 'react-redux';
import { getUserDetails, getUsers } from '../features/gitApi/usersReducer';
import { showNotification } from '../features/notifications/notifReducer';

const useGetUsers = () => {
  const dispatch = useDispatch();
  const requestGitUsers = (payload, ctx) => {
    ctx.setLoading(true);
    const params = {
      q: payload.search,
      page: payload.page,
      per_page: 15,
    }
    http.get('search/users', {params})
    .then((response) => {
      ctx.setLoading(false);
      dispatch(getUsers(response.data));
    })
    .catch((error) => {
      ctx.setLoading(false);
      dispatch(showNotification({type: 'danger', title: error.response.data.message, message: error.response.data.message}))
    })
  }
  const requestUserDetails = (payload, ctx) => {
    http.get(`users/${payload.user}`)
    .then((response) => {
      dispatch(getUserDetails(response.data))
    })
    .catch((error) => {
      dispatch(showNotification({type: 'danger', title: error.response.data.message, message: error.response.data.message}))
    })
  }
  return { requestGitUsers, requestUserDetails }
};

export default useGetUsers;