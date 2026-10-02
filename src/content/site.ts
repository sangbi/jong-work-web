export type SiteImage = {
  src: string;
  alt: string;
  sourceUrl?: string;
  credit?: string;
  isSample: boolean;
};
export const site = {
  name: "미사새벽도배",
  address: "경기도 하남시 미사강변한강로348, 1층",
  phone: "",
  kakaoUrl: "",
  hours: "",
};

export const mapUrl = `https://map.naver.com/p/search/${encodeURIComponent(site.address)}`;

export const navigation = [
  { label: "매장 소개", href: "#about" },
  { label: "공간 둘러보기", href: "#gallery" },
  { label: "오시는 길", href: "#contact" },
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
    title: "공간 이야기",
    description: "공간의 크기와 현재 상태, 원하는 분위기를 알려주세요.",
  },
  {
    number: "02",
    title: "취향 찾기",
    description: "마음에 드는 색감과 질감을 함께 살펴보세요.",
  },
  {
    number: "03",
    title: "일정과 범위",
    description: "작업 범위와 일정은 매장 상담을 통해 확인해주세요.",
  },
];
// 외부 샘플 URL 또는 '/images/파일명.jpg'를 사용합니다.
// 실제 사진 교체 시 isSample을 false로 변경하세요.
export const galleryImages: SiteImage[] = [];
