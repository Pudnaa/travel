import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Card from '~/components/Card'
import Container from '~/components/Container'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

import MainSlider from '@/components/MainSlider/MainSlider'
import TourSearch from '@/components/TourSearch/TourSearch'
import BrandOne from '@/components/BrandOne/BrandOne'
import DestinationsOne from '@/components/DestinationsOne/DestinationsOne'
import GalleryOne from '@/components/GalleryOne/GalleryOne'
import NewsOne from '@/components/NewsOne/NewsOne'
import PopularTours from '@/components/PopularTours/PopularTours'
import TestimonialOne from '@/components/TestimonialOne/TestimonialOne'
import VideoOne from '@/components/VideoOne/VideoOne'
import WhyChoose from '@/components/WhyChoose/WhyChoose'
export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  return (
    <Container>
      <MainSlider />
      <TourSearch />
      <DestinationsOne />
      <PopularTours />
      <VideoOne />
      <BrandOne />
      <TestimonialOne />
      <GalleryOne />
      <WhyChoose />
      <NewsOne data={posts} />
    </Container>
  )
}
