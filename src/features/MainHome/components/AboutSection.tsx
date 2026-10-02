"use client";

import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    number: "01",
    title: "공간의 분위기",
    description: "벽은 가구와 빛, 일상이 어우러지는 가장 큰 배경입니다.",
  },
  {
    number: "02",
    title: "나만의 취향",
    description:
      "밝고 산뜻하게, 또는 차분하고 포근하게. 좋아하는 분위기를 찾아보세요.",
  },
  {
    number: "03",
    title: "가까운 만남",
    description:
      "하남 미사에 자리한 미사새벽도배에서 공간 이야기를 나눠보세요.",
  },
];

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 7, md: 12 }, bgcolor: "primary.light" }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <SectionHeading
            eyebrow="HELLO, NEW SPACE"
            title="매일 보는 벽이니까,"
            description="오래 바라봐도 좋은 분위기를 생각합니다."
          />

          <Typography variant="body2" color="text.secondary">
            집에 돌아왔을 때 느껴지는 편안함.
            <Box component="span" sx={{ display: "block" }}>
              그 작은 차이는 공간의 배경에서 시작될 수 있어요.
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              미사새벽도배에서 새로운 분위기를 상상해보세요.
            </Box>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, minmax(0, 1fr))",
            },
            gap: 2.5,
            mt: { xs: 4, md: 7 },
          }}
        >
          {values.map((item) => (
            <Card
              key={item.number}
              variant="outlined"
              sx={{
                bgcolor: "rgba(255,255,255,0.4)",
                borderColor: "rgba(65,105,87,0.12)",
              }}
            >
              <CardContent sx={{ p: 4, "&:last-child": { pb: 4 } }}>
                <Typography variant="overline" color="primary">
                  {item.number}
                </Typography>
                <Typography component="h3" variant="h3" sx={{ mt: 3 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1.5, fontSize: 13, wordBreak: "keep-all" }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
