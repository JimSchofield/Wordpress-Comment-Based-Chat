import Comment from './Components/Comment';
import InputBar from './Components/InputBar';
import Login from './Components/Login';

const ulStyle = {
    margin: '0',
    padding: '1em',
    background: '#f3f3f3',
    color: '#222',
}

const MockPerson = {
    author_email: 'test@gmail.com',
    author_name: 'Mock User',
    author_url: null,
    content: 'Mock comment',
    post: 15
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            comments: [],
            author_name: null,
        }

        this.postComment = this.postComment.bind(this);
        this.refreshComments = this.refreshComments.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    componentDidMount() {
        this.refreshComments();
        setInterval(this.refreshComments, 2000);
    }

    postComment(messageObject) {

        const { text } = messageObject;
        const { author_name } = this.state;

        //temporarily update comment list to make it appear real time
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    author_name: author_name,
                    content: {
                        rendered: text
                    }
                }
            ]
        })

        fetch(`/wp-json/wp/v2/comments?author_name=${author_name}&email=jbob@gmail.com&content=${text}&post=15`,
            {
                method: 'post'
            }
        )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .then(this.refreshComments);
    }

    refreshComments() {
        console.log("Polling api");
        fetch('/wp-json/wp/v2/comments')
            .then((res) => res.json())
            .then((comments) => {
                comments.reverse();
                this.setState({ comments });
            });
    }

    logIn(author_name) {
        this.setState({ author_name });
    }

    render() {
        return (
            <div className="commentChat" style={{ margin: '0 1em' }}>
                <h1>Comment-chat!</h1>
                {this.state.author_name ?
                    (
                        [<ul style={ulStyle}>
                            {this.state.comments.length &&
                                this.state.comments.map((el) => {
                                    return (
                                        <Comment comment={el} />
                                    )
                                })}
                        </ul>,
                        <InputBar post={this.postComment} />]
                    )
                :
                    (
                        <div>
                            <Login logIn={this.logIn} />
                        </div>
                    )
                }
            </div>
            );
        }
    }
    
window.onload = function () {
    const app = document.querySelector('#commentchat');
    if (app) {
                    ReactDOM.render(<App />, app);
                }
}