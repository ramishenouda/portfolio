import { Input, Spacer, Textarea, useTheme, Button, Loading } from '@nextui-org/react';

export default function Contact() {
  const { theme } = useTheme();

  return (
    <div id="contact" className="intro my-auto min-h-[100vh] text-white pt-28  flex flex-col">
      <div className="intro-text rounded-3xl">
        <h1 className="text-8xl tracking-widest uppercase">
          <span className="text-2xl">05.</span>Contact
        </h1>
      </div>
      <form className="max-w-6xl mt-12 w-[90vw] flex flex-col py-16 px-12 rounded shadow-sm">
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
        >
          <Loading color="currentColor" size="sm" />
        </Button>
      </form>
    </div>
  );
}
