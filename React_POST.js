import React from 'react';
import axios from 'axios';

class PostForm extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		userId: '',
  		title: '',
  		body: ''
  	}
  }
  
  changeHandler = (e) => {
  	this.setState({[e.target.name]: e.target.value})
  }
  
  submitHandler = e => {
  	e.preventDefault()
  	console.log(this.state)
  	axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
  		.then(response => {
  			console.log(response)
  		})
  		.catch(error => console.log(error))
  }
  
  render() {
  	const { userId, title, body } = this.state;
  	return (
  		<form onSubmit={this.submitHandler} >
  			<div>
  				Name: <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
  			</div>
  			<div>
  				Title: <input type="text" name="title" value={title} onChange={this.changeHandler} />
  			</div>
  			<div>
  				Text: <input type="text" name="body" value={body} onChange={this.changeHandler} />
  			</div>
  			<button type="submit">Submit</button>
  		</form>
  	)
  }
}

export default PostForm ;
