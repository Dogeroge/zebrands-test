import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearState } from '../features/gitApi/usersReducer';
import SearchInput from '../components/SearchInput';
import useGetUsers from '../hooks/useGetUsers';
import CardsList from '../components/CardsList';

export default function Users() {
  const dispatch = useDispatch();
  const { requestGitUsers } = useGetUsers();
  const gitUsers = useSelector((state) => state.users);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    sort: 'desc',
  });
  
  const send = () => {
    dispatch(clearState());
    requestGitUsers({
      search,
      page: pagination.page
    }, {
      setLoading,
    })
  }
  
  const loadMore = () => {
    setPagination({
      ...pagination,
      page: pagination.page++
    })
    requestGitUsers({
      search,
      page: pagination.page
    }, {
      setLoading,
    })
  }

  return (
    <>
      <Row className="justify-content-center mt-4">
        <Col xs="11" xl="11">
          <p className="fs-2 fw-bold text-white text-start mb-4">
            Search by users
          </p>
          <SearchInput
            search={search}
            handleSearch={setSearch}
            handleSend={() => send()} 
          />
        </Col>
      </Row>
      <CardsList
        items={gitUsers.items}
        total={gitUsers.total}
        handleMore={loadMore}
        loading={loading}
        type="users"
      />
    </>
  )
}
