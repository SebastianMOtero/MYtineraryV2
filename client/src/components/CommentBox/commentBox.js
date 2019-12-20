import React from 'react';
import './commentBox.css';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <p>{this.props.comment.username +" | "+this.props.comment.comment}</p>
                {/* <p>{this.props.comment.comment}</p> */}
                {/* {console.log(this.props.comment)} */}
            </div>
        )
    }
}

export default CommentBox;