import { useState } from "react";
import cls from "./Sidebar.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {ThemeSwitcher} from "../../../../shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}
export const Sidebar:FC = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div 
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button type="button" onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
