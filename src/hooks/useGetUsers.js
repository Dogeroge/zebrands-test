import http from '../config/axios';
import { useDispatch } from 'react-redux';
import { getUserDetails, getUsers } from '../features/gitApi/usersReducer';
import { showNotification } from '../features/notifications/notifReducer';

const useGetUsers = () => {
  const dispatch = useDispatch();
  /**
   * Make the request to get the Users list and dispatch the state update
   * @param {Object} payload Object with the data to handle the request query
   * @param {Object} ctx Contains extra functions to handle loading behavior
   */
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
  /**
   * Make the request to get the detailed info of an user and dispatch the state update
   * @param {Object} payload Object with the data to handle the reques query
   * @param {Object} ctx Contains extra functions to handle loading behavior
   */
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