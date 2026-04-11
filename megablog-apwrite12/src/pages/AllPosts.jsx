import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, SetPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                SetPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full'>
            <Container>
                {posts.map((post) => (
                   <div key={post.$id} className='p-2 w-1/4'>
                    <Postcard post={post} />
                   </div>
                ))}
            </Container>
        </div>
    )
}

export default AllPosts