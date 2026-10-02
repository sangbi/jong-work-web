"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowOutward,
  LocationOnOutlined,
  PhoneOutlined,
  ChatBubbleOutline,
} from "@mui/icons-material";
import { mapUrl, site } from "@/content/site";

export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 7, md: 12 }, bgcolor: "#E4EADF" }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 0.9fr" },
            gap: { xs: 4, md: 10 },
            alignItems: "center",
          }}
        >
          <Stack alignItems="flex-start" spacing={2.5}>
            <Typography variant="overline" color="primary">
              COME SAY HELLO
            </Typography>

            <Typography
              component="h2"
              variant="h2"
              sx={{ fontSize: { xs: 32, md: 44 } }}
            >
              새로운 공간 이야기,
              <Box component="span" sx={{ display: "block" }}>
                미사에서 만나요.
              </Box>
            </Typography>

            <Typography variant="body2" color="text.secondary">
              매장에서 여러분의 공간 이야기를 들려주세요.
            </Typography>

            {(site.phone || site.kakaoUrl) && (
              <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1.5}>
                {site.phone && (
                  <Button
                    variant="contained"
                    href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                    startIcon={<PhoneOutlined />}
                  >
                    전화 상담
                  </Button>
                )}

                {site.kakaoUrl && (
                  <Button
                    variant="outlined"
                    href={site.kakaoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<ChatBubbleOutline />}
                  >
                    카카오톡 문의
                  </Button>
                )}
              </Stack>
            )}
          </Stack>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3.5, md: 5 },
              bgcolor: "background.default",
              boxShadow: "0 12px 35px rgba(44,68,43,0.04)",
            }}
          >
            <Stack spacing={3}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocationOnOutlined color="primary" />
                <Typography variant="overline" color="text.secondary">
                  STORE INFORMATION
                </Typography>
              </Stack>

              <Box>
                <Typography component="h3" variant="h3" sx={{ fontSize: 23 }}>
                  {site.name}
                </Typography>

                <Typography
                  component="address"
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1.5, fontStyle: "normal", wordBreak: "keep-all" }}
                >
                  {site.address}
                </Typography>

                {site.hours && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    영업시간 · {site.hours}
                  </Typography>
                )}
              </Box>

              <Divider />

              <Link
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  fontSize: 13,
                }}
              >
                네이버 지도에서 위치 확인
                <ArrowOutward fontSize="small" />
              </Link>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
