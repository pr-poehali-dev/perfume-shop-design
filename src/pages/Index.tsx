import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const fragrances = [
  {
    id: 1,
    name: 'Rose Élégante',
    category: 'Цветочный',
    price: '12 500 ₽',
    notes: ['Роза', 'Пион', 'Белый мускус'],
    description: 'Изысканная композиция с нотами дамасской розы',
    image: 'https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/52d4f521-cd7a-41d7-87b4-396cd71ff258.jpg',
    similar: [2, 3]
  },
  {
    id: 2,
    name: 'Vanille Noir',
    category: 'Восточный',
    price: '14 900 ₽',
    notes: ['Ваниль', 'Сандал', 'Амбра'],
    description: 'Глубокий восточный аромат с бархатистой ванилью',
    image: 'https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/f9e25f66-f59c-47cb-a079-26a4c507f3f5.jpg',
    similar: [4, 5]
  },
  {
    id: 3,
    name: 'Jardin Frais',
    category: 'Свежий',
    price: '11 200 ₽',
    notes: ['Бергамот', 'Зелёный чай', 'Жасмин'],
    description: 'Свежесть утреннего сада в каждой капле',
    image: 'https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/52d4f521-cd7a-41d7-87b4-396cd71ff258.jpg',
    similar: [1, 6]
  },
  {
    id: 4,
    name: 'Oud Mystique',
    category: 'Древесный',
    price: '18 700 ₽',
    notes: ['Уд', 'Кедр', 'Ладан'],
    description: 'Таинственный аромат с редким удом',
    image: 'https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/f9e25f66-f59c-47cb-a079-26a4c507f3f5.jpg',
    similar: [2, 5]
  },
  {
    id: 5,
    name: 'Ambre Doré',
    category: 'Восточный',
    price: '16 300 ₽',
    notes: ['Амбра', 'Пачули', 'Ваниль'],
    description: 'Золотистая амбра в бархатной основе',
    image: 'https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/52d4f521-cd7a-41d7-87b4-396cd71ff258.jpg',
    similar: [2, 4]
  },
  {
    id: 6,
    name: 'Citrus Lumière',
    category: 'Цитрусовый',
    price: '9 900 ₽',
    notes: ['Грейпфрут', 'Вербена', 'Ветивер'],
    description: 'Солнечная свежесть средиземноморских цитрусов',
    image: 'https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/f9e25f66-f59c-47cb-a079-26a4c507f3f5.jpg',
    similar: [3, 1]
  },
];

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

const blogPosts = [
  {
    title: 'Как выбрать парфюм по сезону',
    date: '15 января 2026',
    excerpt: 'Искусство подбора аромата в зависимости от времени года и температуры.',
    image: 'https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/52d4f521-cd7a-41d7-87b4-396cd71ff258.jpg'
  },
  {
    title: 'История парфюмерии: От древности до наших дней',
    date: '8 января 2026',
    excerpt: 'Путешествие через века парфюмерного искусства и его эволюция.',
    image: 'https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/f9e25f66-f59c-47cb-a079-26a4c507f3f5.jpg'
  }
];

const reviews = [
  {
    name: 'Анна К.',
    rating: 5,
    text: 'Rose Élégante — мой любимый аромат! Держится весь день, шлейф невероятный.',
    date: '2 февраля 2026'
  },
  {
    name: 'Дмитрий М.',
    rating: 5,
    text: 'Vanille Noir превзошёл все ожидания. Качество на высоте, упаковка премиальная.',
    date: '28 января 2026'
  },
  {
    name: 'Елена В.',
    rating: 5,
    text: 'Jardin Frais — идеальный летний аромат. Свежий, но не резкий.',
    date: '20 января 2026'
  }
];

