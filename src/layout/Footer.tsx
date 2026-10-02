"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowUpward, PhoneOutlined } from "@mui/icons-material";
import { site } from "@/content/site";

export default function Footer() {
  const storeInfo = [
    { label: "대표자", value: site.representative },
    { label: "전화", value: site.phone },
    { label: "주소", value: site.address },
    { label: "영업시간", value: site.hours },
  ].filter((item) => item.value);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#263C34",
        color: "#F5F6F0",
        pt: { xs: 5, md: 7 },
        pb: 3,
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={{ xs: 4, md: 8 }}
        >
          <Stack alignItems="flex-start" spacing={2}>
            <Typography
              variant="overline"
              sx={{ color: "#B9CBB5", fontSize: 10 }}
            >
              A NEW MORNING FOR YOUR SPACE
            </Typography>

            <Link
              href="#main"
              underline="none"
              color="inherit"
              sx={{
                fontSize: { xs: 24, md: 28 },
                fontWeight: 700,
                letterSpacing: "-0.05em",
              }}
            >
              {site.name}
            </Link>

            <Typography variant="body2" sx={{ color: "#C3CEC5", fontSize: 13 }}>
              공간에 새로운 아침을.
              <Box component="span" sx={{ display: "block" }}>
                당신의 취향이 머무는 공간을 만나보세요.
              </Box>
            </Typography>
          </Stack>

          <Box sx={{ width: { xs: "100%", md: 420 }, maxWidth: "100%" }}>
            <Typography
              variant="overline"
              sx={{ color: "#B9CBB5", fontSize: 10 }}
            >
              STORE INFORMATION
            </Typography>

            <Box
              component="dl"
              sx={{
                display: "grid",
                gridTemplateColumns: "64px minmax(0, 1fr)",
                columnGap: 2,
                rowGap: 1.5,
                mt: 2.5,
                mb: 0,
              }}
            >
              {storeInfo.map((item) => (
                <Box key={item.label} sx={{ display: "contents" }}>
                  <Typography
                    component="dt"
                    sx={{ color: "#A9BBAE", fontSize: 12 }}
                  >
                    {item.label}
                  </Typography>

                  <Typography
                    component="dd"
                    sx={{
                      m: 0,
                      fontSize: 12,
                      lineHeight: 1.9,
                      wordBreak: "keep-all",
                    }}
                  >
                    {item.label === "전화" ? (
                      <Link
                        href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                        color="inherit"
                        underline="hover"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      item.value
                    )}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>

        <Divider
          sx={{
            mt: { xs: 4, md: 6 },
            mb: 2.5,
            borderColor: "rgba(255,255,255,0.12)",
          }}
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1.5}
        >
          <Typography sx={{ color: "#A9BBAE", fontSize: 10 }}>
            © {site.name}. All rights reserved.
          </Typography>

          <Button
            href="#main"
            size="small"
            endIcon={<ArrowUpward sx={{ fontSize: "14px !important" }} />}
            sx={{
              color: "#C3CEC5",
              fontSize: 11,
              minHeight: 44,
              px: 1,
            }}
          >
            맨 위로
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
