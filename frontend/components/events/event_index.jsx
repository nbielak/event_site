import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount () {
    this.props.fetchAllEvents()
  }

  render() {
    return (
      <div className="splash-page">
        <section className="splash-banner">
        </section>
        <div className="splash-page-content">
          <div className="events-for-you">
            <div className="events-for-you-title-wrapper">
              <div className="events-for-you-second-wrapper">
                <p className="events-for-you-title">Events for you in San Francisco</p>
              </div>

            </div>
            <div className="events-for-you-list-wrapper">
              <ul className="events-for-you-list">
                {this.props.events.map(event => {
                  return (<EventIndexItem key={event.id} event={event} />);
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventIndex;
