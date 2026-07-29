import Icon from "./Icon";

// Deterministic gradient variants keyed off category, so the same product
// always renders the same "packshot" without needing real photography.
const variants = {
  laptops: "from-[#1E293B] via-[#0F172A] to-[#0B1220]",
  keyboards: "from-[#1D2B4F] via-[#16213A] to-[#0F172A]",
  mice: "from-[#173B4F] via-[#0F172A] to-[#0B1220]",
  headphones: "from-[#132A4A] via-[#0F172A] to-[#0B1220]",
  gaming: "from-[#2A1B4A] via-[#151B3A] to-[#0B1220]",
  monitors: "from-[#0F2E3A] via-[#0F172A] to-[#0B1220]",
  smartphones: "from-[#1B3A4A] via-[#132038] to-[#0B1220]",
  accessories: "from-[#20304F] via-[#131C33] to-[#0B1220]",
};

export default function ProductVisual({ category, icon, image, className = "" }) {
  const gradient = variants[category] || variants.accessories;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} grain flex items-center justify-center ${className}`}
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-cyan-400/20 blur-2xl" />
      <div className="absolute -bottom-10 -left-6 w-28 h-28 rounded-full bg-blue-500/20 blur-2xl" />
      {image ? (
  <img
    src={image}
    alt=""
    className="w-full h-full object-contain relative"
  />
) : (
  <Icon
    name={icon}
    strokeWidth={1.1}
    className="w-16 h-16 text-white/85 relative"
  />
)}
        
      
    </div>
  );
}
