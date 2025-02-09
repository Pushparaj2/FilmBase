function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className="bg-gray-400 p-4 mt-5 flex justify-center">
      <div onClick={handlePrev} className="cursor-pointer px-5">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={handleNext} className="cursor-pointer px-5">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
