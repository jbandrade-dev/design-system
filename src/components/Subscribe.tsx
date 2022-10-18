import { FormEvent, useState } from "react";
import axios from "axios";
import { Envelope, Phone, User } from "phosphor-react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

export function Subscribe() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "jbandrade.dev@gmail.com",
      password: "12345678",
    });

    setIsUserSignedIn(true);
  }

  return (
    <form
      onSubmit={handleSignIn}
      className="flex flex-col gap-2 w-full max-w-sm"
    >
      {isUserSignedIn && <Text>Login realizado!</Text>}

      <label htmlFor="name">
        <TextInput.Root>
          <TextInput.Icon>
            <User />
          </TextInput.Icon>

          <TextInput.Input
            type="text"
            id="name"
            placeholder="Digite seu nome"
          />
        </TextInput.Root>
      </label>

      <label htmlFor="email">
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          <TextInput.Input
            type="email"
            id="email"
            placeholder="Digite seu email"
          />
        </TextInput.Root>
      </label>

      <label htmlFor="telephone">
        <TextInput.Root>
          <TextInput.Icon>
            <Phone />
          </TextInput.Icon>

          <TextInput.Tel />
        </TextInput.Root>
      </label>

      <Button type="submit">Enviar</Button>
    </form>
  );
}
