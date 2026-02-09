import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const womenPerfumes = [
  { name: 'Lancome Idole L\'Eau De Parfum Nectar', volume: '100 ml', price: 4650, brand: 'Lancome' },
  { name: 'Trussardi Donna Pink Marina', volume: '100 ml', price: 4650, brand: 'Trussardi' },
  { name: 'Tiffany & Co Rose Gold Intense', volume: '75 ml', price: 4750, brand: 'Tiffany' },
  { name: 'Lancome La Vie Est Belle Vanille Nude', volume: '100 ml', price: 4750, brand: 'Lancome' },
  { name: 'Yves Saint Laurent Libre L\'Eau Nue', volume: '90 ml', price: 4650, brand: 'Yves Saint Laurent' },
  { name: 'Tom Ford Tobacco Vanille', volume: '100 ml', price: 4499, brand: 'Tom Ford' },
  { name: 'Dolce & Gabbana 3 L\'imperatrice', volume: '100 ml', price: 4299, brand: 'Dolce and Gabbana' },
  { name: 'Tom Ford Vanilla Sex', volume: '100 ml', price: 4499, brand: 'Tom Ford' },
  { name: 'Chloe Chloe Eau de Parfum', volume: '75 ml', price: 4399, brand: 'Chloe' },
  { name: 'Lancome La Vie Est Belle Sparkling Edition', volume: '100 ml', price: 4750, brand: 'Lancome' },
  { name: 'Givenchy Ange Ou Demon Le Secret', volume: '100 ml', price: 4650, brand: 'Givenchy' },
  { name: 'Ex Nihilo Fleur Narcotique Signature Musc', volume: '100 ml', price: 4750, brand: 'Ex Nihilo' },
  { name: 'Trussardi Delicate Rose', volume: '100 ml', price: 4550, brand: 'Trussardi' },
  { name: 'Chanel Coco Mademoiselle', volume: '100 ml', price: 4450, brand: 'Chanel' },
  { name: 'Chanel Chance Eau Fraiche', volume: '100 ml', price: 4550, brand: 'Chanel' },
  { name: 'Trussardi Donna', volume: '100 ml', price: 4550, brand: 'Trussardi' },
  { name: 'Escentric Molecules Molecule 01 + Mandarin', volume: '100 ml', price: 4550, brand: 'Escentric Molecules' },
  { name: 'Dolce & Gabbana Light Blue', volume: '100 ml', price: 4450, brand: 'Dolce and Gabbana' },
  { name: 'Dolce & Gabbana Devotion', volume: '100 ml', price: 4750, brand: 'Dolce and Gabbana' },
  { name: 'Attar Collection Musk Kashmir', volume: '100 ml', price: 4950, brand: 'Attar Collection' },
  { name: 'Flora by Gucci Flora Gorgeous Gardenia', volume: '100 ml', price: 4650, brand: 'Gucci' },
  { name: 'Tom Ford Electric Cherry', volume: '100 ml', price: 4650, brand: 'Tom Ford' },
  { name: 'Dolce & Gabbana Light Blue Sun Pour Femme', volume: '100 ml', price: 4450, brand: 'Dolce and Gabbana' },
  { name: 'Lancome Miracle', volume: '100 ml', price: 4450, brand: 'Lancome' },
  { name: 'Yves Saint Laurent Libre Eau de Parfum Intense', volume: '90 ml', price: 4550, brand: 'Yves Saint Laurent' },
  { name: 'My Burberry Burberry', volume: '90 ml', price: 4550, brand: 'Burberry' },
  { name: 'Lancome Tresor Midnight Rose', volume: '75 ml', price: 4550, brand: 'Lancome' },
  { name: 'Zarkoperfume Molecule The Muse', volume: '100 ml', price: 4550, brand: 'Zarkoperfume' },
  { name: 'Ex Nihilo Viper Green', volume: '100 ml', price: 4750, brand: 'Ex Nihilo' },
  { name: 'Tom Ford Fucking Fabulous', volume: '100 ml', price: 4550, brand: 'Tom Ford' },
  { name: 'Tom Ford Rose Prick', volume: '100 ml', price: 4399, brand: 'Tom Ford' },
  { name: 'Lacoste L.12.12 Silver Rose', volume: '100 ml', price: 4550, brand: 'Lacoste' },
  { name: 'Набор из 4 ароматов Tiziana Terenzi', volume: '4х35 ml', price: 4750, brand: 'Tiziana Terenzi' },
  { name: 'Chanel Coco Mademoiselle Intense', volume: '100 ml', price: 4499, brand: 'Chanel' },
  { name: 'Versace Bright Crystal Parfum', volume: '100 ml', price: 4550, brand: 'Versace' },
  { name: 'Lancome La Vie Est Belle', volume: '75 ml', price: 4550, brand: 'Lancome' },
  { name: 'Dolce & Gabbana L\'Imperatrice Royale', volume: '100 ml', price: 4499, brand: 'Dolce and Gabbana' },
  { name: 'Givenchy Ange ou Demon Le Secret Eau De Toilette', volume: '100 ml', price: 4550, brand: 'Givenchy' },
  { name: 'Yves Saint Laurent Black Opium', volume: '90 ml', price: 4650, brand: 'Yves Saint Laurent' },
  { name: 'Tom Ford Lost Cherry', volume: '50 ml', price: 4699, brand: 'Tom Ford' },
  { name: 'Gucci Guilty Elixir De Parfum Pour Femme', volume: '60 ml', price: 4650, brand: 'Gucci' },
  { name: 'Kayali Yum Boujee Marshmallow 81', volume: '100 ml', price: 4850, brand: 'Kayali' },
  { name: 'Dior Hypnotic Poison', volume: '100 ml', price: 4750, brand: 'Dior' },
  { name: 'Givenchy L\'Interdit (2018)', volume: '100 ml', price: 4650, brand: 'Givenchy' },
  { name: 'Tom Ford Electric Cherry', volume: '50 ml', price: 4450, brand: 'Tom Ford' },
  { name: 'Giorgio Armani Si Passione Intense', volume: '100 ml', price: 4650, brand: 'Armani' },
  { name: 'Dolce & Gabbana Q Intense', volume: '100 ml', price: 4650, brand: 'Dolce and Gabbana' },
  { name: 'Gucci Oud Intense', volume: '90 ml', price: 4650, brand: 'Gucci' },
  { name: 'Escentric Molecules Molecule 01', volume: '100 ml', price: 4450, brand: 'Escentric Molecules' },
  { name: 'Dior New Look', volume: '100 ml', price: 4750, brand: 'Dior' },
  { name: 'Dior Balade Sauvage', volume: '100 ml', price: 4750, brand: 'Dior' },
  { name: 'Kenzo L\'Eau Kenzo Glacee Pour Femme', volume: '100 ml', price: 4550, brand: 'Kenzo' },
  { name: 'Hugo Boss Boss Alive Parfum', volume: '80 ml', price: 4650, brand: 'Hugo Boss' },
  { name: 'Hugo Boss Boss Alive Intense', volume: '80 ml', price: 4650, brand: 'Hugo Boss' },
  { name: 'Karl Lagerfeld Ikonik Woman', volume: '100 ml', price: 4650, brand: 'Karl Lagerfeld' },
  { name: 'Lacoste Pour Femme Legere', volume: '90 ml', price: 4650, brand: 'Lacoste' },
  { name: 'Givenchy Temeraire', volume: '100 ml', price: 4650, brand: 'Givenchy' },
  { name: 'Tom Ford Noir De Noir', volume: '100 ml', price: 4650, brand: 'Tom Ford' },
  { name: 'Chanel Chance', volume: '50 ml', price: 4370, brand: 'Chanel' },
  { name: 'Chanel Chance Eau Tendre', volume: '50 ml', price: 4370, brand: 'Chanel' },
  { name: 'Byredo Mojave Ghost Absolu de Parfum', volume: '100 ml', price: 4850, brand: 'Byredo' },
  { name: 'Bvlgari Splendida Patchouli Tentation', volume: '100 ml', price: 4399, brand: 'Bvlgari' },
  { name: 'Salvatore Ferragamo Incanto Shine', volume: '100 ml', price: 4450, brand: 'Salvatore Ferragamo' },
  { name: 'Tom Ford Mandarino Di Amalfi', volume: '100 ml', price: 4650, brand: 'Tom Ford' },
  { name: 'Burberry Goddess', volume: '100 ml', price: 4550, brand: 'Burberry' },
  { name: 'Versace Bright Crystal', volume: '90 ml', price: 4550, brand: 'Versace' },
  { name: 'Chanel Chance Eau Fraiche Eau de Parfum', volume: '100 ml', price: 4650, brand: 'Chanel' },
  { name: 'Ex Nihilo Fleur Narcotique', volume: '100 ml', price: 4990, brand: 'Ex Nihilo' },
  { name: 'Givenchy Equivoque', volume: '100 ml', price: 4750, brand: 'Givenchy' },
  { name: 'Escentric Molecules Escentric 02', volume: '100 ml', price: 4550, brand: 'Escentric Molecules' },
  { name: 'Dior Miss Eau de Parfum 2021', volume: '100 ml', price: 4650, brand: 'Dior' },
  { name: 'Narciso Rodriguez Narciso Poudree', volume: '90 ml', price: 4550, brand: 'Narciso Rodriguez' },
  { name: 'Lanvin Eclat d\'Arpege', volume: '100 ml', price: 4550, brand: 'Lanvin' },
  { name: 'Chanel Chance Eau Tendre', volume: '100 ml', price: 4399, brand: 'Chanel' },
  { name: 'Lacoste Pour Femme 2003', volume: '90 ml', price: 4550, brand: 'Lacoste' },
  { name: 'Carolina Herrera Good Girl', volume: '80 ml', price: 4750, brand: 'Carolina Herrera' },
  { name: 'Tom Ford Lost Cherry', volume: '100 ml', price: 4750, brand: 'Tom Ford' },
  { name: 'Byredo Rose Of No Man\'s Land Absolu de Parfum', volume: '100 ml', price: 4850, brand: 'Byredo' },
  { name: 'Chanel Chance Eau Tendre Eau De Parfum', volume: '100 ml', price: 4650, brand: 'Chanel' },
  { name: 'Chanel Chance', volume: '100 ml', price: 4550, brand: 'Chanel' },
  { name: 'Tom Ford Eau de Vert Boheme', volume: '50 ml', price: 4399, brand: 'Tom Ford' },
  { name: 'Tom Ford Soleil Brulant', volume: '50 ml', price: 4399, brand: 'Tom Ford' },
  { name: 'Tiziana Terenzi Gold Rose Oudh', volume: '100 ml', price: 4850, brand: 'Tiziana Terenzi' },
  { name: 'Ralph Lauren Romance Rose', volume: '100 ml', price: 4399, brand: 'Ralph Lauren' }
];

