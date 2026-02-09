import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { initialProducts, type Product } from '@/data/initialProducts';

function Admin() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [selectedCategory, setSelectedCategory] = useState<'premium' | 'women'>('premium');
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadProducts();
    }
  }, []);

  const loadProducts = () => {
    const savedProducts = localStorage.getItem('shop_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('shop_products', JSON.stringify(initialProducts));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === 'Admin' && loginForm.password === 'Www373826483') {
      localStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      loadProducts();
    } else {
      alert('Неверный логин или пароль');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    navigate('/');
  };

  const saveProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    localStorage.setItem('shop_products', JSON.stringify(updatedProducts));
  };

  const handleSaveProduct = (product: Product) => {
    const updatedProducts = editingProduct
      ? products.map(p => p.id === product.id ? product : p)
      : [...products, { ...product, id: Date.now().toString() }];
    
    saveProducts(updatedProducts);
    setEditingProduct(null);
    setShowAddForm(false);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      saveProducts(products.filter(p => p.id !== id));
    }
  };

  const filteredProducts = products.filter(p => p.category === selectedCategory);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-muted/10 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center">Вход в админ-панель</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Логин</label>
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Пароль</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Войти</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-muted/10">
      <nav className="bg-white/70 backdrop-blur-xl border-b border-secondary/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">Админ-панель LUMIÈRE</h1>
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate('/')} variant="outline">
              <Icon name="Home" size={16} className="mr-2" />
              На сайт
            </Button>
            <Button onClick={handleLogout} variant="destructive">
              <Icon name="LogOut" size={16} className="mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-4">
            <Button
              onClick={() => setSelectedCategory('premium')}
              variant={selectedCategory === 'premium' ? 'default' : 'outline'}
            >
              <Icon name="Sparkles" size={16} className="mr-2" />
              Премиум коллекция ({products.filter(p => p.category === 'premium').length})
            </Button>
            <Button
              onClick={() => setSelectedCategory('women')}
              variant={selectedCategory === 'women' ? 'default' : 'outline'}
            >
              <Icon name="Heart" size={16} className="mr-2" />
              Женский парфюм ({products.filter(p => p.category === 'women').length})
            </Button>
          </div>
          <Button onClick={() => { setShowAddForm(true); setEditingProduct(null); }}>
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить товар
          </Button>
        </div>

        {(showAddForm || editingProduct) && (
          <ProductForm
            product={editingProduct}
            category={selectedCategory}
            onSave={handleSaveProduct}
            onCancel={() => { setEditingProduct(null); setShowAddForm(false); }}
          />
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <Badge variant={product.inStock ? 'default' : 'destructive'}>
                    {product.inStock ? 'В наличии' : 'Нет в наличии'}
                  </Badge>
                  <Badge variant="secondary">{product.brand}</Badge>
                </div>
                <h3 className="font-semibold line-clamp-2">{product.name}</h3>
                {product.volume && <p className="text-sm text-muted-foreground">{product.volume}</p>}
                {product.notes && (
                  <div className="flex flex-wrap gap-1">
                    {product.notes.map((note, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-muted rounded-full">
                        {note}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-lg font-serif font-semibold text-primary">
                  {product.price.toLocaleString('ru-RU')} ₽
                </p>
                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={() => setEditingProduct(product)}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Icon name="Edit" size={14} className="mr-1" />
                    Редактировать
                  </Button>
                  <Button
                    onClick={() => handleDeleteProduct(product.id)}
                    variant="destructive"
                    size="sm"
                  >
                    <Icon name="Trash2" size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Icon name="Package" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-serif mb-2">Нет товаров в этой категории</h3>
            <p className="text-muted-foreground mb-6">Добавьте первый товар</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductForm({ 
  product, 
  category, 
  onSave, 
  onCancel 
}: { 
  product: Product | null; 
  category: 'premium' | 'women';
  onSave: (product: Product) => void; 
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<Product>(
    product || {
      id: '',
      name: '',
      category,
      price: 0,
      volume: '',
      notes: [],
      description: '',
      brand: '',
      image: 'https://cdn.poehali.dev/projects/16761958-9f40-4c0a-86fa-891d5a3aada1/files/52d4f521-cd7a-41d7-87b4-396cd71ff258.jpg',
      inStock: true
    }
  );

  const [notesInput, setNotesInput] = useState(product?.notes?.join(', ') || '');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const notes = notesInput.split(',').map(n => n.trim()).filter(Boolean);
    onSave({ ...formData, notes });
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="font-serif">
          {product ? 'Редактировать товар' : 'Добавить товар'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Название</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Бренд</label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Цена (₽)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Объем</label>
              <input
                type="text"
                value={formData.volume || ''}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="100 ml"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Ноты (через запятую)</label>
            <input
              type="text"
              value={notesInput}
              onChange={(e) => setNotesInput(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Роза, Ваниль, Мускус"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Описание</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Изображение товара</label>
            <div className="space-y-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {formData.image && (
                <div className="mt-2 aspect-video w-full max-w-xs rounded-lg overflow-hidden bg-muted border-2 border-secondary/20">
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="inStock"
              checked={formData.inStock}
              onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
              className="w-4 h-4"
            />
            <label htmlFor="inStock" className="text-sm font-medium">В наличии</label>
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              <Icon name="Save" size={16} className="mr-2" />
              Сохранить
            </Button>
            <Button type="button" onClick={onCancel} variant="outline">
              Отмена
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default Admin;