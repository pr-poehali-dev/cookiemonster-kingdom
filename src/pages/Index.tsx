import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const characters = [
    {
      name: 'Cookie Sakie',
      rarity: 'Легендарный',
      description: 'Мудрая печенька с древними знаниями',
      image: 'https://cdn.poehali.dev/projects/bb092ee4-bf4c-4128-af08-d29b4c6c278a/files/124663b6-942d-4eca-8177-f5f917af13aa.jpg',
      role: 'Поддержка'
    },
    {
      name: 'Шоколадное Печенье',
      rarity: 'Эпический',
      description: 'Храбрый воин королевства',
      image: 'https://cdn.poehali.dev/projects/bb092ee4-bf4c-4128-af08-d29b4c6c278a/files/124663b6-942d-4eca-8177-f5f917af13aa.jpg',
      role: 'Атака'
    },
    {
      name: 'Клубничное Печенье',
      rarity: 'Редкий',
      description: 'Быстрая разведчица',
      image: 'https://cdn.poehali.dev/projects/bb092ee4-bf4c-4128-af08-d29b4c6c278a/files/124663b6-942d-4eca-8177-f5f917af13aa.jpg',
      role: 'Скорость'
    }
  ];

  const artworks = [
    {
      title: 'Королевство на закате',
      author: 'CookieFan123',
      likes: 245,
      image: 'https://cdn.poehali.dev/projects/bb092ee4-bf4c-4128-af08-d29b4c6c278a/files/f58d1079-02bb-4c20-9790-203b979f2abf.jpg'
    },
    {
      title: 'Команда печенек',
      author: 'ArtMaster',
      likes: 189,
      image: 'https://cdn.poehali.dev/projects/bb092ee4-bf4c-4128-af08-d29b4c6c278a/files/857c264e-d8ee-4612-8076-5f67f8aeccd7.jpg'
    },
    {
      title: 'Битва за торт',
      author: 'EpicDrawer',
      likes: 312,
      image: 'https://cdn.poehali.dev/projects/bb092ee4-bf4c-4128-af08-d29b4c6c278a/files/857c264e-d8ee-4612-8076-5f67f8aeccd7.jpg'
    }
  ];

  const news = [
    {
      title: 'Новое обновление 3.5!',
      date: '15 октября 2025',
      description: 'Встречайте новых печенек и эксклюзивные события'
    },
    {
      title: 'Хэллоуин ивент стартовал',
      date: '10 октября 2025',
      description: 'Жуткие награды и тыквенные печеньки ждут вас'
    },
    {
      title: 'Турнир сообщества',
      date: '5 октября 2025',
      description: 'Соревнуйтесь за эксклюзивные призы'
    }
  ];

  const guides = [
    {
      title: 'Гайд по начинающим',
      difficulty: 'Легко',
      icon: 'BookOpen' as const
    },
    {
      title: 'Лучшие команды 2025',
      difficulty: 'Средне',
      icon: 'Users' as const
    },
    {
      title: 'Тактики PvP боёв',
      difficulty: 'Сложно',
      icon: 'Swords' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <nav className="bg-white/80 backdrop-blur-md border-b-4 border-primary sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              🍪 Cookie Run Kingdom
            </h1>
            <div className="flex gap-2 flex-wrap">
              {['Главная', 'Персонажи', 'Арты', 'Новости', 'Гайды'].map((item) => (
                <Button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  variant={activeSection === item.toLowerCase() ? 'default' : 'outline'}
                  className="rounded-full font-semibold"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'главная' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center py-12">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Добро пожаловать в королевство! 👑
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                Фан-сообщество Cookie Run Kingdom - делись артами, изучай гайды, знакомься с печеньками!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="rounded-full text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                  <Icon name="Sparkles" className="mr-2" />
                  Начать путешествие
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg px-8 hover:scale-105 transition-transform">
                  <Icon name="Users" className="mr-2" />
                  Сообщество
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="border-4 border-primary/20 hover:border-primary transition-all hover:scale-105 cursor-pointer animate-bounce-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name="Crown" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Персонажи</CardTitle>
                  <CardDescription>Познакомься со всеми печеньками</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-4 border-secondary/20 hover:border-secondary transition-all hover:scale-105 cursor-pointer animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                    <Icon name="Palette" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Арты</CardTitle>
                  <CardDescription>Галерея работ фанатов</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-4 border-accent/20 hover:border-accent transition-all hover:scale-105 cursor-pointer animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4">
                    <Icon name="BookOpen" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">Гайды</CardTitle>
                  <CardDescription>Прокачивайся эффективнее</CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'персонажи' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Все персонажи 🍪</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="legendary">Легенды</TabsTrigger>
                <TabsTrigger value="epic">Эпики</TabsTrigger>
                <TabsTrigger value="rare">Редкие</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid md:grid-cols-3 gap-6">
                  {characters.map((char, index) => (
                    <Card key={index} className="border-4 border-gradient overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                      <div className="relative">
                        <img src={char.image} alt={char.name} className="w-full h-48 object-cover" />
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                          {char.rarity}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl">{char.name}</CardTitle>
                        <CardDescription className="text-base">{char.description}</CardDescription>
                        <div className="flex gap-2 mt-4">
                          <Badge variant="outline">{char.role}</Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'арты' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Галерея артов 🎨</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {artworks.map((art, index) => (
                <Card key={index} className="overflow-hidden hover:scale-105 transition-transform cursor-pointer border-4 border-secondary/20 hover:border-secondary">
                  <img src={art.image} alt={art.title} className="w-full h-64 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">{art.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600">by {art.author}</p>
                      <div className="flex items-center gap-2">
                        <Icon name="Heart" size={20} className="text-primary" />
                        <span className="font-semibold">{art.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="rounded-full">
                <Icon name="Upload" className="mr-2" />
                Загрузить свой арт
              </Button>
            </div>
          </div>
        )}

        {activeSection === 'новости' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Новости сообщества 📰</h2>
            <div className="space-y-4">
              {news.map((item, index) => (
                <Card key={index} className="border-l-4 border-primary hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{item.date}</Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'гайды' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Гайды и советы 📚</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <Card key={index} className="border-4 border-accent/20 hover:border-accent hover:scale-105 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shrink-0">
                        <Icon name={guide.icon} size={24} className="text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                          {guide.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="rounded-full">
                <Icon name="PlusCircle" className="mr-2" />
                Предложить гайд
              </Button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Cookie Run Kingdom Fan Site 🍪</p>
          <p className="text-sm opacity-90">Создано фанатами для фанатов</p>
          <div className="flex gap-4 justify-center mt-4">
            <Icon name="Heart" size={24} />
            <Icon name="Star" size={24} />
            <Icon name="Sparkles" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
