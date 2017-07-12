import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { greet } from '../actions/index';

class Greet extends Component {
    constructor(props) {
        super(props);
        this.updateGreeting.bind(this);
    }

    updateGreeting(text) {
        this.props.greet(text);
    }

    render () {
        return (
            <div>
                <input type="text" value={this.props.name} 
                    onChange={(e) => {this.updateGreeting(e.target.value)} }/>
                <span>Hello {this.props.name}</span>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    console.log(state)
   return { name: state.setGreeting.name };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ greet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Greet);