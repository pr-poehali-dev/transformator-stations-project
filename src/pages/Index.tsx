import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const equipment = [
    {
      id: 1,
      name: "КТП-10/0.4",
      description: "Комплектная трансформаторная подстанция 10/0.4 кВ",
      power: "630 кВА",
      voltage: "10/0.4 кВ",
      protection: "IP54",
      price: "От 850 000 ₽",
      features: ["Автоматическое управление", "Система мониторинга", "Защита от КЗ"],
      image: "/img/3c41c632-ccf9-4b35-93d2-2eba6de82f31.jpg"
    },
    {
      id: 2,
      name: "КТП-6/0.4",
      description: "Комплектная трансформаторная подстанция 6/0.4 кВ",
      power: "1000 кВА",
      voltage: "6/0.4 кВ",
      protection: "IP65",
      price: "От 1 200 000 ₽",
      features: ["Повышенная мощность", "Улучшенная изоляция", "Дистанционное управление"],
      image: "/img/d0a8eb66-797a-4f30-8b63-b3ae5fbf3cb6.jpg"
    },
    {
      id: 3,
      name: "КТП-35/10",
      description: "Комплектная трансформаторная подстанция 35/10 кВ",
      power: "2500 кВА",
      voltage: "35/10 кВ",
      protection: "IP54",
      price: "От 2 500 000 ₽",
      features: ["Высокое напряжение", "Промышленное применение", "Автоматизация"],
      image: "/img/3c41c632-ccf9-4b35-93d2-2eba6de82f31.jpg"
    }
  ];

  const services = [
    {
      title: "Проектирование",
      description: "Индивидуальное проектирование КТП под ваши требования",
      icon: "Zap"
    },
    {
      title: "Монтаж",
      description: "Профессиональный монтаж и подключение оборудования",
      icon: "Settings"
    },
    {
      title: "Обслуживание",
      description: "Техническое обслуживание и ремонт трансформаторных подстанций",
      icon: "Shield"
    }
  ];

  const certificates = [
    "ISO 9001:2015",
    "ГОСТ Р ИСО 9001-2015",
    "Сертификат соответствия ЕАЭС",
    "Разрешение Ростехнадзора"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-roboto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold font-inter text-slate-800">ЭлектроТех</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-slate-600 hover:text-primary transition-colors">Продукция</a>
              <a href="#services" className="text-slate-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-slate-600 hover:text-primary transition-colors">О компании</a>
              <a href="#certificates" className="text-slate-600 hover:text-primary transition-colors">Сертификаты</a>
              <a href="#contacts" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>Получить консультацию</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold font-inter mb-6">
            Комплектные Трансформаторные Подстанции
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Современные решения для электроснабжения промышленных объектов. 
            Высокое качество, надежность и соответствие всем стандартам безопасности.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать каталог
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-inter text-slate-800 mb-4">Каталог оборудования</h3>
            <p className="text-lg text-slate-600">Полный спектр комплектных трансформаторных подстанций</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">{item.power}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-inter text-slate-800">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-slate-700">Напряжение:</span>
                      <p className="text-slate-600">{item.voltage}</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">Защита:</span>
                      <p className="text-slate-600">{item.protection}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    <Link to={`/product/${item.id}`}>
                      <Button size="sm">Подробнее</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-inter text-slate-800 mb-4">Наши услуги</h3>
            <p className="text-lg text-slate-600">Комплексные решения от проектирования до обслуживания</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-inter">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold font-inter text-slate-800 mb-6">О компании ЭлектроТех</h3>
              <p className="text-lg text-slate-600 mb-6">
                Более 15 лет мы специализируемся на производстве и поставке комплектных 
                трансформаторных подстанций. Наша продукция соответствует всем российским 
                и международным стандартам качества.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-slate-600">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-slate-600">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-slate-600">Специалистов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-slate-600">Техническая поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d0a8eb66-797a-4f30-8b63-b3ae5fbf3cb6.jpg" 
                alt="О компании"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-inter text-slate-800 mb-4">Сертификаты</h3>
            <p className="text-lg text-slate-600">Подтверждение качества и соответствия стандартам</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <p className="font-medium text-slate-700">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-inter text-slate-800 mb-4">Часто задаваемые вопросы</h3>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Какие гарантии предоставляются на оборудование?
              </AccordionTrigger>
              <AccordionContent>
                Мы предоставляем гарантию 3 года на все комплектные трансформаторные подстанции 
                и 5 лет на трансформаторы. Гарантия включает бесплатное обслуживание и замену 
                дефектных компонентов.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Сколько времени занимает изготовление КТП?
              </AccordionTrigger>
              <AccordionContent>
                Стандартные модели изготавливаются в течение 4-6 недель. Для индивидуальных 
                проектов срок может составить 8-12 недель в зависимости от сложности технических 
                требований.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Предоставляете ли вы услуги по монтажу?
              </AccordionTrigger>
              <AccordionContent>
                Да, мы предоставляем полный комплекс услуг: от проектирования до монтажа 
                и пуско-наладочных работ. Наши сертифицированные специалисты выполнят 
                установку с соблюдением всех требований безопасности.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-inter mb-4">Контакты</h3>
            <p className="text-lg text-slate-300">Свяжитесь с нами для получения консультации</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader className="text-center">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-slate-300">
                  +7 (495) 123-45-67<br />
                  +7 (800) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader className="text-center">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-slate-300">
                  info@elektrotech.ru<br />
                  sales@elektrotech.ru
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader className="text-center">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-slate-300">
                  г. Москва, ул. Промышленная, д. 15<br />
                  БЦ "ЭлектроПарк", офис 201
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="secondary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" size={24} className="text-primary" />
              <span className="font-bold font-inter">ЭлектроТех</span>
            </div>
            <p className="text-center md:text-right">
              © 2024 ЭлектроТех. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;