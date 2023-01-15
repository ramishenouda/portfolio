import { Input, Spacer, Textarea, Button, Loading } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const [sendingMail, setSendingMail] = useState(false);
  const sendMail = () => {
    setSendingMail(true);
  };

  return (
    <div id="contact" className="intro my-auto flex flex-col justify-center min-h-[100vh] text-white">
      <div className="intro-text rounded-3xl">
        <h1 className="md:text-8xl text-4xl tracking-widest uppercase">
          <span className="text-lg md:text-2xl">05.</span>Contact
        </h1>
      </div>
      <div className="flex w-full flex-col justify-center items-center md:flex-row gap-12 px-12 mt-12">
        <form className="flex flex-col  flex-1 rounded shadow-sm">
          <Input size="xl" clearable bordered labelPlaceholder="Name" />
          <Spacer y={2.5} />
          <Input shadow className="w-full" labelPlaceholder="Email" bordered type={'email'} size="xl" />
          <Spacer y={2.5} />
          <Textarea size="xl" labelPlaceholder="Message" minRows={5} maxRows={10} bordered />
          <Spacer y={2.5} />
          <Button
            bordered
            color="secondary"
            size="xl"
            css={{
              color: 'White',
              borderColor: 'White',
            }}
            onClick={() => sendMail()}
          >
            {sendingMail ? <Loading color="currentColor" size="sm" /> : 'Send'}
          </Button>
        </form>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1>Contact details</h1>
            <div className="child:text-2xl mt-8 flex flex-col gap-4">
              <div>
                <a className="flex flex-row gap-2" href="mailto:ramishenouda@outlook.com">
                  <AiOutlineMail size="35px" /> ramishenouda@outlook.com
                </a>
              </div>
              <div className="flex flex-row gap-2">
                <AiOutlinePhone size="35px" /> +201551874208
              </div>
            </div>
          </div>
          <div className="mt-24 mb-4 md:mb-0">
            <h1>Social media</h1>
            <div className="flex flex-row gap-8 child:text-2xl mt-8 justify-center items-center">
              <Link target="_blank" href="https://github.com/ramishenouda/">
                <FiGithub size="35px" />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/ramishenouda/">
                <FiLinkedin size="35px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
