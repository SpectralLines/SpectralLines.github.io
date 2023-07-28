import { Badge, SvgIcon } from "@mui/material";
import FacebookIcon from "../../../public/icons/facebook-icon.svg";
import InstagramIcon from "../../../public/icons/instagram-icon.svg";
import SpotifyIcon from "../../../public/icons/spofity-icon.svg";
import TikTokIcon from "../../../public/icons/tiktok-icon.svg";
import YoutubeIcon from "../../../public/icons/youtube-icon.svg";

const icons = [
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  TikTokIcon,
  YoutubeIcon,
];

export default function Footer() {
  return (
    <div class="flex justify-center">
      {icons.map((icon) => (
        <SvgIcon>{icon()}</SvgIcon>
      ))}
    </div>
  );
}
