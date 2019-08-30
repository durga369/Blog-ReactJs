import React, { Component } from "react";

class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="pager">
        <li className="next">
          <a href="#">Older Posts &rarr;</a>
        </li>
      </ul>
    );
  }
}

export default Pager;
