import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {

  const data = useLoaderData();

  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/ayushp11")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //     setData(data)
  //   })
  // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="profile-image" className="rounded-xl w-60 flex justify-center mx-auto my-4" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ayushp11")
  return response.json();
}