function WomenPerfume() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('Все');

  const brands = ['Все', ...Array.from(new Set(womenPerfumes.map(p => p.brand)))].sort();

  const filteredPerfumes = womenPerfumes.filter(perfume => {
    const matchesSearch = perfume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          perfume.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'Все' || perfume.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-muted/10 relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-secondary/30 via-muted/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-primary/20 via-secondary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-muted/25 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
      </div>

      <nav className="sticky top-0 w-full bg-white/70 backdrop-blur-2xl z-50 border-b border-secondary/20 shadow-2xl shadow-secondary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 py-5 relative">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl blur-md opacity-60"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-secondary via-primary/80 to-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-serif font-bold tracking-wider bg-gradient-to-r from-primary via-secondary/80 to-primary bg-clip-text text-transparent">LUMIÈRE</h1>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans">Parfum Boutique</p>
              </div>
            </button>
            <Button onClick={() => navigate('/')} variant="outline" className="font-sans">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Женский парфюм
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Эксклюзивная коллекция премиальных ароматов для женщин от ведущих мировых брендов
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10 space-y-4 animate-fade-in">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск по названию или бренду..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-secondary/30 bg-white/80 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all shadow-lg font-sans"
              />
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              {brands.slice(0, 15).map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-4 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
                    selectedBrand === brand
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                      : 'bg-white/60 backdrop-blur hover:bg-white/80 border border-secondary/20 hover:shadow-md'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 text-center">
            <p className="text-muted-foreground font-sans">
              Найдено: <span className="font-semibold text-primary">{filteredPerfumes.length}</span> ароматов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPerfumes.map((perfume, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 animate-fade-in border-2 border-transparent hover:border-secondary/30"
                style={{ animationDelay: `${(index % 20) * 30}ms` }}
              >
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="secondary" className="font-sans text-xs shrink-0">
                      {perfume.brand}
                    </Badge>
                    <span className="font-serif text-lg font-semibold whitespace-nowrap text-primary">{perfume.price.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <h3 className="text-base font-sans font-medium leading-tight min-h-[2.5rem] group-hover:text-primary transition-colors">{perfume.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Package" size={14} />
                    {perfume.volume}
                  </p>
                  <Button className="w-full font-sans text-sm mt-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all" size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPerfumes.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-serif mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground mb-6">Попробуйте изменить параметры поиска</p>
              <Button onClick={() => { setSearchQuery(''); setSelectedBrand('Все'); }} variant="outline">
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default WomenPerfume;
