import React, {useState} from 'react';

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

  const handleSortName = () => {
    console.log('sort on Name')
  }

  const handleSortAge = () => {
    console.log('sort on Age')
  }

    return (
      <div className='route'>
          <p>Here is try to show some javascript array function examples</p>
          <ul>
            <li>map</li>
            <li>sort</li>
            <li>reduce</li>
            <li>forEach</li>
            <li>find</li>
          </ul>
          <table>
            {people.map((person,index)=> {
              return(
                <tr>
                  <td key={index}>{person.name}</td>
                  <td>{person.age}</td>
                </tr>
              )
            })}
          </table>
          <button onClick={handleSortName}>sort on name</button>
          <button onClick={handleSortAge}>sort on age</button>
      </div>
    )
}

export default Code;