import newsOne from '@/data/newsOne'
import Card from '~/components/Card'

import { post } from '~/lib/sanity.queries'
import { formatDate } from '~/utils'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleNewsOne from './SingleNewsOne'

const { tagline, title, newsData } = newsOne

const NewsOne = ({ data }) => {
  return (
    <section className="news-one">
      <Container>
        <div className="news-one__top">
          <Row>
            <Col xl={9} lg={9}>
              <div className="news-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">{title}</h2>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3}>
              <div className="news-one__top-right">
                <Link href="/news-details">
                  <span className="news-one__btn thm-btn">View All posts</span>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <div className="news-one__bottom">
          <Row>
            {data.map((post) => (
              <Col xl={4} lg={4} key={post.id} className="animated fadeInUp">
                {/* <SingleNewsOne key={post._id} news={post} /> */}
                <Card key={post._id} post={post} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default NewsOne
