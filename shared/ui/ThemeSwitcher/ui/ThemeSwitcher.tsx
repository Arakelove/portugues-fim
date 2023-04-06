import LightIcon from "../../../../public/icons/theme-light.svg";
import DarkIcon from "../../../../public/icons/theme-dark.svg";
import {classNames} from "../../../lib/classNames/classNames";
import {Button, ThemeButton} from "../../Button/Button";
import {Theme, useTheme} from "../../../../app/providers/ThemeProvider";
import Image from 'next/image';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <Image src={DarkIcon} alt=''/> : <Image src={LightIcon} alt=''/>}
    </Button>
  );
};
