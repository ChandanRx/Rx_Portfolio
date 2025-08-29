import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import Form from '../../components/Form';

const Contact = () => {
  return (
    <section>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='grid xl:grid-cols-2 pt-12 mt-18 xl:h-[500px] mb-6 xl:mb-36 '>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hello 👋
            </div>
            <h1 className='text-4xl max-w-md mb-8 font-bold'>Let's Work Together.</h1>
            <p className='text-base md:text-lg text-muted-foreground mt-2 font-light mb-8 max-w-[400px]'>
              I’m always excited to collaborate on creative and impactful projects. 
              Whether you have an idea or need a developer to bring your vision to life — I’m just a message away!
            </p>
          </div>
          <div className='hidden xl:flex w-full bg-[url("/contact/illustration-light.svg")] dark:bg-[url("/contact/illustration-dark.svg")] bg-contain bg-top bg-no-repeat'></div>
        </div>
        <div className='grid xl:grid-cols-2 mt-12 xl:mt-18 mb-24 xl:mb-36'>
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary' />
              <div>chandan.rxn@gmail.com</div>
            </div>

            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-primary' />
              <div>Ahmedabad, Gujarat</div>
            </div>

            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-primary' />
              <div>+91 9773283615</div>
            </div>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  )
}

export default Contact;
