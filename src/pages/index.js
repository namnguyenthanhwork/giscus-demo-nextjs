'use client';
import { Inter } from 'next/font/google';
import Giscus from '@giscus/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Get started by editing&nbsp;
          <code className='font-mono font-bold'>src/pages/index.js</code>
        </p>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://www.facebook.com/NguyenThanhNam1601'
            target='_blank'
            rel='noopener noreferrer'
          >
            By Thành Nam Nguyễn{' '}
          </a>
        </div>
      </div>

      <div className="text-3xl font-bold relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        Demo giscus for Nextjs
      </div>

      <Giscus
        id='comments'
        repo='namnguyenthanhwork/giscus-demo-nextjs'
        repoId='R_kgDOKfu_sQ'
        category='Announcements'
        categoryId='DIC_kwDOKfu_sc4CaF9f'
        mapping='pathname'
        term='Welcome to namnguyenthanhwork/giscus-demo-nextjs'
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='top'
        theme='preferred_color_scheme'
        lang='en'
        loading='lazy'
      />
    </main>
  );
}
