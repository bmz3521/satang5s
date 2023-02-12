import { useRouter } from 'next/router'
import Trade from "../screen/Trade";

const Post = (props: any) => {
  const router = useRouter()
  const { id } = router.query

  return <Trade query={id} {...props}/>
}

export default Post