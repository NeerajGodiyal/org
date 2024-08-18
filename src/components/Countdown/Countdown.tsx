import { useEffect, useState } from "react";
import DigitDisplay from "./DigitDisplay";

export default function Countdown() {
    const [mounted, setMounted] = useState(false);
    const eventTime = new Date("2024-08-25T00:00:00Z").getTime(); // Set your event date and time here
    const [count, setCount] = useState(0);

    useEffect(() => {
        setMounted(true);
        const now = new Date().getTime();
        setCount(Math.floor((eventTime - now) / 1000));
    }, [eventTime]);

    useEffect(() => {
        if (count > 0) {
            const intervalId = setTimeout(() => {
                setCount((prev) => prev - 1);
            }, 1000);
            return () => clearTimeout(intervalId);
        }
    }, [count]);

    if (!mounted) return null; // Don't render anything on the server

    const days = Math.floor(count / (3600 * 24));
    const hours = Math.floor((count - days * 24 * 3600) / 3600);
    const minutes = Math.floor((count - days * 24 * 3600 - hours * 3600) / 60);
    const seconds = count % 60;

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-black">
            <div className="flex-grow flex flex-col items-center justify-center gap-24 ">
                <h2 className="font-red_hat text-center px-4  font-bold text-xl tracking-[0.45rem] text-black dark:text-light">
                    WE'RE LAUNCHING SOON
                </h2>
                <div className="grid grid-cols-2 lg:gap-8 gap-4 xs:grid-cols-4 ">
                    <div className="font-red_hat font-bold lg:w-36 w-[10vw] items-center gap-4 flex flex-col">
                        <DigitDisplay prev={days + 1} next={days} />
                        <span className="font-red_hat text-c_grayish_blue tracking-[0.25rem] lg:scale-100 scale-75 text-xs">
                            DAYS
                        </span>
                    </div>
                    <div className="font-red_hat font-bold lg:w-36 w-[10vw] items-center gap-4 flex flex-col">
                        <DigitDisplay
                            prev={hours + 1 === 24 ? 0 : hours + 1}
                            next={hours}
                        />
                        <span className="font-red_hat text-c_grayish_blue tracking-[0.25rem] lg:scale-100 scale-75 text-xs">
                            HOURS
                        </span>
                    </div>
                    <div className="font-red_hat font-bold lg:w-36 w-[10vw] items-center gap-4 flex flex-col">
                        <DigitDisplay
                            prev={minutes + 1 === 60 ? 0 : minutes + 1}
                            next={minutes}
                        />
                        <span className="font-red_hat text-c_grayish_blue tracking-[0.25rem] lg:scale-100 scale-75 text-xs">
                            MINUTES
                        </span>
                    </div>
                    <div className="font-red_hat font-bold lg:w-36 w-[10vw] items-center gap-4 flex flex-col">
                        <DigitDisplay
                            prev={seconds + 1 === 60 ? 0 : seconds + 1}
                            next={seconds}
                        />
                        <span className="font-red_hat text-c_grayish_blue tracking-[0.25rem] lg:scale-100 scale-75 text-xs">
                            SECONDS
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
