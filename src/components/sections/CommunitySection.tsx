import { Star, Heart, Users } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4e107723-5ad3-4aee-abe0-1d443825b87c.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="container relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-8">
          Comunidade de Oração
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <Users className="w-16 h-16 text-gold mx-auto mb-6" />
          <p className="text-xl mb-8 text-white">
            Junte-se a milhares de pessoas que estão transformando suas vidas através da oração
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center text-white">
              <Star className="w-8 h-8 text-gold mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-primary">5000+</h3>
              <p className="text-gray-300">Membros Ativos</p>
            </div>
            <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center text-white">
              <Heart className="w-8 h-8 text-gold mx-auto mb-2" />
              <h3 className="font-bold text-2xl text-primary">10000+</h3>
              <p className="text-gray-300">Orações Compartilhadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;