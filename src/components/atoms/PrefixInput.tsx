interface PrefixInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export default function PrefixInput({ value, onChange }: PrefixInputProps) {
    return (
      <div className="flex border border-gray-300 rounded-md overflow-hidden">
        <span className="bg-gray-100 px-3 flex items-center text-gray-500">Visite.la/</span>
        <input 
          type="text" 
          value={value} 
          onChange={onChange} 
          className="flex-1 px-3 py-2 outline-none"
        />
      </div>
    );
  }