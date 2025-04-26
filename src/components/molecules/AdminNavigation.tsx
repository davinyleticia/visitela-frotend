import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiLink, FiUsers, FiEdit, FiBarChart2, FiChevronDown, FiChevronUp, FiSettings } from "react-icons/fi";
import { FaRegWindowClose, FaCalendarAlt, FaUsers, FaHome, FaAvianex } from "react-icons/fa";


const tabs = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "links", label: "Links", icon: FiLink },
  { id: "Agenda", label: "Agenda", icon: FaCalendarAlt },
  { id: "Viagens", label: "Viagens", icon: FaAvianex },
  { id: "usersmember", label: "Membros", icon: FaUsers },
  { id: "users", label: "Usuários", icon: FiUsers },
  { id: "appearance", label: "Aparência", icon: FiEdit },
  { id: "analytics", label: "Analytics", icon: FiBarChart2 },
  { id: "settings", label: "Configurações", icon: FiSettings },
  { id: "sair", label: "Sair", icon: FaRegWindowClose },
];

interface AdminNavigationProps {
  onTabChange?: (tabId: string) => void;
  currentTab?: string;
}

export const AdminNavigation = ({ onTabChange, currentTab }: AdminNavigationProps) => {
    const [activeTab, setActiveTab] = useState("links");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleTabClick = (id: string) => {
      setActiveTab(id);
      onTabChange?.(id);
    };
  
    const toggleExpansion = () => {
      setIsExpanded(prev => !prev);
    };

    console.log("activeTab", currentTab);
  
    useEffect(() => {
      const onScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    return (
        <motion.div
        animate={{
          backgroundColor: "#F9FAFB",
          boxShadow: isScrolled ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
        }}
        className="
          fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md
          flex flex-col items-center rounded-t-2xl
          sm:top-0 sm:left-0 sm:bottom-0 sm:right-auto sm:h-screen sm:w-30 sm:rounded-none sm:overflow-y-auto
        "
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Exibir os 4 primeiros ícones */}
        <div className="grid grid-cols-3 sm:py-7  gap-4 w-full sm:flex sm:flex-col sm:items-center sm:gap-6 sm:mt-8">

          {tabs.slice(0, 3).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleTabClick(id)}
              className="flex flex-col items-center text-gray-600 hover:text-gray-800 focus:outline-none relative"
            >
              <Icon className={`w-6 h-6 mb-1 my-10 ${isScrolled ? "w-5 h-5" : "w-6 h-6"}`} />
              <span
                className={`text-sm transition-all text-xs sm:text-sm sm:block hidden ${
                  activeTab === id ? "font-semibold text-black" : "text-gray-500"
                }`}
              >
                {label}
              </span>
              {activeTab === id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black rounded-full"
                />
              )}
            </button>
          ))}
        </div>
  
        {/* Exibir ícones adicionais em grid de 4 */}
        {isExpanded && (
          <div className="grid grid-cols-3 gap-4 sm:py-7 w-full sm:flex sm:flex-col sm:items-center sm:gap-6 sm:mt-8">

            {tabs.slice(3).map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleTabClick(id)}
                className="flex flex-col items-center text-gray-600 hover:text-gray-800 focus:outline-none relative"
              >
                <Icon className={`w-6 h-6 my-10 mb-1 ${isScrolled ? "w-5 h-5" : "w-6 h-6"}`} />
                <span
                  className={`text-sm transition-all text-xs sm:text-sm sm:block hidden ${
                    activeTab === id ? "font-semibold text-black" : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
                {activeTab === id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        )}
  
        {/* Botão de alternância */}
        <button
          onClick={toggleExpansion}
          className="mt-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {isExpanded ? (
            <FiChevronUp className="w-6 h-6" />
          ) : (
            <FiChevronDown className="w-6 h-6" />
          )}
        </button>
      </motion.div>
    );
  };
  