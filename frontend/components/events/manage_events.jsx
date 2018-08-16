import React from 'react';
import ManageEventIndexItem from './manage_event_index_item';
import { withRouter } from 'react-router-dom';

class ManageEvents extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount () {
    this.props.fetchAllEvents()
  }

  render() {
    return (
      <div className="manage-page">
        <div className="user-events">
          <div className="events-for-you-title-wrapper">
            <div className="events-for-you-second-wrapper">
              <p className="events-for-you-title">Mangage Events</p>
            </div>

          </div>
          <div className="events-for-you-list-wrapper">
            <ul className="events-for-you-list">
              {this.props.events.map(event => {
                return (<ManageEventIndexItem key={event.id} event={event} />);
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ManageEvents);
