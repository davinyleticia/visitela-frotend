interface NavItemProps {
  text: string;
}

export default function NavItem({ text }: NavItemProps) {
  return (
    <a href="#" className="text-gray-600 hover:text-gray-900 px-4">
      {text}
    </a>
  );
}
