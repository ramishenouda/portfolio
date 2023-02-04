import { useRef, useState } from 'react';
import { Input, Spacer, Textarea, Button, Loading } from '@nextui-org/react';
import Link from 'next/link';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { BsGithub, BsLinkedin, BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

export default function Contact() {
  const formElement = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    reply_to: '',
    from_name: '',
    message: '',
  });
  const [sendingMail, setSendingMail] = useState(false);

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    const isVaidForm = form.reply_to.length && form.from_name.length && form.message.length;

    if (!formElement?.current || sendingMail || !isVaidForm) {
      return;
    }

    setSendingMail(true);
    emailjs
      .sendForm('service_ffp8ufb', 'template_rkx9qid', formElement.current, 'oZ-BS6Cpd-pHJm45g')
      .then(() => {
        Swal.fire('Thank you! :D', 'I have received your email.', 'success');
      })
      .catch((error) => {
        Swal.fire('OPS!', 'I could not receive your email. Try sending it manually to my email, thank you!', 'error');
      })
      .finally(() => {
        setSendingMail(false);
      });
  };

  return (
    <section id="contact" className="flex flex-col mb-4 justify-center min-h-[65vh]">
      <h1 className="section-title">CONTACT</h1>
      <div className="flex w-full flex-col justify-center items-center lg:flex-row gap-12 md:px-12 mt-12">
        <form onSubmit={sendEmail} ref={formElement} className="flex flex-col w-full flex-1 rounded shadow-sm">
          <Input
            required={true}
            onChange={handleChange}
            minLength={2}
            name="from_name"
            size="xl"
            bordered
            labelPlaceholder="Name"
          />
          <Spacer y={2} />
          <Input
            required={true}
            onChange={handleChange}
            name="reply_to"
            shadow
            className="w-full"
            labelPlaceholder="Email"
            bordered
            type={'email'}
            size="xl"
          />
          <Spacer y={2} />
          <Textarea
            required={true}
            onChange={handleChange}
            minLength={10}
            name="message"
            size="xl"
            labelPlaceholder="Message"
            minRows={5}
            maxRows={10}
            bordered
          />
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
            <p className="text-4xl md:text-6xl">Contact details</p>
            <div className="child:text-2xl mt-8 flex flex-col gap-4">
              <div>
                <Link className="child:text-center flex flex-row gap-2" href="mailto:ramishenouda@outlook.com">
                  <GrMail color="white" size={35} /> ramishenouda@outlook.com
                </Link>
              </div>
              <div className="child:text-center lg:justify-start justify-center items-center flex flex-row gap-2">
                <BsTelephoneFill color="white" size={35} /> +201551874208
              </div>
            </div>
          </div>
          <div className="lg:mt-24 lg:mb-0 my-8 md:mb-0">
            <p className="text-4xl md:text-6xl">Social media</p>
            <div className="flex flex-row gap-8 child:text-2xl mt-8 justify-center items-center">
              <Link target="_blank" href="https://github.com/ramishenouda">
                <BsGithub
                  className="transition-all rounded-full p-1 duration-500 hover:fill-black hover:bg-white hover:p-[1px]"
                  color="white"
                  size={40}
                />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/ramishenouda/">
                <BsLinkedin
                  className="transition-all p-1 duration-500 rounded-sm hover:bg-white hover:fill-blue-500 hover:p-[1px]"
                  color="white"
                  size={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
