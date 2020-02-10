import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        }, () => console.log(this.state.items, 'state data'))
      })
      .catch(err => console.log(err, 'could fetch data'))
  }
  render() {

    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    }
    else {
      return (
        <div className="App">
          <b> Data has been loaded</b>
          {/* <ul>
        {items.map(item =>(
           <table key={item.id}>
           <b>FirstName:</b>{item.first_name}<b>LastName:</b>{item.last_name}<b>CompanyName:</b>{item.company_name}<b>City:</b>{item.city}<b>State:</b>{item.state}
           <b>Zip:</b>{item.zip}<b>Email:</b>{item.email}<b>Web:</b>{item.web}<b>AGE:</b>{item.age}
           </table>
        ))};
      </ul> */}
          {this.state.items.length > 0 ? <table className=' mytable display'>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>CompanyName</th>
                <th>City</th>
                <th>State</th>
                <th>Zip code</th>
                <th>Email id</th>
                <th>Web</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.length > 0 ?
                this.state.items.map(item => {
                  return <tr>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.company_name}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.zip}</td>
                    <td>{item.email}</td>
                    <td>{item.web}</td>
                    <td>{item.age}</td>
                  </tr>


                })
                : 'null'}
            </tbody>
          </table> : 'not found'}

        </div>
      );
    }
  }
}
export default App;
