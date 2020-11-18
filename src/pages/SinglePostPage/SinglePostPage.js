import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useParams } from "react-router-dom";
import {getSinglePost} from '../../WebAPI'
const Root = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
  padding: 0 20px;
`
const PostTitle = styled.h2`
  margin-bottom: 0;
`
const PostDate = styled.div`
  align-self: flex-end;
  margin: 0;
`
const Content = styled.p`
  margin: 20px 0;
`;


export default function SinglePostPage(){
  const [post, setPost] = useState([])
  const {id} = useParams()
  useEffect(() => {
    getSinglePost(id).then((post) => setPost(post))
    console.log(post)
  }, [id])
    return (
      <Root>
      {post.id ?(
      <>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
      <Content>{post.body}</Content>
      </>
      ) : null }
      </Root>
    )
}
