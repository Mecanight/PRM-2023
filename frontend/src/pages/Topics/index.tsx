import { Box } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicList";
import { useEffect, useState } from "react";

function TopicPage() {
    const [profile, setProfile] = useState({})

    useEffect(() => {

        fetch('http://localhost:3000/profile')
            .then(res => res.json())
            .then(data => {
                setProfile(data);
            })

    }, [])

    const topics = [
        {
            owner: { fullname: 'Pedro da Silva' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem illo optio',
            comments: 1,
            repost: 1,
            likes: 30,
            createdAt: '2023-08-01 19:23:00'
        },
        {
            owner: { fullname: 'Marina Silva' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem illo optio',
            comments: 5,
            repost: 3,
            likes: 15,
            createdAt: '2023-06-06 21:03:00'
        }, {
            owner: { fullname: 'Lula da Silva' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem illo optio',
            comments: 2,
            repost: 1,
            likes: 0,
            createdAt: '2023-04-03 16:15:00'
        }, {
            owner: { fullname: 'Carlos da Silva' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem illo optio',
            comments: 5,
            repost: 4,
            likes: 80,
            createdAt: '2023-08-01 04:26:00'
        }, {
            owner: { fullname: 'Everaldo da Silva' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorem illo optio',
            comments: 15,
            repost: 8,
            likes: 20,
            createdAt: '2023-04-05 02:45:00'
        }
    ]



    return (
        <Box id="topic-page" display="flax" flexDirection="column" alignItems="center" gap={3}>
            <HeaderProfile user={profile} />
            <TopicList items={topics} />
        </Box>
    )

}

export default TopicPage;