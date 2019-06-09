import React from 'react';


class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    const term = event.target.value
    this.setState({ term });
  }

  onTermSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui search-bar segmant">
        <form
          className="ui form"
          onSubmit={this.onTermSubmit}
        >
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
