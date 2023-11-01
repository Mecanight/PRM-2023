import { Alert, Box, Snackbar } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { getProfileByUsername } from "../../services";

function TopicPage() {
    //PROFILE
    const { user } = useAuth();
    const params = useParams();

    const [profile, setProfile] = useState({})

    //STATE
    const [messageError, setMessageError] = useState('');

    useEffect(() => {

        const username = params.username ? params.username : user?.username;

        if (username) {
            getProfileByUsername(username)
                .then(result => {
                    setProfile(result.data);

                    //to-do: carregar topics do usuario (owner)

                })
                .catch(error => {
                    setMessageError(String(error.message))
                })
        }

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
            <Snackbar
                open={Boolean(messageError)}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>

                <Alert
                    severity="error"
                    variant="filled"
                    onClose={() => setMessageError('')}>
                    {messageError}
                </Alert>
            </Snackbar>
        </Box>
    )

}

export default TopicPage;