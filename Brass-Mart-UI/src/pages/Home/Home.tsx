import React from 'react'
import Layout from '../../Layout/Layout/Layout';
import useProducts from '../../requests/queries/useProducts'

type Props = {}

function Home({ }: Props) {
  const filter = ''
  const { data } = useProducts({
    filter,
    take: 8,
    skip: 0,
    orderBy: { column: '', order: 'desc'}
  });
  console.log(data);
  return (
    <div>Home</div>
  )
}

export default Home;