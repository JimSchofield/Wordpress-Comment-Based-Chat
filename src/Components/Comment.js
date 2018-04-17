const liStyle = {
    marginBottom: '.5em',
    fontFamily: 'Avenir, Helvetica, sans-serif',
    fontSize: '16px',
    listStyleType: 'none'
}

const nameStyle = {
    paddingRight: "8px"
}

const dateStyle = {
    display: 'block',
    color: 'rgba(0,0,0,.7)',
    fontSize: '12px',
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

    function formatDate(date) {
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

        const jsDate = new Date(date);
        
        let ampm = 'am';
        const day = jsDate.getDay();
        const month = jsDate.getMonth();
        
        let hour = jsDate.getHours();
        if (hour > 12) {
            hour -= 12;
            ampm = 'pm';
        }
        const minutes = jsDate.getMinutes();

        return `${months[month]} ${day} at ${hour}:${minutes} ${ampm}`;
    }
    
    return(
        <li style={liStyle}>
            <span>
                <span style={dateStyle}>{formatDate(date)} </span>
                <strong style={nameStyle}>{author_name}:</strong>
            </span>
            <span>{cleanRendered(rendered)}</span>
        </li>
    );
}