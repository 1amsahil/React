import { ContextPostList } from "../../store/Post-list-store";
import Post from "./Post";
import { useContext } from "react";


export default function PostList() {

  const {postData} = useContext(ContextPostList)

  return (
    <>
      {postData.map( (data) => <Post data={data} key={data.id} /> ) }
    </>
  )
}
