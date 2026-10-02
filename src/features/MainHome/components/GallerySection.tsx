"use client";

import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/content/site";

export default function GallerySection() {
  return (
    <Box component="section" id="gallery" sx={{ py: { xs: 7, md: 12 } }}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          spacing={2}
        >
          <SectionHeading
            eyebrow="SPACE INSPIRATION"
            title="어떤 공간을 좋아하세요?"
            description="색감과 분위기에서 시작하는 새로운 공간의 아이디어."
          />
          <Typography variant="caption" color="text.secondary">
            분위기 참고용 샘플 이미지입니다.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, minmax(0, 1fr))",
            },
            gap: 3,
            mt: 5,
          }}
        >
          {images.gallery.map((image) => (
            <Card
              component="article"
              key={image.id}
              elevation={0}
              sx={{
                bgcolor: "transparent",
                overflow: "visible",
                "&:hover img": { transform: "scale(1.035)" },
                "@media (prefers-reduced-motion: reduce)": {
                  "&:hover img": { transform: "none" },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: { xs: "1.12", sm: "0.9" },
                  bgcolor: "primary.light",
                  borderRadius: 2,
                  overflow: "hidden",
                  "& img": {
                    transition: "transform 500ms ease",
                    "@media (prefers-reduced-motion: reduce)": {
                      transition: "none",
                    },
                  },
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 600px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />

                {image.isSample && (
                  <Chip
                    label="공간 이미지 예시"
                    size="small"
                    sx={{
                      position: "absolute",
                      bottom: 14,
                      right: 14,
                      bgcolor: "rgba(22,36,29,0.65)",
                      color: "white",
                      fontSize: 10,
                    }}
                  />
                )}
              </Box>

              <CardContent sx={{ px: 0, pt: 2.5 }}>
                <Typography variant="overline" color="primary.main">
                  {image.category}
                </Typography>
                <Typography component="h3" variant="h3" sx={{ mt: 1 }}>
                  {image.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1, fontSize: 12 }}
                >
                  {image.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
