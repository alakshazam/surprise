import { Pixelify_Sans } from "next/font/google";

const pixelifySans = Pixelify_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-5xl font-semibold leading-tight ${pixelifySans.className}`}
        style={{ color: '#FFFD74' }}
      >
        <span>Match</span> <br /> the photo pairs
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-5xl font-semibold leading-tight text-right ${pixelifySans.className}`}
        style={{ color: '#FFFD74' }}
      >
        to reveal <br /> <span>the surprise</span>
      </h1>
    </>
  );
}
