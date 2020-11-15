import React from 'react';
import axios from 'axios';

class PostList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			errorMsg: ''
		}
	}
	
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then( response => {
				console.log(response)
				this.setState({posts: response.data})
			})
			.catch(	error => {
				console.log("error")
				this.setState({errorMsg: 'Error retreiveing data'})		
			})
	}
	
  render() {
  	const { posts, errorMsg } = this.state
  	return (
  	  <div>
  	  	<h1>List of Post</h1>
  	  	{
  	  		posts.length ?
  	  		posts.map(post => <div key={post.id}>{post.title}</div>) :
  	  		null
  	  	}
  	  	{errorMsg ? <div>{ errorMsg }</div> : null}
  	  </div>
  	)
  }
}

export default PostList ;
