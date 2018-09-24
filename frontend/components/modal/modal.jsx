import React from 'react';
import CreateUserTicketFormContainer from "../user_tickets/create_user_ticket_form_container";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        if (this.props.modal === false) {
            return null
        }

        return (
            <div className="backdrop" onClick={this.closeModal}>
                <div className="modal">
                    <h1>HELLO</h1>
                </div>
            </div>
        );
    }
}

export default Modal;