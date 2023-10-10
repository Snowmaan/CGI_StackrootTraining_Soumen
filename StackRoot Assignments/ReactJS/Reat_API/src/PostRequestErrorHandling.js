import React from 'react';
import axios from 'axios';

class PostRequesErrorHandling extends React.Component {
    constructor() {
        super()
            this.state = {
                articleId: null,
                errorMessage: null
            };
    }
    
componentDidMount(){
// Simple POST request with a JSON body using axios with error handling.
    const article = {title:  "React Post Request Example" };
    axios.post('https://reqres.in/api/articles', article)
    .then(response => this.setState({articleId: response.data.id}))
    .catch(error=>{
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error)
    }    
    );
}

    render(){
            const { errorMessage } = this.state;
            return (
                <div className="card text-center m-3">
                    <h5 className="card-header">Simple POST Request</h5>
                    <div className="card-body">
                        Error: {errorMessage}
                </div>
            </div>
            );
        }
}

export default PostRequest ;
