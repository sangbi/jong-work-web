"use client";

import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 5 }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={3}
        >
          <Stack spacing={1}>
            <Link
              href="#main"
              color="text.primary"
              underline="none"
              sx={{ fontSize: 16, fontWeight: 700 }}
            >
              {site.name}
            </Link>
            <Typography variant="caption" color="text.secondary">
              {site.address}
            </Typography>
          </Stack>

          <Typography
            color="text.secondary"
            sx={{ fontSize: 9, letterSpacing: "0.2em" }}
          >
            A NEW MORNING FOR YOUR SPACE.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
