import React from 'react';

class CreateUserTicketForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userId: this.props.userId,
        ticketId: null
    };
    this.quantity = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.numbers = {
        "1": 1,
        "2": 2,
        "3": 3
    }
    this.ticket = null;
  }

  componentWillMount() {
    this.props.fetchAllTickets(this.props.eventId).then(res=>{
        // debugger;
        let ticket = Object.values(res.tickets)[0];
        this.setState({ ticketId: ticket.id });
        this.ticket = ticket;
    });
    
    // debugger;
  }

  updateQuantity() {
      return e => {
          this.quantity = this.numbers[e.target.value];
          return this.quantity;
      }
  }

  handleSubmit(e) {
      e.preventDefault();
      const userTicket = Object.assign({}, this.state);
      
      for (let i = 0; i < this.quantity; i ++) {
          if (i === (this.quantity - 1)) {
              return this.props.createUserTicket(userTicket).then(action =>
                  this.props.history.push(`/events/${this.props.eventId}`)
              );
          }
          this.props.createUserTicket(userTicket);
      }
  }

  name() {
      if (this.ticket){
          return this.ticket.name
      } else {
          return "name"
      }
  }

  price() {
      if (this.ticket){
          return this.ticket.price;
      } else {
          return "price";
      }
  }

  openModal() {
      this.setState({ isModalOpen: true })
  }

  closeModal() {
      this.setState({ isModalOpen: false })
  }

  render(){
    // debugger;
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>{this.name()}</label>
                <label>{this.price()}</label>
                <select onChange={this.updateQuantity()} size="3" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <input type="submit" value="Register" />
            </form>
        </div>
    );
  }
}

export default CreateUserTicketForm;