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
          <img className="splash-image"src="https://yropenmic.com/wp-content/uploads/2017/07/cropped-openmic_background-1.jpeg"/>
        </section>
        <div className="splash-page-content">
          <div className="splash-overflow-search">
            <div className="splash-search">
              <h1 className="splash-search-title">Find your next experience</h1>

            <div className="splash-search-bar">
            </div>
            </div>
          </div>
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
          <div className="see-more-button-wrapper">
            <button className="see-more-button">See More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventIndex;
