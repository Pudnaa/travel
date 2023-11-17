import Link from 'next/link'
import Header from '@/components/Header/Header'
import SiteFooter from '@/components/SiteFooter/SiteFooter'
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-wrapper">
      <Header pageTitle="ddd" />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
