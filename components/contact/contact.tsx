import { useRef, useState } from 'react';
import { Input, Spacer, Textarea, Button, Loading } from '@nextui-org/react';
import Link from 'next/link';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { BsGithub, BsLinkedin, BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FadeIn } from '../shared/motion';

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
        Swal.fire('Thank you for contacting! :D', 'We will contact you as soon as possible.', 'success');
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
      <FadeIn>
        <h1 className="section-title">
          <span className="section-number">06.</span>CONTACT
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="flex w-full flex-col justify-center items-center lg:flex-row gap-12 md:px-12 mt-12">
          <form onSubmit={sendEmail} ref={formElement} className="flex flex-col w-full flex-1 rounded-xl">
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
              color="primary"
              size="xl"
              css={{
                color: '#06b6d4',
                borderColor: 'rgba(6, 182, 212, 0.4)',
                borderRadius: '12px',
                zIndex: 1,
                '&:hover': {
                  borderColor: '#06b6d4',
                  background: 'rgba(6, 182, 212, 0.1)',
                },
              }}
              type="submit"
            >
              {sendingMail ? <Loading color="currentColor" size="sm" /> : 'Send'}
            </Button>
          </form>
          <div className="flex flex-col justify-center items-center gap-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Contact details</p>
              <div className="mt-6 flex flex-col gap-4">
                <Link className="flex flex-row gap-3 items-center text-neutral-400 hover:text-cyan-400 transition-colors duration-300" href="mailto:ramishenouda@outlook.com">
                  <GrMail className="text-cyan-400" size={22} />
                  <span className="text-base">ramishenouda@outlook.com</span>
                </Link>
                <div className="flex flex-row gap-3 items-center text-neutral-400 lg:justify-start justify-center">
                  <BsTelephoneFill className="text-cyan-400" size={20} />
                  <span className="text-base">+49 1515 8863801</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-white tracking-tight text-center">Social media</p>
              <div className="flex flex-row gap-6 mt-6 justify-center items-center">
                <Link target="_blank" href="https://github.com/ramishenouda">
                  <BsGithub
                    className="text-neutral-400 transition-all duration-300 hover:text-white hover:scale-110"
                    size={28}
                  />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/ramishenouda/">
                  <BsLinkedin
                    className="text-neutral-400 transition-all duration-300 hover:text-cyan-400 hover:scale-110"
                    size={28}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
