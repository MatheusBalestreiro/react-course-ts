import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/heitorsoares12.png',
      name:  'Heitor Alexandre Soares',
      role: 'Desenvolvedor Full-stack',
    },
    content: [
          { type: 'paragraph', content: 'Fala galeraa 👋', },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
          { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-27 16:27:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ArturCarvalho0.png',
      name:  'Artur Carvalho',
      role: 'Desenvolvedor Front-end',
    },
    content: [
          { type: 'paragraph', content: 'Fala galeraa 👋', },
          { type: 'paragraph', content: 'Hoje finalizei o NLW Setup, onde pude desenvolver o projeto Habits, que é um aplicativo de controle de hábitos. Estou orgulhoso com o resultado final e agradecido por todo o aprendizado que foi proporcionado',},
          { type: 'link', content:'artur.design/nlwsetup'},
    ],
    publishedAt: new Date('2023-04-26 16:27:00'),
  },
  
];



export function App() {
  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>

        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>

      </div>
    </div>
  )
}


