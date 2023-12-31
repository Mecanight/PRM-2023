import { Typography } from "@mui/material";
import { ITopic } from "../../@types";

type TopicCardBodyProps = {
    content: string,
    topicReposted?: ITopic,
    topicLiked?: ITopic
}
function TopicCardBody({
    content,
    topicReposted,
    topicLiked
}: TopicCardBodyProps) {
    return (
        <div id="topic-card-body" style={{ marginLeft: '3rem' }}>
            {topicReposted ? (
                <Typography variant="body1"
                    sx={{ borderLeft: '3px solid #71767b', color: '#71767b', padding: '1rem' }}>
                    {`Postado por @${topicReposted.owner?.username}: ${content}`}
                </Typography>
            ) : (
                <Typography variant="body1">
                    {content}
                </Typography>
            )}

            {topicLiked ? (
                <Typography variant="body1"
                    sx={{ borderLeft: '3px solid #71767b', color: '#71767b', padding: '1rem' }}>
                    {`Postado por @${topicLiked.owner?.username}: ${content}`}
                </Typography>
            ) : (
                <Typography variant="body1">
                    {content}
                </Typography>
            )}
        </div>
    )
}

export default TopicCardBody;