import React from 'react';

class CategoryEvents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getEventsByCategory(ownProps.match.params.category)
    }

    render() {
        if (!this.props.category) {
            return null;
        }
        return (
            <div>
                {this.props.category}
            </div>
        )
    }
}

export default CategoryEvents;