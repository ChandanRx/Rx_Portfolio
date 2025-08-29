
import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-4">
           <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold max-w-xl text-center mb-8 ">Prepared to turn your ideas into reality? I'm here to help</h2>
            <Link href='/contact'>
                <Button>Contact Me</Button>
            </Link>

           </div>
        </div>
    </section>
  )
}

export default Cta;