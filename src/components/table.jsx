import data from "./data";

const Table1 = () => {
  console.log(data);
  return (
    <>
      <table className="table" style={{ backgroundColor: "#00000" }}>
        <tbody>
          {data.map((el) => {
            <tr> {el.map((k, v) => {})}</tr>;
          })}
        </tbody>
      </table>
    </>
  );
};

const Table = () => {

  

  return (
    <>
      <table className="table" style={{ backgroundColor: "#00000" }}>
        <thead
          className="neonText"
          style={{ zindex: "1080", background: "#80e1f2cb" }}
        >
          <th scope="col">DATE</th>
          <th scope="col">Col 2</th>
          <th scope="col">Col 3</th>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
