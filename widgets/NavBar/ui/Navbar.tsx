import React from "react";
import cls from "./Navbar.module.scss";
import {classNames} from "../../../shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [])}>
    <div className={cls.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={cls.mainLink}
      >
        Главная страница
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        О сайте
      </AppLink>
    </div>
  </div>
);
