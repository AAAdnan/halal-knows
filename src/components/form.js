import React from 'react';

class Form extends React.Component {

    render() {

        return(
            <form onSubmit={this.props.loadRestaurant}>
                <input type="text" name="city" placeholder="City"/>
                <button>Get Restaurant</button>
            </form>
        )
    }
}

export default Form;