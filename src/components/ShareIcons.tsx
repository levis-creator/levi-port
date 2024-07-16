"use client";

import { FC } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
interface ShareProps {
  url: string;
}
const ShareIcons: FC<ShareProps> = ({ url }) => {
  return (
    <>
      <p className="text-slate-500 mt-5">Share on: </p>
      <div className="inline-flex gap-2 mt-2">
        <FacebookShareButton url={url}>
          <FacebookIcon borderRadius={30} size={40} />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon borderRadius={30} size={40} />
        </TwitterShareButton>
        <EmailShareButton url={url}>
          <EmailIcon borderRadius={30} size={40} />
        </EmailShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon borderRadius={30} size={40} />
        </WhatsappShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon borderRadius={30} size={40} />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon borderRadius={30} size={40} />
        </TelegramShareButton>
      </div>
    </>
  );
};

export default ShareIcons;
