import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { greet } from '../actions/index.jsx';

class Greet extends Component {
    constructor(props) {
        super(props);

        this.updateGreeting.bind(this);        
    }

    updateGreeting(text) {
        this.props.greet(text);
    }

    render () {
        const state = this.props;

        return (
            <div>
                <input type="text" value={state.name} 
                    onChange={(e) => {this.updateGreeting(e.target.value)} }/>
                <span>Hello {state.name}</span>
            </div>
        );
    }
}

const mapStateToProps = ( state, ownProps ) => {
   return { name: state.greet.name || ownProps.name };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ greet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Greet);