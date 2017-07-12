import React, { Component } from 'react';
import { connect } from 'react-redux';
import { greet } from '../actions/index';

class Greet extends Component {
    constructor(props) {
        super(props);

        this.state = { name: props.name };
        this.updateGreeting.bind(this);
    }

    updateGreeting(text) {
        this.props.greet(text);
        //this.setState({name:text});
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

const mapStateToProps = (state) => {
   return { name: state.name };
}

export default connect(mapStateToProps, { greet })(Greet);