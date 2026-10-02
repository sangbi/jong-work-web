"use client";

import { useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowOutward, Close, Menu, WbTwilight } from "@mui/icons-material";
import { navigation, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(true);

  const openMenu = () => {
    restoreFocusRef.current = true;
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  // 메뉴 항목을 누르면 해당 영역으로 이동하므로 버튼에 포커스를 돌리지 않습니다.
  const closeAfterNavigation = () => {
    restoreFocusRef.current = false;
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(250, 248, 243, 0.94)",
          color: "text.primary",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid",
          borderColor: "divider",
          touchAction: "manipulation",
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: "76px", md: "88px" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Link
              href="#main"
              onClick={(event) => event.preventDefault()}
              underline="none"
              color="inherit"
              aria-label={site.name}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid",
                    borderColor: "primary.main",
                    borderRadius: "50%",
                  }}
                >
                  <WbTwilight color="primary" sx={{ fontSize: 25 }} />
                </Box>

                <Stack spacing={0.25}>
                  <Typography
                    sx={{
                      fontSize: { xs: 17, md: 20 },
                      fontWeight: 800,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {site.name}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 8, letterSpacing: "0.2em" }}
                  >
                    MISA SAE BYEOK
                  </Typography>
                </Stack>
              </Stack>
            </Link>

            <Stack
              component="nav"
              aria-label="주요 메뉴"
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  underline="hover"
                  color="text.primary"
                  sx={{ fontSize: 13 }}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                href="#contact"
                variant="outlined"
                endIcon={<ArrowOutward />}
                sx={{ borderRadius: 10 }}
              >
                매장 안내
              </Button>
            </Stack>

            <IconButton
              ref={menuButtonRef}
              aria-label="메뉴 열기"
              aria-expanded={open}
              onClick={openMenu}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={closeMenu}
        ModalProps={{
          disableRestoreFocus: true,
        }}
        slotProps={{
          paper: {
            sx: {
              width: "min(320px, 85vw)",
              bgcolor: "background.default",
              p: 2,
            },
          },
          transition: {
            onExited: () => {
              if (restoreFocusRef.current) {
                menuButtonRef.current?.focus({ preventScroll: true });
              }
            },
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight={700}>{site.name}</Typography>
          <IconButton aria-label="메뉴 닫기" onClick={closeMenu}>
            <Close />
          </IconButton>
        </Stack>

        <List component="nav" aria-label="모바일 메뉴" sx={{ mt: 3 }}>
          {navigation.map((item) => (
            <ListItemButton
              component="a"
              href={item.href}
              key={item.href}
              onClick={closeAfterNavigation}
            >
              <ListItemText primary={item.label} />
              <ArrowOutward fontSize="small" />
            </ListItemButton>
          ))}
        </List>

        <Button
          href="#contact"
          variant="contained"
          endIcon={<ArrowOutward />}
          onClick={() => setOpen(false)}
          sx={{ mt: 2 }}
        >
          매장 위치 확인
        </Button>
      </Drawer>
    </>
  );
}
