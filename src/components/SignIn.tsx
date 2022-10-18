import { FormEvent, useState } from "react";
import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "diego@rocketseat.com.br",
      password: "12345678",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="flex flex-col text-gray-100">
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-2 w-full max-w-sm"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email">
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password">
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>

        <Text asChild size="sm">
          <a href="" target="_blank">
            <span className="text-gray-400 hover:text-cyan-300">
              Esqueceu sua senha?
            </span>
          </a>
        </Text>

        <Button type="submit" className="mt-2">Entrar</Button>

        <Text
          asChild
          size="sm"
          className="flex flex-col items-center"
        >
          <a href="" target="_blank">
            <span className="text-gray-100">
              Não tem uma conta? <a className="text-cyan-600 hover:text-cyan-500">Registre-se</a>
            </span>
          </a>
        </Text>
      </form>
    </div>
  );
}
