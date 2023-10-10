import React, { Component } from "react";

class AddPost extends Component {
    state = {
        title: '',
    };

    handleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { title } = this.state;

    // Send a POST request to th JSON Server to create a new post
    fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    })

    .then((response) => response.json())
    .then((newPost) =>{
        // Handle the new post data, e.g., update state or display a success message.
        console.log('New post:', newPost);

        //clear the input field.
        this.setState({ title: '' });
    }
 )
    .catch((error) =>{
        console.log('Error creating post:', error);
    });

     window.location.reload();
    };

render() {
    const { title } = this.state;

    return (
        <div>
            <h1>Add a New Post</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={this.handleChange}
                    />
            </div>
            <button type="submit">Add Post</button>
        </form>
    </div>
);
}
}

export default AddPost;