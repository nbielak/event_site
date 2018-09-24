import React from 'react';
import CreateUserTicketFormContainer from "../user_tickets/create_user_ticket_form_container";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.modal;
        console.log(this.props);
    }

    render() {
        // if (this.state.modal === false) {
        //     return null
        // }
        console.log("render");
        debugger;
        return (
            <div className="backdrop" onClick={() => this.props.closeModal()}>
                <div className="modal">
                    <CreateUserTicketFormContainer />
                </div>
            </div>
        );
    }
}

export default Modal;