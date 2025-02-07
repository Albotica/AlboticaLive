import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Info, Briefcase, Box, MessageSquare } from 'lucide-react';

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products",
      link: "/products",
      icon: <Box className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <MessageSquare className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      setIsAtTop(window.scrollY < 50);

      if (!isAtTop) {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          backgroundColor: isAtTop ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.8)',
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10",
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo section with better mobile spacing */}
            <div 
              className="flex items-center cursor-pointer shrink-0 mr-4" 
              onClick={() => handleNavigation('/')}
            >
              <img 
                src="/logo.png" 
                alt="Albotica Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-bold text-white hidden xs:block">Albotica</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((navItem) => (
                <motion.button
                  key={navItem.link}
                  onClick={() => handleNavigation(navItem.link)}
                  className={cn(
                    "text-sm transition-colors relative group",
                    location.pathname === navItem.link
                      ? "text-white font-medium"
                      : "text-neutral-400 hover:text-white"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {navItem.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Navigation - Now scrollable */}
            <div className="flex md:hidden overflow-x-auto no-scrollbar items-center space-x-6 -mx-4 px-4">
              {navItems.map((navItem) => (
                <motion.button
                  key={navItem.link}
                  onClick={() => handleNavigation(navItem.link)}
                  className={cn(
                    "relative flex-shrink-0",
                    location.pathname === navItem.link
                      ? "text-white"
                      : "text-neutral-400"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {navItem.icon}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};