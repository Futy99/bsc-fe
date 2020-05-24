import {
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from '@material-ui/core';
import i18next from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ChangeLanguage, Container, TopBar, TopBarText } from './styled';

interface IProps {}

const Wrapper = (props: React.PropsWithChildren<IProps>) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();
  const theme = useTheme();
  const { children } = props;

  const handleButtonClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (
    closedByInsideClick: boolean = false,
    language: string = t('components.wrapper.en'),
  ) => {
    if (closedByInsideClick) {
      i18next.changeLanguage(language);
    }
    setAnchorEl(null);
  };
  return (
    <Container>
      <TopBar theme={theme}>
        <TopBarText>{t('components.wrapper.heading')}</TopBarText>
        <ChangeLanguage>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={e => handleButtonClick(e)}
          >
            {t('components.wrapper.changeLanguage')}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose(true, 'cs')}>
              <Typography color="textSecondary">
                {t('components.wrapper.cs')}
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleClose(true, 'en')}>
              <Typography color="textSecondary">
                {t('components.wrapper.en')}
              </Typography>
            </MenuItem>
          </Menu>
        </ChangeLanguage>
      </TopBar>
      <>{children}</>
    </Container>
  );
};

export default Wrapper;
