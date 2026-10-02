"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import SectionHeading from "@/components/SectionHeading";
import { consultationSteps } from "@/content/site";

export default function ProcessSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 12 },
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container>
        <SectionHeading
          eyebrow="LET'S TALK"
          title="이렇게 이야기를 시작해보세요."
          description="아직 구체적으로 정하지 않아도 괜찮아요."
        />

        <Box
          component="ol"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, minmax(0, 1fr))",
            },
            gap: 4,
            listStyle: "none",
            p: 0,
            mb: 0,
            mt: 6,
          }}
        >
          {consultationSteps.map((step) => (
            <Stack
              component="li"
              key={step.number}
              spacing={2}
              sx={{
                pt: 3,
                borderTop: "1px solid",
                borderColor: "#C8D2C3",
              }}
            >
              <Typography
                sx={{
                  fontSize: 40,
                  fontWeight: 300,
                  color: "#7F977E",
                  letterSpacing: "-0.05em",
                }}
              >
                {step.number}
              </Typography>
              <Typography component="h3" variant="h3">
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: 290, fontSize: 13 }}
              >
                {step.description}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
