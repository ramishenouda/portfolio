import { Input, Spacer, Textarea, Button, Loading } from '@nextui-org/react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setSendingMail(true);

    emailjs.sendForm('service_ffp8ufb', 'template_rkx9qid', form.current, 'oZ-BS6Cpd-pHJm45g').then(
      (result) => {
        setSendingMail(true);
      },
      (error) => {
        setSendingMail(true);
      },
    );
  };

  return (
    <div id="contact" className="flex flex-col mb-4 justify-center min-h-[100vh]">
      <div className="rounded-3xl">
        <div className="md:text-8xl font-bold text-4xl tracking-widest uppercase">
          <span className="text-lg md:text-2xl">05.</span>HANDSHAKE
        </div>
      </div>
      <div className="flex w-full flex-col justify-center items-center lg:flex-row gap-12 md:px-12 mt-12">
        <form onSubmit={sendEmail} ref={form} className="flex flex-col w-full flex-1 rounded shadow-sm">
          <Input name="from_name" size="xl" clearable bordered labelPlaceholder="Name" />
          <Spacer y={2} />
          <Input name="reply_to" shadow className="w-full" labelPlaceholder="Email" bordered type={'email'} size="xl" />
          <Spacer y={2} />
          <Textarea name="message" size="xl" labelPlaceholder="Message" minRows={5} maxRows={10} bordered />
          <Spacer y={2} />
          <Button
            bordered
            color="secondary"
            size="xl"
            css={{
              color: 'White',
              borderColor: 'White',
            }}
            type="submit"
          >
            {sendingMail ? <Loading color="currentColor" size="sm" /> : 'Send'}
          </Button>
        </form>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <p className="text-5xl md:text-7xl">Contact details</p>
            <div className="child:text-2xl mt-8 flex flex-col gap-4">
              <div>
                <Link className="child:text-center flex flex-row gap-2" href="mailto:ramishenouda@outlook.com">
                  <AiOutlineMail size="35px" /> ramishenouda@outlook.com
                </Link>
              </div>
              <div className="child:text-center lg:justify-start justify-center items-center flex flex-row gap-2">
                <AiOutlinePhone size="35px" /> +201551874208
              </div>
            </div>
          </div>
          <div className="lg:mt-24 lg:mb-0 my-8 md:mb-0">
            <p className="text-5xl md:text-7xl">Social media</p>
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
