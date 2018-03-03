import React, {Component} from 'react'

/*Functional component


const SearchBar = () => {
  return <input/>;
}
*/

/*Class component

every class compnent has a property - 'state'.
Whenever state gets changed, the compnent and all of its
children will run render.

*/
class SearchBar extends Component{

  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  /*Class component MUST have render function defined!!!!*/
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term : event.target.value})}/>
      </div>
    )
  }
  /*Controlled element is the one whose value changes
  with the state.*/

}

export default SearchBar;
