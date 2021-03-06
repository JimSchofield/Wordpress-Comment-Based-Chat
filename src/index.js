import Comment from './Components/Comment';
import InputBar from './Components/InputBar';

const ulStyle = {
    margin: '0',
    padding: '1em',
    background: '#f3f3f3',
    color: '#222',
}

class App extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			comments: [],
			wp_api_root: props.wpApiSettings.root,
			wp_api_nonce: props.wpApiSettings.nonce,
			chatroom_id: props.chatroomVars.chatroomID,
			author: props.chatroomVars.userID,
			author_email: props.chatroomVars.userEmail,
			author_ip: props.chatroomVars.userIP,
			author_name: props.chatroomVars.userDisplayName,
			author_url: props.chatroomVars.userURL,
			author_user_agent: props.chatroomVars.userAgent,
			author_avatar: props.chatroomVars.userAvatar,
		}

		this.postComment = this.postComment.bind(this);
		this.refreshComments = this.refreshComments.bind(this);
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
					},
					date: Date.now(),
                }
            ]
        })

		fetch(`${this.state.wp_api_root}wp/v2/comments`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-WP-NONCE': this.state.wp_api_nonce,
				},
				credentials: 'same-origin',
				body: JSON.stringify({
					author: this.state.author,
					content: text,
					post: this.state.chatroom_id,
				}),
			}
		)
		.then((res) => res.json())
		.then((data) => console.log(data))
		.then(this.refreshComments);
    }

	refreshComments() {
		console.log('Polling api');
		fetch(`${this.state.wp_api_root}wp/v2/comments?post=${this.state.chatroom_id}`)
			.then((res) => res.json())
			.then((comments) => {
					comments.reverse();
					console.log(comments);
					this.setState({ comments });
				});
	}

    render() {
        return (
            <div className="commentChat" style={{ margin: '0 1em' }}>
				<ul style={ulStyle}>
					{this.state.comments.length ?
						this.state.comments.map((el) => {
							return (
								<Comment comment={el} />
							)
						})
						:
						<strong>No messages yet!</strong>
					}
				</ul>
				<InputBar post={this.postComment} />
            </div>
		);
	}
}

window.onload = function () {

	const app = document.querySelector('#commentchat');
	const chatroomVars = window.chatroomVars;
	const wpApiSettings = window.wpApiSettings;

	if ( app && chatroomVars ) {
		ReactDOM.render(
		<App
		wpApiSettings={ wpApiSettings }
		chatroomVars={ chatroomVars }
		/>, app
	);
	}
};
