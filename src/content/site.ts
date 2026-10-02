export type SiteImage = {
  src: string;
  alt: string;
  sourceUrl?: string;
  credit?: string;
  isSample: boolean;
};
export const site = {
  name: "미사새벽도배",
  representative: "김종철", // 대표자 이름
  address: "경기도 하남시 미사강변한강로348, 1층",
  phone: "010-1234-1234", // 예: 010-1234-5678
  kakaoUrl: "",
  hours: "평일 09:00~18:00", // 예: 평일 09:00~18:00
};

export const serviceInfo = {
  spaces: ["아파트", "오피스텔", "상가"],
  services: ["도배", "장판"],
};

export const mapUrl = `https://map.naver.com/p/search/${encodeURIComponent(site.address)}`;

export const navigation = [
  { label: "매장 소개", href: "#about" },
  { label: "시공 안내", href: "#services" },
  { label: "공간 둘러보기", href: "#gallery" },
  { label: "상담 안내", href: "#process" },
];

export const images = {
  hero: {
    src: "/밝은 톤의 거실 인테리어 샘플.avif",
    alt: "밝은 톤의 거실 인테리어 샘플",
  },
  gallery: [
    {
      id: "living",
      title: "빛이 머무는 거실",
      category: "LIVING ROOM",
      description: "차분한 색감으로 완성하는 편안한 분위기",
      src: "밝고 차분한 거실 인테리어 샘플.avif",
      alt: "밝고 차분한 거실 인테리어 샘플",
      isSample: false,
    },
    {
      id: "bedroom",
      title: "하루를 쉬어가는 침실",
      category: "BEDROOM",
      description: "부드러운 톤으로 만드는 나만의 휴식 공간",
      src: "따뜻한 분위기의 침실 인테리어 샘플.avif",
      alt: "따뜻한 분위기의 침실 인테리어 샘플",
      isSample: false,
    },
    {
      id: "detail",
      title: "취향이 담긴 공간",
      category: "YOUR SPACE",
      description: "가구와 소품까지 자연스럽게 어우러지는 배경",
      src: "중성 색상으로 꾸민 실내 인테리어 샘플.avif",
      alt: "중성 색상으로 꾸민 실내 인테리어 샘플",
      isSample: false,
    },
  ],
};

// 실제 운영 과정 확인 후 문구를 조정하세요.
export const consultationSteps = [
  {
    number: "01",
    title: "공간과 시공 범위",
    description:
      "아파트·오피스텔·상가 중 어떤 공간인지, 도배와 장판 중 필요한 작업과 대략적인 면적을 알려주세요.",
  },
  {
    number: "02",
    title: "현재 상태와 원하는 분위기",
    description:
      "벽과 바닥의 현재 사진, 원하는 색감이나 참고 사진이 있다면 함께 준비해주세요.",
  },
  {
    number: "03",
    title: "희망 일정",
    description:
      "원하는 시공 날짜와 입주 예정일, 거주 중인지 빈 공간인지 알려주세요. 가능한 일정은 상담 후 안내드립니다.",
  },
];
// 외부 샘플 URL 또는 '/images/파일명.jpg'를 사용합니다.
// 실제 사진 교체 시 isSample을 false로 변경하세요.
export const galleryImages: SiteImage[] = [];
