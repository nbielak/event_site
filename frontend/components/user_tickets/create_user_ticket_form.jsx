import React from 'react';

class CreateUserTicketForm extends React.Component {
  constructor(props) {
    super(props);
    this.user_ticket = {
        userId: this.props.userId,
        ticketId: this.props.ticketId
    };
    this.quantity = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.numbers = {
        "1": 1,
        "2": 2,
        "3": 3
    }
    this.closeModal = this.props.closeModal;
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity() {
      return e => {
          this.quantity = this.numbers[e.target.value];
          return this.quantity;
      }
  }

  handleSubmit(e) {
      e.preventDefault();
      const userTicket = Object.assign({}, {userId: this.props.userId, ticketId: this.props.ticketId});
      for (let i = 0; i < this.quantity; i ++) {
          if (i === (this.quantity - 1)) {
              return this.props.createUserTicket(userTicket).then(action =>{
                  this.closeModal();
              });
          }
          this.props.createUserTicket(userTicket);
      }
  }

  render(){
    if (!this.props.tickets || !this.props.ticketId) {
      return null;
    }
    return <div className="user-ticket-form-wrapper">
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
                <label className="ticket-name">
                  {this.props.tickets[this.props.ticketId].name}
                </label>
                <label className="ticket-price">
                  ${this.props.tickets[this.props.ticketId].price}
                </label>
              </div>

              <select className="quantity-selector" onChange={this.updateQuantity()}>
                <option selected disabled>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div id="user-ticket-footer" className="user-ticket-header">
            <div>
              <label className="quantity-footer" />
            </div>

            <input className="register-button" type="submit" align="center" value="CHECKOUT" />
          </div>
        </form>
      </div>;
  }
}

export default CreateUserTicketForm;