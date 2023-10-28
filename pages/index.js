import Head from 'next/head'

import { faTelegram, faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <>
      <Head>
        <title>OPɅC</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,400;0,600;1,200&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <section>
          <h1>
            Hello, I'm <i>Paco</i>
          </h1>

          <ul>
            <li>
              <a href="https://twitter.com/pacobacpac" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
            </li>
            <li>
              <a href="https://github.com/pacoccino" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/channels/@pacobacpac/5457" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faDiscord} size="1x" />
              </a>
            </li>
            <li>
              <a href="https://t.me/pacobacpac" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTelegram} size="1x" />
              </a>
            </li>
            <li>
              <a href="mailto:pac@opac.me" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
)
}
