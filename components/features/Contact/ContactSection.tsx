import { EMAIL_LINK } from "@/constant/link";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full min-h-screen relative overflow-hidden">
      <div className="size-[50vh] sm:size-[60vh] lg:size-[70vh] rounded-full bg-green-20 absolute top-[-5vh] sm:top-[-8vh] lg:top-[-10vh] left-[-5vh] sm:left-[-8vh] lg:left-[-10vh]"/>
      <div className="size-[50vh] sm:size-[60vh] lg:size-[70vh] rounded-full bg-blue-30 absolute bottom-[-5vh] sm:bottom-[-8vh] lg:bottom-[-10vh] right-[-5vh] sm:right-[-8vh] lg:right-[-10vh]"/>
      <div className="w-full h-screen flex items-center justify-center backdrop-blur-[700px] bg-black/70 py-12 sm:py-16 md:py-20">
        <div className="w-[calc(100%-40px)] sm:w-[calc(100%-60px)] md:w-[calc(100%-80px)] lg:w-[920px] min-h-[400px] sm:min-h-[450px] md:h-[500px] bg-black/30 rounded-2xl sm:rounded-3xl border border-[#2CF5BC]/10 flex flex-col items-center justify-center gap-y-8 sm:gap-y-10 md:gap-y-12 px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold italic font-poppins leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-green-20 to-blue-40 pr-2 text-center">
            Let's Talk!
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-center break-keep">
            더 나은 방향을 함께 고민하고 만들어갈 팀을 기다리고 있습니다.<br/>
            함께 만들고 싶은 무언가가 떠오르셨다면, 편하게 제안해 주세요.
          </p>
          <a href={EMAIL_LINK} target="_blank" rel="noopener noreferrer">
            <button className="group w-[120px] sm:w-[130px] md:w-[140px] h-12 sm:h-[52px] md:h-14 rounded-full bg-gradient-to-br from-green-20 to-blue-40 flex items-center justify-center p-0.5 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] hover:shadow-[0px_0px_24px_rgba(30,214,184,0.5)] hover:scale-105 active:scale-95 transition-all md:duration-300 ease-in-out">
              <div className="w-full h-full pl-1 rounded-full bg-[radial-gradient(circle_at_center,#1f1f1f,#1b1b1b)] backdrop-blur flex items-center justify-center gap-x-1 sm:gap-x-1.5">
                <span className="font-medium text-xs sm:text-sm whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-green-20 to-blue-30">
                  메일 보내기
                </span>
                <Mail className="size-5 sm:size-6 text-blue-30" />
              </div>
            </button>
          </a>
        </div>
      </div>
      <footer className="w-full h-10 absolute bottom-0 left-0 bg-[#090D0C]/40 flex items-center justify-center">
        <p className="text-xs text-white/50">© 2025 Seowon Choi. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default ContactSection;