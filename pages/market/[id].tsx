import { useRouter } from 'next/router'
import Trade from "../screen/Trade";

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return <Trade query={id}/>
}

export default Post