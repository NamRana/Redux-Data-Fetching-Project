import {useGetAllPostQuery,useGetPostByIdQuery,useGetPostByLimitQuery,useDeletePostMutation,useCreatePostMutation,useUpdatePostMutation} from "./services/post"
function App() {
  // const responseInfo=useGetAllPostQuery();
  // const responseInfo=useGetPostByIdQuery(5)
  // const responseInfo=useGetPostByLimitQuery(10)
  // const [deletePost,responseInfo]=useDeletePostMutation();
  // const[createPost,responseInfo]=useCreatePostMutation();
  const[updatePost,responseInfo]=useUpdatePostMutation();

  const newPost = {
    title: 'This is New New Title',
    body: 'This is New New Body',
    userId: 1,
  }

  const updatePostData = {
    id: 1,
    title: 'This is Update Post Title',
    body: 'This is Update Post Body',
    userId: 1,
  }
    
  console.log(responseInfo);
  console.log("Response Information: ", responseInfo)
  console.log(responseInfo.data)
  console.log("Success:",responseInfo.isSuccess)
  if(responseInfo.isLoading) return <div>Loading...</div>
  if(responseInfo.isError) return <div>An Error Occured</div>
  return (
    <div className="App">
    {/* <h1>Redux Toolkit-RTK Query (Get All Data)</h1>{
      responseInfo.data.map((post,i)=>(
        <div key={i}> 
        <h4>{post.id}  {post.body}</h4>
        </div>
      ))
    } */}

    {/* <h1>Redux Toolkit-RTK Query (Get All Data)</h1>
      {responseInfo.data.id} {responseInfo.data.title} {responseInfo.data.body} */}

      {/* <button onClick={()=>{deletePost(2)}}>Delete Post</button> */}

        {/* <h1>Redux Toolkit-RTK Query (Create Data)</h1>
      <button onClick={()=>{createPost(newPost)}}>Add Post</button> */}

      <h1>Redux Toolkit-RTK Query (Update Data)</h1>
      <button onClick={()=>{updatePost(updatePostData)}}>Update Post</button>

    </div>
  );
}

export default App;
