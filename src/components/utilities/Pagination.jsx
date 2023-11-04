const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  const handlePrevPage = () => {
    scrollTop();
    setPage((prevPage) => prevPage - 1);
  }

  const handleNextPage = () => {
    scrollTop();
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="flex justify-center py-4 px-2 text-2xl gap-4 text-color-primary">
      {
        page > 1 &&
        <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
      }
      <p>{page} of {lastPage}</p>
      {
        page < lastPage &&
        <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
      }
    </div>
  )
}

export default Pagination;