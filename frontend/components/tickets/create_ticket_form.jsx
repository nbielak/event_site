import React from 'react';

class CreateTicketForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const ticket = Object.assign({}, this.state);
        this.props.createTicket(ticket)
    }

    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <h1>Tickets</h1>
                
                <label>Name</label>
                <input value="General Admission" />

                <label>Quantity</label>
                <input onChange={this.update("quantity")}
                    type="number"
                    placeholder="100" />

                <label>Price</label>
                <input onChange={this.update("price")} type="number" placeholder="15.00" />
                
            </div>
        );
    }
}

export default CreateTicketForm;