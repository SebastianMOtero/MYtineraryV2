import React from 'react';
import { ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import './CityBox.css'

class CityBox extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            city: []
        };
    }

    render() {  
        if (this.props.city.image) {
            var url = ('http://localhost:5000/' + this.props.city.image.split("\\").join("/"));
        } 
        return(
            <div className="CityBox">
                <Link to = {{ pathname: "/cities/" + this.props.city._id }} > 
                    <ListGroupItem className="CityBoxList" style={{ backgroundImage: `url(${url})`}}>
                        <h5>{this.props.city.name}</h5> {}
                    </ListGroupItem> 
                </Link>
            </div>
        )
    }
}

export default CityBox;