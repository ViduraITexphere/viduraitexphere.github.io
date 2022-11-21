import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import axios from 'axios';
import Rank1Avatar from './Rank1Avatar';
import React, { useState } from 'react';
import { useEffect } from 'react';

function LeaderBoard() {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {

    //     axios
    //        .get('https://api.mockaroo.com/api/1589aa50?count=40&key=c8bb9d50')
    //        .then(res => {
    //         console.log(res)
    //         setPosts(res.data)
    //         const user = (res.data)
    //         console.log('user',user)
    //        })
    //        .catch(err =>{
    //         console.log(err)
    //        })
    // },[])

    return (
        <Box sx={{ backgroundColor: '#E4DFFF', borderRadius: 10 }}>
            <Box
                sx={{
                    height: 100,
                    backgroundColor: '#4a148c',
                    borderTopLeftRadius: 9,
                    borderTopRightRadius: 9,
                    textAlign: 'center',
                    paddingTop: 2
                }}
            >
                <h5 style={{ color: '#FFFFFF' }}> Leaderboard</h5>
            </Box>

            <Box sx={{ position: 'relative', top: '-40px' }}>
                <Rank1Avatar avatar={posts[0].picture} />
                <Typography textAlign={'center'} fontSize={20} color={'#FFFFFFF'}>
                    <b>{posts[0].Score}</b>
                </Typography>
            </Box>

            <Box sx={{ position: 'relative', top: '-30px' }}>
                <Table>
                    <Box>
                        <Box display={'flex'} paddingTop={'0'} padding={'20px'}>
                            <Box width={'20%'}>Rank</Box>
                            <Box width={'25%'}>Profile</Box>
                            <Box width={'40%'}>Name</Box>
                            <Box width={'10%'}>Score</Box>
                        </Box>
                    </Box>
                    <Box>
                        {posts.slice(1, posts.length).map((row) => (
                            <Box bgcolor={'white'} key={row.id} margin={'10px'} display={'flex'} padding={'20px'} borderRadius={'20px'}>
                                <Box width={'20%'}>{row.id}</Box>
                                <Box width={'25%'}>
                                    <img
                                        style={{ width: '35px', border: '2px solid purple', borderRadius: '50px' }}
                                        src={row.picture}
                                        alt="user"
                                    />
                                </Box>
                                <Box width={'45%'}>{row.name}</Box>
                                <Box width={'10%'}>{row.Score}</Box>
                            </Box>
                        ))}
                    </Box>
                </Table>
            </Box>
            {/* </div> */}
        </Box>
    );
}
export default LeaderBoard;

const posts = [
    {
        id: 1,
        name: 'Jennie',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    {
        id: 2,
        name: 'Mark',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    {
        id: 3,
        name: 'Jennie',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/women/71.jpg'
    },
    {
        id: 4,
        name: 'Clere',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
        id: 5,
        name: 'Jhone',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    {
        id: 6,
        name: 'Jennie',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/men/85.jpg'
    },
    {
        id: 7,
        name: 'Jennie',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
        id: 8,
        name: 'Jennie',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
        id: 9,
        name: 'Jennie',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/women/17.jpg'
    },
    {
        id: 10,
        name: 'Jennie',
        Score: '100',
        rank: '#1',
        picture: 'https://randomuser.me/api/portraits/women/94.jpg'
    }
];
