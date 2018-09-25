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
    this.closeModal = this.props.closeModal;
  }

  componentDidMount() {
    this.props.fetchAllTickets(this.props.eventId).then(res=>{
        // debugger;
        let ticket = Object.values(res.tickets)[0];
        this.setState({ ticketId: ticket.id });
        this.setState({ ticket });
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
              return this.props.createUserTicket(userTicket).then(action =>{
                  this.props.closeModal();
              });
          }
          this.props.createUserTicket(userTicket);
      }
  }

  render(){
    if (!this.state.ticket) {
        return null;
    }
    return (
        <div className="user-ticket-form-wrapper">
            <div className="user-ticket-header">
                <div className="ticket-label-wrapper">
                    <label>Select Ticket</label>
                </div>

                <div className="close-modal-button-wrapper">
                    <button onClick={() => this.closeModal()}>X</button>
                </div>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-body">
                    <div className="ticket-body">
                        <div className="ticket-info">
                            <label>{this.state.ticket.name}</label>
                            <label>{this.state.ticket.price}</label>
                        </div>

                        <select onChange={this.updateQuantity()} >
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                </div>

                <div id="user-ticket-footer" className="user-ticket-header">
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
  }
}

export default CreateUserTicketForm;