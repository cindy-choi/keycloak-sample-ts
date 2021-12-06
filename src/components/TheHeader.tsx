import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ROUTES from '@/constants/routes';
import SvgIcon from '@mui/material/SvgIcon';
import { useKeycloak } from '@react-keycloak/web';
import { mdiExitToApp } from '@mdi/js';
import { useHistory, useLocation } from 'react-router';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .header__inner {
    width: 100%;
    max-width: 1024px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
  }

  .menu-list {
    display: flex;
    margin-left: auto;
    align-items: center;
  }

  .menu-item {
    height: 60px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);

    font-size: 14px;
    line-height: 20px;
    font-weight: 400;

    &:hover { color: rgba(255, 255, 255, 0.8); }
    &.active, &:active { color: #0d0f45; }
    &.current { color: #0d0f45; }
  }

  svg { width: 1rem; height: 1rem; }
`;

export const TheHeader = () => {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();
  const history = useHistory();
  const location = useLocation();

  const menuList = [
    { title: t('menu.main'), href: ROUTES.MAIN, },
    { title: t('menu.my'), href: ROUTES.MY, },
    { title: t('menu.services'), href: ROUTES.SERVICES, },
  ];

  const handleMenuItemClick = (href: string) => {
    history.push(href);
  };

  const isActive = (href: string) => {
    return location.pathname.startsWith(href) ? 'active' : '';
  };
  
  useEffect(() => {
    console.log(keycloak);
  }, [keycloak]);
  return (
    <HeaderWrapper>
      <div className="header__inner">
        <div className="logo" onClick={() => handleMenuItemClick(ROUTES.ROOT)}>
          Sample
        </div>

        <div className="menu-list">
          {
            menuList.map(menu => (
              <div key={menu.title} className={`menu-item ${isActive(menu.href)}`} onClick={() => handleMenuItemClick(menu.href)}>
                { menu.title }
              </div>
            ))
          }
          {
            keycloak?.authenticated ? (
              <SvgIcon onClick={() => keycloak.logout({ redirectUri: 'http://localhost:3000', })}> <path d={mdiExitToApp} /> </SvgIcon>
            ) : null
          }
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default TheHeader;
