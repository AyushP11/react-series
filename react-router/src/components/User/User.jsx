import { useParams } from "react-router-dom"

function User() {

  const {userId} = useParams();

  return (
    <div className="flex justify-center text-4xl my-5 p-5 bg-gray-500 text-white ">
      User: {userId}
    </div>
  )
}

export default User