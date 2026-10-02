"use client";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { WallpaperOutlined, LayersOutlined } from "@mui/icons-material";
import SectionHeading from "@/components/SectionHeading";
import { serviceInfo } from "@/content/site";

const services = [
  {
    title: "도배",
    subtitle: "공간의 분위기를 만드는 벽",
    description:
      "새로운 집의 시작부터 오래된 공간의 변화까지. 원하는 색감과 분위기에 맞는 벽지를 상담해보세요.",
    icon: WallpaperOutlined,
  },
  {
    title: "장판",
    subtitle: "매일의 생활을 담는 바닥",
    description:
      "벽과 가구에 자연스럽게 어우러지는 바닥. 공간의 용도와 원하는 스타일에 맞는 장판을 상담해보세요.",
    icon: LayersOutlined,
  },
];

export default function ServicesSection() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 7, md: 12 } }}>
      <Container>
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="벽과 바닥, 함께 살펴보세요."
          description="아파트·오피스텔·상가의 도배와 장판 시공을 상담합니다."
        />

        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          spacing={1}
          sx={{ mt: 3 }}
        >
          {serviceInfo.spaces.map((space) => (
            <Chip
              key={space}
              label={space}
              sx={{
                bgcolor: "primary.light",
                color: "primary.dark",
              }}
            />
          ))}
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 3,
            mt: 4,
          }}
        >
          {services.map(({ title, subtitle, description, icon: Icon }) => (
            <Card
              key={title}
              variant="outlined"
              sx={{
                bgcolor: "background.default",
                borderColor: "divider",
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 3, md: 4 },
                  "&:last-child": { pb: { xs: 3, md: 4 } },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "primary.light",
                    borderRadius: 2,
                    mb: 3,
                  }}
                >
                  <Icon color="primary" sx={{ fontSize: 30 }} />
                </Box>

                <Typography component="h3" variant="h3" sx={{ fontSize: 26 }}>
                  {title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  {subtitle}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 2,
                    maxWidth: 440,
                    wordBreak: "keep-all",
                  }}
                >
                  {description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
