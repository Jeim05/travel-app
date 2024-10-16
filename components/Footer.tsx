import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href="/" className='mb-10'>
            <Image
              src="hilink-logo.svg" alt='logo' width={74} height={29} />
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColum key={index} title={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {
                    columns.links.map((link) => (
                      <Link href='/' key={link}>
                        {link}
                      </Link>
                    ))
                  }
                </ul>
              </FooterColum>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColum title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className='flex gap-4 md:flex-col lg:flex-rowe'>
                    <p className='whitespace-nowrap'>
                      {link.label}
                    </p>
                    <p className='medium whitespace-nowrap text-blue-700'>
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColum>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColum title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                  {SOCIALS.links.map((link) =>(
                    <Link href="/" key={link}>
                      <Image src={link} alt='logo' width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColum>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}


type FooterColumsProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColum = ({ title, children }: FooterColumsProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer
