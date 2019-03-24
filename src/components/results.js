import React from 'react';

class Result extends React.Component {
    render() {
        return(
            <div>
                <p>Best Halal Restaurant nearby: </p>
                {this.props.name && <p className="restaurant__key">Name: {this.props.name }</p>}
                {this.props.location && <p className="restaurant__key">Location: {this.props.location}</p>}
                {this.props.error && <p className="restaurant__error">{this.props.error}</p>}
            </div>
        )
    }
}

export default Result;