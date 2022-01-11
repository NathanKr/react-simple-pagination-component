import { useEffect, useState } from "react";
import "./Pagination.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const Pagination = ({ count, chunk, pageChanged }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  useEffect(() => pageChanged(1), []);

  function left() {
    if (currentPageNumber > 1) {
      const newCurrentPageNumber = currentPageNumber - 1;
      setCurrentPageNumber(newCurrentPageNumber);
      pageChanged(newCurrentPageNumber);
    }
  }

  function right() {
    if (currentPageNumber < count) {
      const newCurrentPageNumber = currentPageNumber + 1;
      setCurrentPageNumber(newCurrentPageNumber);
      pageChanged(newCurrentPageNumber);
    }
  }

  let elements = [];

  for (
    let pageNumber = Math.min(currentPageNumber, count - chunk);
    pageNumber < Math.min(currentPageNumber + chunk, count+1);
    pageNumber++
  ) {
    const style =
      pageNumber === currentPageNumber
        ? { color: "blue", fontWeight: "bold" }
        : {};
    const element = (
      <span style={style} key={pageNumber}>
        {pageNumber}
      </span>
    );
    elements.push(element);
  }

  return (
    <div className="Pagination">
      <BsArrowLeftCircle onClick={left} />
      {elements}
      <BsArrowRightCircle onClick={right} />
    </div>
  );
};

export default Pagination;
