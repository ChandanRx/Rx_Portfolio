import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { DialogTitle } from "@/components/ui/dialog" // Needed for title
import { AlignJustify } from "lucide-react"

import Nav from './Nav'
import Logo from './Logo'
import Socials from './Socials'

const MobileView = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle> {/* Accessible but visually hidden */}
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav 
              containerStyle='flex flex-col items-center gap-y-6'
              linkStyle='text-2xl'
            />
          </div>
          <Socials
            containerStyles='flex gap-x-4'
            iconStyles='text-2xl'
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileView
