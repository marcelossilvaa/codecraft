

import Image from 'next/image';
import Filter from '@/public/filter.png';
import Notificacoes from '@/public/notificacoes.png';
import HomeIcon from '@/public/Home.png';
import Chart from '@/public/Chart.png';
import Chat from '@/public/chat.png';
import Profile from '@/public/profile.png';
import Link from 'next/link';

const dataTrilhas = [
  {
    id: 1,
    nome: 'Javascript',
  },
  {
    id: 2,
    nome: 'Python',
  },
  {
    id: 3,
    nome: 'Java',
  },
  {
    id: 4,
    nome: 'C#',
  },
  {
    id: 5,
    nome: 'Ruby',
  },
  {
    id: 6,
    nome: 'C++',
  },
  {
    id: 7,
    nome: 'PHP',
  },
  {
    id: 8,
    nome: 'Go',
  },
  {
    id: 9,
    nome: 'Swift',
  },
  {
    id: 10,
    nome: 'Kotlin',
  },
  {
    id: 11,
    nome: 'R',
  },
  {
    id: 12,
    nome: 'Typescript',
  },
  {
    id: 13,
    nome: 'Dart',
  },
  {
    id: 14,
    nome: 'Scala',
  },
  {
    id: 15,
    nome: 'Perl',
  },
  {
    id: 16,
    nome: 'Lua',
  },
  {
    id: 17,
    nome: 'Rust',
  },
  {
    id: 18,
    nome: 'Objective-C',
  },
  {
    id: 19,
    nome: 'Haskell',
  },
  {
    id: 20,
    nome: 'Shell',
  },
  {
    id: 21,
    nome: 'Pascal',
  },
  {
    id: 22,
    nome: 'Elixir',
  },
  {
    id: 23,
    nome: 'Clojure',
  },
  {
    id: 24,
    nome: 'Groovy',
  },
  {
    id: 25,
    nome: 'Perl',
  },
  {
    id: 26,
    nome: 'Lua',
  },
  {
    id: 27,
    nome: 'Rust',
  },
  {
    id: 28,
    nome: 'Objective-C',
  },
  {
    id: 29,
    nome: 'Haskell',
  },
  {
    id: 30,
    nome: 'Shell',
  },
  {
    id: 31,
    nome: 'Pascal',
  },
  {
    id: 32,
    nome: 'Elixir',
  },
  {
    id: 33,
    nome: 'Clojure',
  },
  {
    id: 34,
    nome: 'Groovy',
  },
  {
    id: 35,
    nome: 'Perl',
  },
  {
    id: 36,
    nome: 'Lua',
  },
  {
    id: 37,
    nome: 'Rust',
  },
  {
    id: 38,
    nome: 'Objective-C',
  },
  {
    id: 39,
    nome: 'Haskell',
  },
  {
    id: 40,
    nome: 'Shell',
  },
]

export default function Home() {
  return(
    <main className='bg-[#F9F9F9] h-[100vh]'>
      <div className='m-auto flex justify-center w-[375px]'>
        <div className='flex flex-col w-full px-6 mt-11'>
          <div className='flex justify-between text-sm'>
            <h3>Bom dia Gustavo!</h3>
            <Image src={Notificacoes} alt='Notificações' width={24} height={24}/>
          </div>
          <h1 className='text-3xl font-bold mt-3'>
            Procure sua trilha
          </h1>
          <div className='flex gap-4 my-4'>
            <input type="text" className='border rounded-md w-full'/>
            <Image src={Filter} alt='Filter' width={44} height={44}/>
          </div>
          <div>
            <div className='flex justify-between mb-2'>
              <span className='text-xl'>Linguangens</span>
              <span className='text-sm text-[#1A68FF]'>Ver todas</span>
            </div>
            <div className='flex gap-[2%] flex-wrap'>
              {dataTrilhas.map(trilha => (
                <Link href={'/trilha'} key={trilha.id} className='h-[98px] w-[32%] bg-white flex items-end p-2 justify-center rounded-3xl mb-4 shadow-sm hover:scale-105 duration-300 cursor-pointer'>
                  <span className='text-sm'>{trilha.nome}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
      <div className='fixed bottom-10 flex justify-center'>
        <div className='bg-white  h-16  w-[311px] left-[31%] shadow-2xl rounded-3xl flex'>
          <div className='flex justify-around w-full py-2 items-center'>
            <Image src={HomeIcon} alt='Home' width={48} height={48} className='h-[48px]'></Image>
            <Image src={Chart} alt='Home' width={48} height={48} className='h-[30px] w-[30px]'></Image>
            <Image src={Chat} alt='Home' width={48} height={48} className='h-[30px] w-[30px]'></Image>
            <Image src={Profile} alt='Home' width={48} height={48} className='h-[30px] w-[30px]'></Image>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}