import { UnauthorizedLayout } from '@app/layouts/Unauthorized';
import styles from './style.module.scss';
import { LanguageEnum, TG_AUTH_PATH } from '@entities/constants';

type Props = Readonly<{
  params: { language: LanguageEnum };
  // searchParams: TgAuthSchemeType;
}>;

const Page = ({params: {language}}: Props) => {
  const botName = process.env.TG_BOT_NAME as string
  const displayAvatar = true
  const radius = 10
  const size = 'large'
  return (
    <UnauthorizedLayout lang={language} >
      <div className={styles.wrapper}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<script async 
          src="https://telegram.org/js/telegram-widget.js?22" 
          data-telegram-login="${botName}"
          data-userpic="${displayAvatar}" 
          data-radius="${radius}" 
          data-size="${size}" 
          data-auth-url="${TG_AUTH_PATH}"
          data-request-access="write"></script>`,
          }}
        />
      </div>
    </UnauthorizedLayout>
  );
}

export default Page