
import React from 'react';
import { Link } from 'react-router-dom';

const Modal = (props) => (<>
<div className="modal fade" id="sign-out">
<div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title">Want to leave</h4>
            <button type="button" className="close" data-dismiss="modal">&items;</button>
        </div>
        <div className="modal-body">
            Press logout to leave
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-success" data-dismiss="model">Stay Here</button>
            <button type="button" className="btn btn-danger" data-dismiss="model">Logout</button>
        </div>
    </div>
</div>
</div>
</>);

export default Modal;