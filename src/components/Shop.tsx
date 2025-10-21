import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Signature Oil Perfume",
    category: "Oil Perfume",
    image: "https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc1OTI1NDgzNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Designer Fragrance Collection",
    category: "Designer Fragrance",
    image: "https://images.unsplash.com/photo-1624798956425-ef88fc12b540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGZyYWdyYW5jZXxlbnwxfHx8fDE3NTkyOTg4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Elite Perfume Set",
    category: "Premium Collection",
    image: "https://images.unsplash.com/photo-1655500061669-1f8ac338a319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwY29sbGVjdGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzU5MjQ4ODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Body Mist Collection",
    category: "Body Mist",
    image: "https://images.unsplash.com/photo-1585250815365-a90a469677c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5JTIwbWlzdCUyMGJvdHRsZXxlbnwxfHx8fDE3NTkyOTg4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    name: "Essential Oil Perfume",
    category: "Oil Perfume",
    image: "https://images.unsplash.com/photo-1603720832922-b2db800821bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3NlbnRpYWwlMjBvaWwlMjBwZXJmdW1lfGVufDF8fHx8MTc1OTI5ODg3NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    name: "Luxury Spray Fragrance",
    category: "Designer Fragrance",
    image: "https://images.unsplash.com/photo-1752432067207-811a64eda434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFncmFuY2UlMjBzcHJheSUyMGJvdHRsZXxlbnwxfHx8fDE3NTkyOTg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export default function Shop() {
  return (
    <section id="shop" className="min-h-screen bg-[#E5DDD5] px-8 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#8B6F47] text-5xl mb-4 tracking-wide text-center">Our Collection</h2>
        <p className="text-[#6B5B4F] text-center mb-16 max-w-2xl mx-auto">
          Discover our curated selection of authentic fragrances, from undiluted oil perfumes to designer scents
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="aspect-square overflow-hidden bg-[#F5F5F0]">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-[#8B6F47] text-sm uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h3 className="text-[#3B2F2F] text-xl">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}