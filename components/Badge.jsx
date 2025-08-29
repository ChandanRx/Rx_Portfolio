"use client"
import CountUp from "react-countup"


const Badge = ({containerStyles,icon,endCountNum,endCountText,badgeText}) => {
  return (
    <div className={`z-10 w-[200px] h-[68px] bg-white dark:backdrop-blur-[44px] shadow-2xl p-4 rounded-[10px] flex items-center gap-x-4 ${containerStyles}`}>
       <div className="text-3xl text-primary">
        {icon}
       </div>
       <div className="flex items-center gap-x-4">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4}/>
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
       </div>
    </div>
  )
}

export default Badge;