function Index() {
  const [selectedFragrance, setSelectedFragrance] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [catalogOpen, setCatalogOpen] = useState(false);

  const selectedPerfume = fragrances.find(f => f.id === selectedFragrance);
  const similarPerfumes = selectedPerfume 
    ? fragrances.filter(f => selectedPerfume.similar.includes(f.id))
    : [];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setCatalogOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-muted/10 relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-secondary/30 via-muted/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-primary/20 via-secondary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-muted/25 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
      </div>
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl z-50 border-b border-secondary/20 shadow-2xl shadow-secondary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 py-5 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl blur-md opacity-60"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-secondary via-primary/80 to-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-serif font-bold tracking-wider bg-gradient-to-r from-primary via-secondary/80 to-primary bg-clip-text text-transparent">LUMIÈRE</h1>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans">Parfum Boutique</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <div className="relative" onMouseEnter={() => setCatalogOpen(true)} onMouseLeave={() => setCatalogOpen(false)}>
                <button className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-1">
                  Каталог
                  <Icon name="ChevronDown" size={16} className={`transition-transform duration-300 ${catalogOpen ? 'rotate-180' : ''}`} />
                </button>
                {catalogOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-secondary/20 overflow-hidden animate-fade-in z-50">
                    <div className="p-3 space-y-1">
                      <button 
                        onClick={() => scrollToSection('catalog')}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                      >
                        <Icon name="Sparkles" size={16} className="text-secondary group-hover:scale-110 transition-transform" />
                        Премиум коллекция
                      </button>
                      <button 
                        onClick={() => scrollToSection('women-catalog')}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                      >
                        <Icon name="Heart" size={16} className="text-muted group-hover:scale-110 transition-transform" />
                        Женский парфюм
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20 transition-all duration-300 hover:shadow-lg hover:scale-105">
                О бренде
              </button>
              <button onClick={() => scrollToSection('blog')} className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Блог
              </button>
              <button onClick={() => scrollToSection('reviews')} className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('delivery')} className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Доставка
              </button>
              <button onClick={() => scrollToSection('contacts')} className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Контакты
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-11 h-11 rounded-full bg-gradient-to-br from-secondary/10 to-muted/10 hover:from-secondary/20 hover:to-muted/20 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110 border border-secondary/20">
                <Icon name="Search" size={20} />
              </button>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary via-primary to-muted rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <button className="relative w-11 h-11 rounded-full bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl text-white">
                  <Icon name="ShoppingBag" size={20} />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gradient-to-br from-muted to-secondary text-white text-[10px] rounded-full flex items-center justify-center font-bold shadow-lg ring-2 ring-white">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-6 animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Коллекция 2026</p>
              <h2 className="text-6xl md:text-7xl font-serif font-light leading-tight">
                Искусство<br />аромата
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Откройте мир изысканной парфюмерии. Каждый аромат — уникальная история, созданная из драгоценных ингредиентов.
              </p>
              <div className="flex gap-4 pt-4">
                <Button onClick={() => scrollToSection('catalog')} size="lg" className="font-sans shadow-lg hover:shadow-xl transition-shadow">
                  Смотреть каталог
                </Button>
                <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="font-sans">
                  О нас
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-muted/30 rounded-2xl blur-2xl"></div>
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/52d4f521-cd7a-41d7-87b4-396cd71ff258.jpg"
                  alt="Luxury perfume"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Наша коллекция</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Тщательно отобранные ароматы от лучших парфюмеров мира
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {fragrances.map((fragrance, index) => (
              <Card 
                key={fragrance.id} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedFragrance(fragrance.id)}
              >
                <CardContent className="p-0">
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img 
                      src={fragrance.image} 
                      alt={fragrance.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="font-sans text-xs">
                        {fragrance.category}
                      </Badge>
                      <span className="font-serif text-sm">{fragrance.price}</span>
                    </div>
                    <h3 className="text-xl font-serif">{fragrance.name}</h3>
                    <p className="text-sm text-muted-foreground">{fragrance.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {fragrance.notes.map((note) => (
                        <span key={note} className="text-xs px-2 py-1 bg-muted rounded-full">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedFragrance && (
            <div className="bg-accent/30 rounded-2xl p-8 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif">Похожие ароматы</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedFragrance(null)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <p className="text-muted-foreground mb-6">
                На основе вашего выбора "{selectedPerfume?.name}" мы рекомендуем:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {similarPerfumes.map((perfume) => (
                  <Card key={perfume.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={perfume.image} 
                          alt={perfume.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-lg">{perfume.name}</h4>
                          <span className="text-sm font-serif">{perfume.price}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{perfume.description}</p>
                        <div className="flex gap-1 flex-wrap">
                          {perfume.notes.slice(0, 2).map((note) => (
                            <span key={note} className="text-xs px-2 py-0.5 bg-muted rounded-full">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="women-catalog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Женский парфюм</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Эксклюзивная коллекция премиальных ароматов для женщин
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {womenPerfumes.map((perfume, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index % 20) * 30}ms` }}
              >
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="secondary" className="font-sans text-xs shrink-0">
                      {perfume.brand}
                    </Badge>
                    <span className="font-serif text-lg font-semibold whitespace-nowrap">{perfume.price.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <h3 className="text-base font-sans font-medium leading-tight min-h-[2.5rem]">{perfume.name}</h3>
                  <p className="text-xs text-muted-foreground">{perfume.volume}</p>
                  <Button className="w-full font-sans text-sm mt-2" size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-light">О бренде LUMIÈRE</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                С 2015 года мы создаём парфюмерные композиции, которые становятся частью вашей истории. 
                Каждый аромат — результат работы талантливых парфюмеров и использования редких натуральных ингредиентов.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша философия проста: парфюм должен быть уникальным отражением личности, 
                а не массовым продуктом. Мы создаём ограниченные коллекции, где каждый флакон — произведение искусства.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-serif mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Ароматов создано</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Парфюмеров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img 
                src="https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/f9e25f66-f59c-47cb-a079-26a4c507f3f5.jpg"
                alt="About brand"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Блог</h2>
            <p className="text-muted-foreground">Всё о парфюмерии и искусстве ароматов</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{post.date}</p>
                    <h3 className="text-2xl font-serif group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto font-sans">
                      Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Отзывы</h2>
            <p className="text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div>
                    <p className="font-serif">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Доставка</h2>
            <p className="text-muted-foreground">Быстро и безопасно по всей России</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Truck" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl">Бесплатная доставка</h3>
                <p className="text-sm text-muted-foreground">При заказе от 15 000 ₽</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Clock" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl">1-3 дня</h3>
                <p className="text-sm text-muted-foreground">Доставка по Москве</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Package" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl">Премиум упаковка</h3>
                <p className="text-sm text-muted-foreground">В каждом заказе</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8 space-y-4">
              <h3 className="font-serif text-2xl mb-4">Условия доставки</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• Доставка по Москве — 1-3 рабочих дня</p>
                <p>• Доставка по России — 3-7 рабочих дней</p>
                <p>• Бесплатная доставка при заказе от 15 000 ₽</p>
                <p>• Курьерская доставка — 500 ₽ (Москва), 800 ₽ (регионы)</p>
                <p>• Самовывоз из салона — бесплатно</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Контакты</h2>
            <p className="text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-serif text-lg mb-1">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-serif text-lg mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-serif text-lg mb-1">Email</h4>
                      <p className="text-muted-foreground">hello@lumiere-parfum.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-serif text-lg mb-1">Часы работы</h4>
                      <p className="text-muted-foreground">Ежедневно с 10:00 до 21:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Сообщение"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <Button className="w-full font-sans">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white py-20 px-6 overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(214,188,250,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(255,222,226,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-secondary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-muted/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-foreground/10 backdrop-blur rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl">LUMIÈRE</h3>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">Искусство создания уникальных ароматов с 2015 года</p>
              <div className="mt-6 flex gap-3">
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-secondary hover:to-primary backdrop-blur flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <Icon name="Instagram" size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-secondary hover:to-primary backdrop-blur flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <Icon name="Facebook" size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-secondary hover:to-primary backdrop-blur flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <Icon name="Youtube" size={18} />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                <Icon name="Layers" size={18} />
                Навигация
              </h4>
              <div className="space-y-2.5 text-sm">
                <button className="text-left opacity-80 hover:opacity-100 hover:translate-x-2 transition-all duration-300 hover:text-secondary">→ Каталог</button>
                <button className="text-left opacity-80 hover:opacity-100 hover:translate-x-2 transition-all duration-300 hover:text-secondary">→ О бренде</button>
                <button className="text-left opacity-80 hover:opacity-100 hover:translate-x-2 transition-all duration-300 hover:text-secondary">→ Блог</button>
                <button className="text-left opacity-80 hover:opacity-100 hover:translate-x-2 transition-all duration-300 hover:text-secondary">→ Доставка</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                <Icon name="FileText" size={18} />
                Информация
              </h4>
              <div className="space-y-2.5 text-sm">
                <button className="text-left opacity-80 hover:opacity-100 hover:translate-x-2 transition-all duration-300 hover:text-muted">→ Политика конфиденциальности</button>
                <button className="text-left opacity-80 hover:opacity-100 hover:translate-x-2 transition-all duration-300 hover:text-muted">→ Условия возврата</button>
                <button className="text-left opacity-80 hover:opacity-100 hover:translate-x-2 transition-all duration-300 hover:text-muted">→ Оплата</button>
                <button className="text-left opacity-80 hover:opacity-100 hover:translate-x-2 transition-all duration-300 hover:text-muted">→ Гарантии качества</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                <Icon name="Mail" size={18} />
                Контакты
              </h4>
              <div className="space-y-3 text-sm opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@lumiere-parfum.ru
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5" />
                  <span>г. Москва, ул. Тверская, 15</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">© 2026 LUMIÈRE. Все права защищены.</p>
            <div className="flex items-center gap-6 text-xs opacity-60">
              <span className="cursor-pointer hover:opacity-100 transition-opacity">Разработано с любовью</span>
              <span className="flex items-center gap-1">
                <Icon name="Heart" size={14} className="fill-current" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;