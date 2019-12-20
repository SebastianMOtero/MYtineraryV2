import React from 'react';

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            photo: "",
            time: "",
            cost: "",
            comments: "",
            itineraryId: ""
        }
    }

    componentDidMount() {
        //metodo para conseguir la actiivity.??
    }
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default Activity;