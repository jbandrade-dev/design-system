import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

export function Video() {
  const videoId = "NCK3lkmEIts";

  return (
      <section className="aspect-video">
        <Player>
          <Youtube tabIndex={-1} videoId={videoId} />
          <DefaultUi />
        </Player>
      </section>
  );
}
