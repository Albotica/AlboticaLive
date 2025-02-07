import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useLocation } from 'react-router-dom'
import { DivideIcon as LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"
import { useLayoutEffect } from "react"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function TubelightNavbar({ items, className }: NavBarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const currentItem = items.find(item => item.url === location.pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [location.pathname, items])

  const handleNavigation = (url: string, name: string) => {
    setActiveTab(name)
    navigate(url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed top-0 left-0 right-0 z-50 pt-6 px-4",
            className,
          )}
        >
          <div className="max-w-7xl mx-auto">
            {/* Mobile View: Stack logo and nav vertically */}
            <div className="md:flex md:items-center md:justify-between">
              {/* Logo Section */}
              <div 
                className="flex items-center justify-center md:justify-start mb-4 md:mb-0 cursor-pointer" 
                onClick={() => handleNavigation('/', 'Home')}
              >
                <img 
                  src="logo.png" 
                  alt="Albotica Logo" 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-white ml-2">Albotica</span>
              </div>
              
              {/* Navigation Section */}
              <div className="flex items-center justify-center gap-3 bg-background/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                {items.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name

                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.url, item.name)}
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-colors",
                        "text-white/80 hover:text-white",
                        isActive && "bg-white/5 text-white",
                      )}
                    >
                      <span className="hidden md:inline">{item.name}</span>
                      <span className="md:hidden">
                        <Icon size={16} strokeWidth={2.5} />
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="lamp"
                          className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                            <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                            <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                            <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                          </div>
                        </motion.div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
