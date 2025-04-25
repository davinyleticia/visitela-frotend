interface NavItemProps {
  text: string;
  onClick?: () => void;
}

export default function NavItem({ text, onClick }: NavItemProps) {
  return (
    <a onClick={onClick} className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm sm:text-base transition-all cursor-pointer">
      {text}
    </a>
  );
}
