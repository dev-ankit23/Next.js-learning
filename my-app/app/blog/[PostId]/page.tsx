import axios from "axios";

export default async function Blog({ params }: any) {
  const PostId = (await params).PostId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${PostId}`
  );
  const data = response.data;

  return (
    <div>
      Blog Page {PostId}
      <br />
      title - {data.title}
      <br />
      body - {data.body}
      // learn about catching routes , like catching all the routes
    </div>
  );
}
