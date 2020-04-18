import React, { Component } from 'react';
import './AddComments.scss';
import avatar from './hacker-avatar.png';

 class AddComments extends Component {
    state = {
            name: '',
            comment: '',
            showWarningMessage: false,
    }

    handleChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearState = () => {
        this.setState({
            name:'',
            comment:'',
            showWarningMessage:false,
        })
    }
    onSubmit = e => {
        e.preventDefault();
        if(this.state.name && this.state.comment){
            return [this.props.addComment(this.state),this.clearState()];
         }
        else {this.setState({showWarningMessage: true})}

    }

    render() {
        return (
            <div className="comment-box">
                <img
                    src={avatar}
                    alt="avatar"
                    style={{width:'70px', paddingRight:'10px'}}
                />
                <div className="comment-box-form">
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="comment"></label>
                        <textarea className="text-area" value={this.state.comment} onChange={this.handleChange} placeholder="Add a comment..."/>
                        <input className="submit-input" type="submit" value="Add comment"/>
                        <label htmlFor='name'></label>
                        <input className="text-input" type="text" name="name" value={this.state.name} onChange={this.onInputChange} placeholder="Name"/>
                        {this.state.showWarningMessage && <p className="form__warning-message">Please fill out the form!</p>}
                    </form>
                </div>
            </div>

        )
    }
}

export default AddComments
