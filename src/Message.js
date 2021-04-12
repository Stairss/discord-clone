import { Avatar } from '@material-ui/core';
import './Message.css';
const Message = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>stairss
                <span className="message__timestamp">this is a timestamp</span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    );
}

export default Message;