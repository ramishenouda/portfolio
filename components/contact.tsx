import { Input, Spacer, Textarea } from '@nextui-org/react';

export default function Contact() {
  return (
    <div id="contact" className="intro my-auto min-h-[100vh] text-white pt-28  flex flex-col items-center">
      <div className="text-center intro-text rounded-3xl">
        <h1 className="text-[5vw] tracking-widest uppercase">
          <span className="text-2xl">05.</span>Contact
        </h1>
        <hr className="mt-2 hr-text" data-content={'<My babies 👶 /> '} />
      </div>
      <form className="max-w-6xl mt-12 w-[90vw] shadow-white flex flex-col py-16 px-12 bg-white rounded shadow-sm">
        <Input color="primary" size="xl" clearable underlined labelPlaceholder="Name" />
        <Spacer y={2.5} />
        <Input size="xl" className="w-full" clearable underlined labelPlaceholder="Email" type={'email'} />
        <Spacer y={2.5} />
        <Textarea
          className="w-full"
          size="xl"
          placeholder="Max rows (10), Min rows (1), write something large.."
          minRows={3}
          maxRows={10}
        />
      </form>
    </div>
  );
}
