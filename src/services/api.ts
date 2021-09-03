import axios from 'axios';
import {gql} from '@apollo/client'
import graphQLClient from '../graphQL/client';
import _ from 'lodash';

export const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const getTestGQL = async ():Promise<string> =>{
  
  const data =  await graphQLClient.request(
gql`
    query {
      getAllPost(q: {
        limit: 10
      }) {
        data {
    id
    content
    images
    videos
    commentIds
    like
    tags
    petTags
    share
        }
      }
    }
    `
  ).then((data)=>{
    console.log("123 ");
    
    console.log(data.getAllPost.data)
    return data
  }).catch((err:any)=>{
    console.log("lỗi zòi");
  }
    
  );
  return data.data;
}

