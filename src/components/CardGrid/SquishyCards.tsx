import { motion } from "framer-motion";
import Button from "../Button/Button";

type SquishyCardProps = {
  title: string;
  description: string;
  icon: string;
  imageSrc: string;
};

const SquishyCard: React.FC<SquishyCardProps> = ({ title, description, icon, imageSrc }) => {
return (
<section className="px-4 py-12 ">
    <div className="mx-auto w-fit">
    <motion.div
        initial={{ opacity:0.9 }}
        whileHover="hover"
        transition={{ duration: 0.5, ease: "backInOut" }}
        variants={{ hover: { scale: 1.04, opacity:1 } }}
        className="group relative h-[40] w-[60] shrink-0 overflow-hidden rounded-xl dark:hover:border-[4px] hover:border-blue-600 hover:shadow-xl  " 
    >
        <img src={imageSrc} alt={'image'} className="relative h-80 inset-0 w-full object-cover rounded-b-lg" />

        <div className="relative z-10 ">
            <span className=" bottom-44 mx-3 block w-fit rounded-md bg-red-800 px-6 py-0.5 my-4 text-base font-semibold text-white ">
                Event
            </span>
            <motion.span
                initial={{ scale: 0.95 }}
                variants={{ hover: { scale: 1 } }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="mt-2 mx-3 block origin-top-left text-2xl font-semibold dark:text-white text-black  leading-[1.2]"
            >
                {title}
            </motion.span>
            <p className=" text-lg dark:text-slate-400  text-black m-3">{description}</p>
            </div>
            <div className="relative flex flex-row place-content-between m-3" >
              <span className="relative flex flex-row gap-4">
                
                <button 
                    className='text-[3vw] xs:text-[.8vw]
                    py-[3vw] px-[5vw] xs:px-[1.3vw] mt-[4vw]
                    xs:py-[.5vw] rounded-full xs:mt-[1vw] 
                    border-[1px] border-white  flex items-center justify-center'
                >
                    View Event Details
                </button>
              </span>
              <div>Jun 17, 2022</div>
            </div>
            
        </motion.div>
    </div>
</section>
);
};

export default SquishyCard;