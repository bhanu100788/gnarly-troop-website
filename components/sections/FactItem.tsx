interface FactItemProps {
  label: string;
  value: string;
  description: string;
}

export default function FactItem({ label, value, description }: FactItemProps) {
  return (
    <div>
      <p className="text-gray-700 font-bold tracking-widest mb-3">{label}</p>
      <h2 className="text-5xl font-extrabold text-[#2c3a46]">{value}</h2>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
