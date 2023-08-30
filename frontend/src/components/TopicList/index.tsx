import { Box, Divider } from "@mui/material";
import TopicCard from "../TopicCard";

type TopicListProps = {
    items: any
}

function TopicList({ items }: TopicListProps) {
    return (
        <Box id="topics-list" display="flex" flexDirection="column" gap={3} style={{ maxWidth: "64rem" }} border="3px solid red">
            {items.map((item: any, index: number) => (
                <Box display="flex" flexDirection="column" gap={3} key={index}>
                    <TopicCard topic={item} />
                    <Divider />
                </Box>
            ))}
        </Box>
    )
}

export default TopicList;