import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { expandItinerary } from '../../actions/itineraryActions'
import "./ItineraryBox.css";
import { Input, Label, FormGroup } from 'reactstrap';
// import { Row, Col } from 'react-bootstrap';
import OkComment from '../../assets/images/arrowEnter.png'
import favStar from '../../star.png';
import CommentBox from '../CommentBox/commentBox';

import CarrouselActivities from '../CarrouselActivities/carrouselActivities';
import { getActivities } from '../../actions/activityActions';
import { getComments, addComment } from '../../actions/commentAction'
import { addFavourite, remFavourite } from '../../actions/userActions';

class ItineraryBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            activities: [],
            comments: [],
            addComment: "",
            username: "",
            favourites: [],
            userID: ""
        }
    }

    showActivities = async () => {
        await this.props.getActivities(this.props.itinerary._id);
        this.props.expandItinerary();
        this.setState({isExpanded: !this.state.isExpanded})
        console.log(this.state.isExpanded)
        await this.props.getComments(this.props.itinerary._id);
        this.setState({comments: this.props.comments});
        console.log(this.state.comments)
    }

    handleFav = async () => {
        // console.log(this.props.user.favourites);
        console.log(this.state.favourites)
        if (this.props.isLogged && this.props.favourites !==undefined) {
            let data = {
                id: this.props.userID,
	            itineraryId : this.props.itinerary._id
            }
            if (this.props.favourites.includes(this.props.itinerary._id)) {
                //es fav
                console.log('es fav')
                await this.props.remFavourite(data)

            } else {
                //no es fav
                console.log('no es fav')
                await this.props.addFavourite(data)
            }
            this.setState({favourites: this.props.favourites})
            console.log(this.state.favourites)
        } else {
            alert('No esta logueado')
        }
        // this.state.user.favourites
    }

    

    eHandleShowActivities = async () => {
        console.log('show activities')
        console.log(this.props.itinerary._id)
        await this.props.getActivities(this.props.itinerary._id);
        // this.setState({
        //     activites: this.props.activities
        // })
        // console.log(this.props)
        // console.log(this.state)
        
    }
    
    eHandleBoxComment = (e) => {
        if (this.props.isLogged) {
            this.setState({addComment: e.target.value})
            let asd =this.props.favourites
            this.setState({favourites: asd})
        }
    }

    eHandleOkComment = async() => {
        console.log(this.state.addComment)
        let data= {
            itineraryId: this.props.itinerary._id,
            comment: this.state.addComment,
            username: this.props.username
        }
        if (this.props.isLogged) {
            await this.props.addComment(data);
            document.getElementById("InputComments").value=""; 
        } else {
            alert("No esta logueado");
        }
   
        // this.setState({
        //     item: ""
        // })
    }
    // componentDidMount() {
    //     if (this.props.favourites != undefined) {
    //         this.setState({favourites: this.props.favourites})
    //     }
    //     console.log(this.state.favourites.includes(this.props.itineraryId))
    // }
    render() {
        console.log( this.props.userID);
        return (
            <div className="ItineraryBox">
                {/* <Link to = {{ pathname: "/cities/" + this.props.city._id }}> */}
                    <ListGroupItem className = "ItineraryBoxList">

                    <Row >
                    <Col xs={3}>
                        <Row id="ItineraryprofilePic">
                            prorfilePic
                        </Row>
                        <Row id="ItineraryprofileName">
                            {this.props.itinerary.username}
                        </Row>
                    </Col>
                    <Col xs={9} id="ItineraryColumnData">
                        <Row id="ItineraryTitle">
                            {this.props.itinerary.mytineraryName}
                        </Row>
                        <Row>
                            <Col id="ItineraryLikes">
                                Likes: {this.props.itinerary.rating}
                            </Col>
                            <Col id="ItineraryDuration">
                                {this.props.itinerary.duration} hours
                            </Col>
                            <Col id="ItineraryPrice">
                                {this.props.itinerary.price}
                            </Col>
                        </Row>
                        <Row id="ItineraryHashtagList">
                            <Col>
                                {this.props.itinerary.hashtag.map( hashtag => <div id="ItineraryHashtag" key={hashtag} >#{hashtag}</div>)}
                            </Col>

                            <Col>
                            {
                               
                                !this.props.isLogged || this.props.favourites===undefined ? 
                                <img id="favIcon" style={{backgroundColor: '#FAEBD7'}} onClick={this.handleFav} src={favStar} alt="fav"/> :
                                (
                                    
                                    this.props.favourites.includes(this.props.itinerary._id) ? 
                                    <img id="favIcon" style={{backgroundColor: '#ffff00'}} onClick={this.handleFav} src={favStar} alt="fav"/> :
                                    <img id="favIcon" style={{backgroundColor: '#ffffff'}} onClick={this.handleFav} src={favStar} alt="fav"/>
                                )
                            }
                                {/* {this.props.favourites.includes(this.props.itinerary._id) ? 
                                <img id="favIcon" style={{backgroundColor: '#ffff00'}} onClick={this.handleFav} src={favStar}/> :
                                <img id="favIcon" style={{backgroundColor: '#ffffff'}} onClick={this.handleFav} src={favStar}/>
                                } */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            this.state.isExpanded === true && 
                            <div>
                                {/* {this.eHandleShowActivities()} */}
                                {console.log(this.props.activities)}
                            <CarrouselActivities activities={this.props.activities}/>
                            <FormGroup className='formgrupo'>
                                <Label for="Comments">Comments</Label>
                                
                                {this.state.comments.map( x => <CommentBox key={x._id} comment={x} /> )}
                                
                                <Row>
                                    <Col xs={10} >
                                        <Input type="textarea"   id="InputComments" onChange={this.eHandleBoxComment} name="boxComment"/>
                                    </Col>
                                    <Col xs={2}>
                                        <img src={OkComment} onClick={this.eHandleOkComment} className="ArrowEnter" alt="Enter" name="addComment"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            </div>
                        }

                        <button onClick={this.showActivities} 
                                id="ButtonViewAll"> {this.state.isExpanded ? 'close' : 'v View All v'}</button>
                    </Col>
                </Row>

                        {/* <h5>{this.props.itinerary.title}</h5> */}
                    </ListGroupItem> 
                {/* </Link> */}
            </div>
        )
    }
}

//expandItinerary()
const mapStateToProps = (state) => {
    //Voy a tomar el estado y lo voy a generar como propiedad para el componente\
    return {
        // isExpanded: state.itineraryReducer.isExpanded,
        // activities: state.activityReducer
        activities: state.activityReducer.activities,
        comments: state.commentReducer.comments,
        username: state.userReducer.user.username,
        favourites: state.userReducer.user.favourites,
        isLogged: state.userReducer.isLogged,
        userID: state.userReducer.user._id
    };
};

//regresa creadores de acciones (action creators)
const mapDispatchToProps = (dispatch) => {
    return {
        expandItinerary: () => dispatch(expandItinerary()),
        getActivities: (itineraryId) => dispatch(getActivities(itineraryId)),
        getComments: (itineraryId) => dispatch(getComments(itineraryId)),
        addComment: (data) => dispatch(addComment(data)),
        // getFavourites: (userId) => dispatch(getFavourites(userId))
        addFavourite: (data) => dispatch(addFavourite(data)),
        remFavourite: (data) => dispatch(remFavourite(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryBox);
// export default  ItineraryBox;