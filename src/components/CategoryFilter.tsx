interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "", label: "All Works" },
  { id: "commercial", label: "Commercials" },
  { id: "musicvideo", label: "Music Videos" },
  { id: "longform", label: "Long Format" },
];

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-8 md:px-14">
        <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
          {categories.map(({ id, label }) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                onClick={() => onCategoryChange(id)}
                className={`relative shrink-0 py-4 pr-8 text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white/35 hover:text-white/65"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-8 h-px bg-white/60" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
