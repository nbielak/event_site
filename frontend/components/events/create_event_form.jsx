import React from 'react';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state)
    this.props.createEvent(event).then(this.props.history.push(`/events/${event.id}`))
  }

  render() {
    return (
      <h1>hello</h1>
    );
  }
}

export default CreateEventForm;
