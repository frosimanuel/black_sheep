import { signIn, NFIDProvider } from '@junobuild/core';
import { Button } from './Button';

export const Login = () => {
  const handleDefaultSignIn = () => {
    signIn();
  };

  const handleNFIDSignIn = () => {
    signIn({
      provider: new NFIDProvider({
        appName: "Blacksheep",
        logoUrl: "/images/blacksheep/logo_texto_bs.png"
      })
    });
  };

  return (
    <div>
      <Button onClick={handleDefaultSignIn}>Default Sign In</Button>
      <Button onClick={handleNFIDSignIn}>Sign In with NFID</Button>
    </div>
  );
};
