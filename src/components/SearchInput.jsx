import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchInput = (props) => {
  const { search, handleSearch, handleSend, onlyInput} = props;

  const handleSubmit = (e) => {
    if ((e.key === 'Enter' || e.type === 'click')) {
      e.preventDefault();
      handleSend();
      e.target.blur();
    }
  }

  return (
    <Form className="mb-4">
      <Form.Group className="text-start">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search"
            value={search}
            autoFocus={true}
            className="border-right-0 border"
            onChange={(val) => handleSearch(val.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
          />
          <Button
            variant="primary"
            className="text-white"
            onClick={(e) => handleSubmit(e)}
          >
            <i className="bi-search" />
          </Button>
        </InputGroup>
        {!onlyInput && search === '' && (
          <Form.Label className="fst-italic text-white text-start mt-2">
            Start searching by typing in the field
          </Form.Label>
        )}
      </Form.Group>
    </Form>
  );
};

export default SearchInput;