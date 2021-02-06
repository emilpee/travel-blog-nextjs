import { useRouter } from 'next/router'

export default function CategoryPage() {
  const router = useRouter()
  const { category } = router.query
  return <h1 style={{ textTransform: 'capitalize' }}>{category}</h1>
}
