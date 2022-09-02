import React, { useState } from 'react';
import './index.css';

const Pagination = (
  props) => {

  const [page, setPage] = useState(1)

  const handleClick = (pageTarget, type) => {
    if (pageTarget < 1 && type === 'prev') {
      props.setNumberPage(1)
      setPage(1)
    } else if (pageTarget > 5 && type === 'prox') {
      props.setNumberPage(5)
      setPage(5)
    }
    else {
      setPage(pageTarget)
      if (pageTarget === 1) {
        props.setNumberPage(1)
      }
      if (pageTarget === 2) {
        props.setNumberPage(2)
      }
      if (pageTarget === 3) {
        props.setNumberPage(3)
      }
      if (pageTarget === 4) {
        props.setNumberPage(4)
      }
      if (pageTarget === 5) {
        props.setNumberPage(5)
      }
    }
  }

  return (
    <div className="pagination">
      <button
        className='pagination-button'
        onClick={
          () => handleClick(page - 1, 'prev')}
      >
        <h1>{`<`}</h1>
      </button>
      <div className='pagination-button show-page-button'
      >
        {`${page}/5`}
      </div>
      <button
        className='pagination-button'
        onClick={() => handleClick(page + 1, 'prox')}
      >
        <h1>{`>`}</h1>
      </button>
    </div>
  );
};

export default Pagination;
