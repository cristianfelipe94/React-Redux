import React, {Component} from "react";
import { connect } from "react-redux";
import * as postActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class BlogPage extends Component {
    state = {
        posts: {
            title: ""
        }
    };

    handleChange = (event) => {
        const post = { ...this.state.posts, title: event.target.value };
        this.setState({posts: post});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(postActions.createPost(this.state.posts));
    }

    render () {
        console.log('Props are: ', this.props.posts);
        return (
            <div>
                <h1>Blog</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.posts.title} />
                    <input type="submit" />
                </form>
                { this.props.posts.map((post) => {
                    return (
                    <div key={post.title}>
                        <p>
                            {post.title}
                        </p>
                    </div>
                    )
                })}
            </div>
        )
    }
}

BlogPage.propTypes = {
    posts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(BlogPage);