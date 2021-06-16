import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'

class User extends Component {
    // state = {
    //     isVisible : true
    // }
    static defaultProps = {
        name : "Bilgi Yok",
        salary : "Bilgi Yok",
        department: "Bilgi Yok" 
    }
    constructor(props){
        super(props);
        this.state = {
          isVisible : true
        }

    }

    // onClickEvent(e){
    //     console.log(this);
    //     //bu da bir yöntem
    //     // this.onClickEvent = this.onClickEvent.bind(this);
    // }

    //arrow func oto bind ettiği için tekrar bind etmeye gerek kalmıyor.
    onClickEvent = (e) => {    
    this.setState({
        isVisible : !this.state.isVisible
     }) 
    } 

    onDeleteUser = (dispatch,e) => {
        const {id} = this.props;

        dispatch({type : "DELETE_USER" , payload:id });
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render() {
        //destructing 
        const {name,department,salary} = this.props;
        const {isVisible} = this.state;

        return (<UserConsumer>

            {
                value => {
                const {dispatch} = value;
                    return (
                            <div className="col-md-8 mb-4">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between" onClick = {this.onClickEvent} style ={isVisible ? {backgroundColor :"#848484",color : "white",cursor:"pointer"} : {cursor:"pointer"}}>
                                        <h4 className="d-inline" style={{margin:0}}>{name}</h4>
                                        <i className="far fa-trash-alt" onClick={this.onDeleteUser.bind(this,dispatch)} style={{cursor :"pointer",alignSelf:"center"}}></i>
                                    </div>
                                    {
                                        isVisible ? 
                                        <div className="card-body">
                                        <p className="card-text">Maaş : {salary}</p>
                                        <p className="card-text">Departman : {department}</p>
                                    </div> : null
                                    }
                                </div>
                            </div>
                            )
                }
            }
        </UserConsumer>)
    }
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}

// User.defaultProps = {
//     name : "Bilgi Yok",
//     salary : "Bilgi Yok",
//     department: "Bilgi Yok" 
// }

export default User;