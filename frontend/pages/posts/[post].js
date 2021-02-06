import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { post } = router.query
  return <h1>{post}</h1>
}
