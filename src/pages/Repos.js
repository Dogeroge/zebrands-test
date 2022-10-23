import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CardsList from '../components/CardsList'
import SearchInput from '../components/SearchInput'
import { clearRepos } from '../features/gitApi/reposReducer'
import useGetRepos from '../hooks/useGetRepos'

export default function Repos() {
  const dispatch = useDispatch();
  const requestGitRepos = useGetRepos();
  const gitRepos = useSelector((state) => state.repos);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    sort: 'desc',
  });

  const send = () => {
    dispatch(clearRepos());
    requestGitRepos({
      search,
      page: pagination.page,
    }, {
      setLoading,
    })
  }

  const loadMore = () => {
    setPagination({
      ...pagination,
      page: pagination.page++
    })
    requestGitRepos({
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
            Search by repository
          </p>
          <SearchInput
            search={search}
            handleSearch={setSearch}
            handleSend={send}
          />
        </Col>
      </Row>
      <CardsList
        items={gitRepos.items}
        total={gitRepos.total}
        handleMore={loadMore}
        loading={loading}
        type="repos"
      />
    </>
  )
}
