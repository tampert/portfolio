import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';

const DEFAULT_DATA = [{
  id: 1,
  name:'Henk',
  age:100
},{
  id: 2,
  name:'Willem',
  age:55
},{
  id: 3,
  name:'Thea',
  age:33
},{
  id: 4,
  name:'Paula',
  age:65
},{
  id: 5,
  name:'Joep',
  age:76
},{
  id: 6,
  name:'Joost',
  age:2
}]

const Code = () => {
  const [people, setPeople] = useState(DEFAULT_DATA)
  const [filtered, SetFiltered] = useState([])

  const handleSort = ({target}) => {
    const sorted = [...people].sort((a, b) => {
      return a[target.dataset.sort] > b[target.dataset.sort] ? 1 : -1;
    });
    setPeople(sorted);
  }

  const onChangeHandle = ({target}) => {
    if(target.value === ""){
      SetFiltered([]);
      return;
    }
    // https://stackoverflow.com/questions/42035717/js-filter-object-array-for-partial-matches
    const filter = [...people].filter((person) =>{
      return person.name.toLowerCase().includes(target.value.toLowerCase())
    })
    SetFiltered(filter);
  }
    return (
      <>
      <Row>
        <Col>
        <p>Here is try to show some javascript array function examples</p>
          <ul>
            <li>map</li>
            <li>sort</li>
            <li>reduce</li>
            <li>forEach</li>
            <li>find</li>
          </ul>
          </Col>
      </Row>
      <Row>
        <Col>
          <div className="form-group row">
            <label htmlFor="searchid" className="col-sm-2 col-form-label">Search</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="searchid" aria-describedby="searchHelp" placeholder="Enter search term" onChange={onChangeHandle} />
              <small id="searchHelp" className="form-text text-muted">Search and show result based on Ternary operator in React</small>
            </div>
          </div>
          { filtered.length > 0  ? ( 
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>age</th>
              </tr>
            </thead>
            <tbody>
            { filtered.map((person,i) => {
              return (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.age}</td>
              </tr>
              )
            })}
          </tbody></table>): null }
          </Col>
          <Col>
          <h4>data table</h4>
          <table>
            <thead>
              <tr>
              <th>name</th>
              <th>age</th>
              </tr>
            </thead>
            <tbody>
            {people.map((person,index)=> {
              return(
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
          <button onClick={handleSort} data-sort="name">sort on name</button>
          <button onClick={handleSort} data-sort="age">sort on age</button>
          </Col>
      </Row>
      </>
    )
}

export default Code;