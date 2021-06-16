import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';

var uniqid = require('uniqid');

const Animation = posed.div({
    visible: { opacity:1,applyAtStart :{display:"block"} },
    hidden: { opacity: 0,applyAtEnd :{display:"none"} }
});

class AddUser extends Component {
    state = {
        visible:true,
        name :"",
        department :"",
        salary : ""
    }
    addUser = (dispatch,e) => {
        e.preventDefault();
        const {name,department,salary} = this.state;
            const newUser = {
                id : uniqid(),
                name,
                salary,
                department
        }
            dispatch({type:"ADD_USER",payload:newUser});
    }

    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        const {visible,name,salary,department} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value; 
                    return (
                        <div className="col-md-8 mb-4">
                            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                            <Animation pose = {visible ? "visible" : "hidden"}>
                               <div className="card">
                                <div className="card-header">
                                    <h4 className="mt-3"> Add User Form</h4>
                                    <div className="card-body">
                                        <form onSubmit={this.addUser.bind(this,dispatch)}>
                                            <div className="form-group mb-2">
                                                <label className="mb-2" htmlFor="name">Name</label>
                                                <input type="text" name="name" id="id" placeholder="enter name..." className="form-control" value={name} onChange={this.changeInput}></input>
                                            </div>
                                            <div className="form-group mb-2">
                                                <label className="mb-2" htmlFor="department">Department</label>
                                                <input type="text" name="department" id="department" placeholder="enter department..." className="form-control" value={department} onChange={this.changeInput}></input>
                                            </div>
                                            <div className="form-group mb-2">
                                                <label className="mb-2" htmlFor="salary">Salary</label>
                                                <input type="text" name="salary" id="salary" placeholder="enter salary..." className="form-control" value={salary} onChange={this.changeInput}></input>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                 <button type="submit" className="btn btn-success btn-sm">Add User</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                         </Animation>
                        </div>
            
                    )
                }
            }
        </UserConsumer>       
    }
}

export default  AddUser;
