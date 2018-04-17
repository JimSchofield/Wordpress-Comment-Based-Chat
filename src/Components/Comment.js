const liStyle = {
    marginBottom: '.5em',
    fontFamily: 'Avenir, Helvetica, sans-serif',
    fontSize: '20px',
    listStyleType: 'none'
}

const nameStyle = {
    paddingRight: "8px"
}

export default function Comment(props) {
    
    const {
        author_name,
        date,
        content: {
            rendered
        },
        author_avatar_urls
    } = props.comment;

    //ONLY USE WITH TRUSTED CONTENT
    function cleanRendered(string) {
        let element = document.createElement('div');
        element.innerHTML = string.trim();
        return element.textContent || element.innerText || "";
    }
    
    return(
        <li style={liStyle}>
            <strong style={nameStyle}>{author_name}:</strong>
            <span>{date}</span>
            <span>{cleanRendered(rendered)}</span>
        </li>
    );
}