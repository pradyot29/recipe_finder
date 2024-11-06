export default function Hero() {
    return (
      <div className="relative mb-12 py-24 text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20">
          <h1 className="text-4xl font-bold text-white mb-4">Taylor's Quick Recipe Finder</h1>
          <p className="text-xl text-white mb-8">Discover delicious meals with what you have!</p>
        </div>
      </div>
    )
  }