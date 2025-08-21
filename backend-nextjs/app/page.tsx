import axios from "axios";

export default async function Home() {
  const response = await axios("http://localhost:3000/api/v1/user/details");

  const data = response.data;
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {data?.username}</div>

          {data?.email}
        </div>
      </div>
    </div>
  );
}
