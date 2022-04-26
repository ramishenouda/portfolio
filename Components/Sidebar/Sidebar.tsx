import type { NextPage } from 'next';
import styles from '../../styles/Sidebar.module.css';

import { IoCallOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { GiHumanPyramid, GiTechnoHeart, GiRobotGolem } from 'react-icons/gi';
import { FiPaperclip } from 'react-icons/fi';

interface SidebarItemsProps {
  icon: JSX.Element;
  text: string;
}

export const Sidebar: NextPage = () => {
  return (
    <nav className={`${styles.sidebar} flex flex-col items-center justify-center w-16 my-auto h-screen bg-gray-900`}>
      <div className="flex flex-col my-auto">
        <SidebarItem text="About me 🙇" icon={<BsPerson size="32" />} />
        <SidebarItem text="Technologies 👨‍💻" icon={<GiTechnoHeart size="32" />} />
        <SidebarItem text="Projects 🤖" icon={<GiRobotGolem size="32" />} />
        <SidebarItem text="Testimonials 🧤" icon={<GiHumanPyramid size="32" />} />
        <SidebarItem text="Resume 📰" icon={<FiPaperclip size="32" />} />
        <SidebarItem text="Contact 🤙" icon={<IoCallOutline size="32" />} />
      </div>
    </nav>
  );
};

const SidebarItem = ({ icon, text }: SidebarItemsProps) => {
  return (
    <div className={`sidebar-icon group`}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};
