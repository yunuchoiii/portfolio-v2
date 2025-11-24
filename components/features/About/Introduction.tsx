import { RESUME_LINK } from "@/constant/link";
import Image from "next/image";

const Introduction = () => {
  return (
    <section 
      className="w-full flex items-center justify-center gap-x-20"
    >
      <div className="flex flex-col gap-y-10">
        <div className="relative w-[250px]">
          <div className="absolute bottom-0 left-0 w-[calc(100%-2px)] ml-[1px] mb-[1px] aspect-square rounded-full bg-gradient-to-br from-green-20 to-blue-40 shadow-[0px_10px_32px_rgba(44,245,188,0.3)]"/>
          <Image
            src="/images/profile.png"
            alt="profile"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover relative z-10 rounded-b-full"
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex">
            <ul className="leading-loose w-20">
              <li>이름</li>
              <li>생년월일</li>
              <li>주소</li>
              <li>학력</li>
              <li>전화번호</li>
              <li>이메일</li>
            </ul>
            <ul className="leading-loose text-blue-20">
              <li>최서원</li>
              <li>1995.5.29</li>
              <li>서울시 송파구</li>
              <li>성균관대 러시아어문학과 졸업</li>
              <li>010-4118-8180</li>
              <li>chltjdnjs529@gmail.com</li>
            </ul>
          </div>
          <hr className="w-full border-white/60"/>
          <div className="flex">
            <ul className="leading-loose w-20">
              <li>경력</li>
              <li>신입</li>
              <li>이력서</li>
            </ul>
            <ul className="leading-loose text-green-10">
              <li>2년 8개월 </li>
              <li>정규직 · 프리랜서</li>
              <li>
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  바로가기
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="leading-loose">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-20 to-blue-30">
          안녕하세요. 프론트엔드 개발자 최서원입니다.
        </span><br/>
        저는 어떤 기술을 사용하든 결국 사람에게 편안한 경험을 만드는 것이 개발자의 가장 중요한 역할이라고 믿습니다.<br/><br/>
        개발을 할 때 저는 먼저 “사용자가 어떤 상황에서 이 화면을 보고 있을까?”,<br/>
        “이 경험이 자연스럽게 이어지고 있을까?”라는 질문부터 시작합니다.<br/>
        작은 인터랙션 하나, 로딩 순간, 버튼의 위치 같은 디테일도<br/>
        사용자에게는 경험의 일부이기 때문입니다.<br/><br/>
        저는 기능을 단순히 구현하는 것에 머물지 않고,<br/>
        사용자가 이해하기 쉽고 부담 없이 사용할 수 있는 흐름을 만드는 일을 가장 중요하게 생각합니다.<br/>
        그 과정에서 더 나은 구조를 고민하고, 동료들과 소통하며, 계속해서 개선할 지점을 찾아갑니다.<br/><br/>
        저는 완벽한 정답을 알고 있다고 생각하지 않습니다.<br/>
        대신 더 나은 방향을 향해 끊임없이 탐색하고 시도하며,<br/>
        사용자와 팀 모두에게 도움이 되는 개발자가 되고자 합니다.<br/><br/>
        앞으로도 사람을 중심에 둔 개발 철학을 기반으로,<br/>
        편안하고 따뜻한 사용자 경험을 만들어가는 프론트엔드 개발자로 성장해가겠습니다.
      </p>
    </section>
  );
};

export default Introduction;