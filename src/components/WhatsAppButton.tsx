import { WhatsappLogo } from "phosphor-react";

const ddi = "55";
const ddd = "21";
const tel = "987654321";

export function WhatsAppButton() {
  return (
    <a
      title="Botão do Whatsapp"
      href={`https://wa.me/${ddi}${ddd}${tel}`}
      target="_blank"
      className="fixed w-10 bottom-8 right-8 z-50"
    >
      <WhatsappLogo className="text-green-500" size="40" weight="thin"/>
    </a>
  );
}
