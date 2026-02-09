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

export default function Index() {
  const [selectedFragrance, setSelectedFragrance] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const selectedPerfume = fragrances.find(f => f.id === selectedFragrance);
  const similarPerfumes = selectedPerfume 
    ? fragrances.filter(f => selectedPerfume.similar.includes(f.id))
    : [];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold tracking-wide">LUMIÈRE</h1>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('catalog')} className="text-sm hover:text-primary transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О бренде</button>
              <button onClick={() => scrollToSection('blog')} className="text-sm hover:text-primary transition-colors">Блог</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('delivery')} className="text-sm hover:text-primary transition-colors">Доставка</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingBag" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
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
                <Button onClick={() => scrollToSection('catalog')} size="lg" className="font-sans">
                  Смотреть каталог
                </Button>
                <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="font-sans">
                  О нас
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="aspect-square rounded-2xl overflow-hidden">
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

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">LUMIÈRE</h3>
              <p className="text-sm opacity-80">Искусство создания уникальных ароматов</p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-3">Навигация</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="cursor-pointer hover:opacity-100 transition-opacity">Каталог</p>
                <p className="cursor-pointer hover:opacity-100 transition-opacity">О бренде</p>
                <p className="cursor-pointer hover:opacity-100 transition-opacity">Блог</p>
                <p className="cursor-pointer hover:opacity-100 transition-opacity">Доставка</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-3">Информация</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="cursor-pointer hover:opacity-100 transition-opacity">Политика конфиденциальности</p>
                <p className="cursor-pointer hover:opacity-100 transition-opacity">Условия возврата</p>
                <p className="cursor-pointer hover:opacity-100 transition-opacity">Оплата</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-3">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
            © 2026 LUMIÈRE. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
