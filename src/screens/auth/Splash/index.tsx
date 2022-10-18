import { Button } from '../../../components/Button';

import logoSplash from '../../../assets/splash_intro.png'

import { Container, Photo, Subtitle, Title } from "./styles";

export function Splash() {

  return (
    <Container>
      <Photo source={logoSplash} />
      <Title>Você encontrará <Subtitle>tudo o que precisa</Subtitle> aqui!</Title>
      <Button onPress={() => {}}>Inscreva-se</Button>
      <Button onPress={() => {}} minimal>Entrar</Button>
    </Container>
  )
}