"use client";

import Image from "next/image";
import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowForward,
  ArrowOutward,
  LocationOnOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";
import { images } from "@/content/site";

export default function HeroSection() {
  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{ pt: { xs: 4, md: 7 }, pb: { xs: 8, md: 12 } }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.08fr" },
            gap: { xs: 5, md: 4 },
            alignItems: "center",
          }}
        >
          <Stack alignItems="flex-start" sx={{ py: { xs: 1, md: 5 } }}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                }}
              />
              <Typography variant="overline" color="primary.main">
                새로운 공간의 시작, 미사새벽도배
              </Typography>
            </Stack>

            <Typography
              id="hero-title"
              component="h1"
              variant="h1"
              sx={{
                mt: 3.5,
                fontSize: { xs: 38, sm: 52, lg: 64 },
                wordBreak: "keep-all",
              }}
            >
              벽 하나가 바뀌면,
              <Box component="span" sx={{ display: "block" }}>
                일상이{" "}
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    background:
                      "linear-gradient(transparent 80%, #D9E1CD 80%, #D9E1CD 94%, transparent 94%)",
                  }}
                >
                  달라져요.
                </Box>
              </Box>
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 3.5, fontSize: { xs: 14, md: 15 } }}
            >
              좋아하는 색감, 손끝에 닿는 질감.
              <Box component="span" sx={{ display: "block" }}>
                당신의 취향이 머무는 공간을 만나보세요.
              </Box>
            </Typography>

            <Stack
              direction="row"
              useFlexGap
              flexWrap="wrap"
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                href="#gallery"
                variant="contained"
                endIcon={<ArrowOutward />}
              >
                공간 둘러보기
              </Button>
              <Button href="#contact" endIcon={<ArrowForward />}>
                매장 위치 보기
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mt: { xs: 3, md: 6 } }}
            >
              <LocationOnOutlined sx={{ fontSize: 18 }} color="primary" />
              <Typography variant="caption" color="text.secondary">
                하남 미사 · 미사강변한강로 348
              </Typography>
            </Stack>
          </Stack>

          <Box sx={{ position: "relative", pl: { xs: 1.5, md: 2 } }}>
            <Box
              sx={{
                position: "relative",
                aspectRatio: { xs: "1.12", sm: "1.5", md: "0.98" },
                overflow: "hidden",
                borderRadius: {
                  xs: "90px 14px 14px 14px",
                  md: "150px 16px 16px 16px",
                },
                bgcolor: "primary.light",
              }}
            >
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
              />

              <Chip
                label="인테리어 샘플 이미지"
                size="small"
                sx={{
                  position: "absolute",
                  right: 16,
                  bottom: 16,
                  bgcolor: "rgba(22, 36, 29, 0.65)",
                  color: "white",
                  fontSize: 10,
                  backdropFilter: "blur(8px)",
                }}
              />
            </Box>

            <Paper
              elevation={0}
              sx={{
                position: "absolute",
                left: { xs: 0, md: -20 },
                bottom: 52,
                px: { xs: 2.5, md: 3 },
                py: { xs: 2, md: 2.5 },
                bgcolor: "rgba(255,255,255,0.94)",
                boxShadow: "0 16px 50px rgba(31,47,36,0.1)",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <WbSunnyOutlined color="secondary" sx={{ fontSize: 34 }} />
                <Stack spacing={0.5}>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 8, letterSpacing: "0.2em" }}
                  >
                    A FRESH START
                  </Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                    우리 집의 새로운 아침
                  </Typography>
                </Stack>
              </Stack>
            </Paper>

            <Typography
              align="right"
              color="text.secondary"
              sx={{ mt: 2, fontSize: 9, letterSpacing: "0.25em" }}
            >
              NEW WALL, NEW MOOD.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
