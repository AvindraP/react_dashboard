import react, { useState, useEffect, useRef } from "react";

const TableFooter = ({ range, setPage, page, slice }) => {
  const ref = useRef(1);
  const [count, setCount] = useState(0);

  // useEffect(
  //   () => {
  //     // for (let index = 1; index <= 4; index++) {
  //     setInterval(() => {
  //       console.log(range);
  //       console.log(range[Math.floor(Math.random() * range.length)]);
  //       // var randVal = range[(Math.random() * range.length) | 0];
  //       // console.log(randVal);
  //       // setPage(randVal);
  //     }, 1000);

  //     console.log(range);

  //     // clearInterval(interval);
  //   },
  //   //miliseconds
  //   [ref]
  // );

  // useEffect(() => {
  //   if (slice.length < 1 && page !== 1) {
  //     setPage(page - 1);
  //     console.log(page - 1);
  //   }
  // }, [slice, page, setPage]);

  return (
    <div>
      {range.map((el, index) => (
        <button
          id="model"
          name="model"
          key={index}
          onClick={() => setPage(el)}
          ref={ref}
          //count={count}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;
