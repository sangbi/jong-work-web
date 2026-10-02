"use client";

import { Stack, Typography } from "@mui/material";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Stack spacing={2}>
      <Typography variant="overline" color="primary.main">
        {eyebrow}
      </Typography>

      <Typography
        component="h2"
        variant="h2"
        sx={{
          fontSize: { xs: 28, md: 40 },
          wordBreak: "keep-all",
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 480 }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}
