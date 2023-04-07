import Form from '../../Form/Form';
import './AuthPage.scss';

export default function AuthPage({signIn, signUp}) {
    return (
        <div className="auth-page">
      {signIn &&
        <Form
        header={'sign in'}
        linkText='sin up'
        linkTo="/signUp"
        buttonText={'sign in'}
      />
      }
      {signUp &&
        <Form
        header={'sign up'}
        linkText='sign in'
        linkTo="/signIn"
        buttonText={'sign up'}
      />
      }
        </div>
    )
}
