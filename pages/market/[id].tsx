import { useRouter } from 'next/router'
import Market from "../market/index";

const Post = (props: any) => {
  const router = useRouter()
  const { id } = router.query

  return <Market query={id} {...props}/>
}

export default Post