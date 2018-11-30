import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0,0);
    this.props.fetchAllEvents()
      .then(action => this.setState({events: action.events}))
      .then(action => this.props.fetchAllCategories())
      .then(action => this.props.fetchAllEventCategories())
  }

  handleClick(e) {
    this.props.history.push('/browse');
  }

  render() {
    return (
      <div className="splash-page">
        <section className="splash-banner">
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
                  return (<EventIndexItem key={event.id} event={event} eventCategories={this.props.eventCategories} categories={this.props.categories}/>);
                })}
              </ul>
            </div>
          </div>
          <div className="see-more-button-wrapper">
            <button onClick={this.handleClick} className="see-more-button">See More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventIndex;
