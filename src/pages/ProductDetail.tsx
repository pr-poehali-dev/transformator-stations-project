import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const productData = {
    "1": {
      id: 1,
      name: "КТП-10/0.4",
      fullName: "Комплектная трансформаторная подстанция КТП-10/0.4-630",
      description: "Универсальная комплектная трансформаторная подстанция для распределения электроэнергии на промышленных объектах",
      power: "630 кВА",
      voltage: "10/0.4 кВ",
      protection: "IP54",
      price: "От 850 000 ₽",
      features: ["Автоматическое управление", "Система мониторинга", "Защита от КЗ", "Дистанционный контроль"],
      images: [
        "/img/3c41c632-ccf9-4b35-93d2-2eba6de82f31.jpg",
        "/img/d0a8eb66-797a-4f30-8b63-b3ae5fbf3cb6.jpg",
        "/img/1a389767-d4e9-4731-8d30-f925fa82f5be.jpg"
      ],
      specifications: {
        electrical: [
          { param: "Номинальная мощность", value: "630 кВА" },
          { param: "Первичное напряжение", value: "10 кВ" },
          { param: "Вторичное напряжение", value: "0,4 кВ" },
          { param: "Частота", value: "50 Гц" },
          { param: "Группа соединений", value: "Y/Yn-0" },
          { param: "Потери холостого хода", value: "1,2 кВт" },
          { param: "Потери короткого замыкания", value: "7,5 кВт" }
        ],
        physical: [
          { param: "Габариты (ДхШхВ)", value: "3200x2400x2800 мм" },
          { param: "Масса", value: "4500 кг" },
          { param: "Степень защиты", value: "IP54" },
          { param: "Климатическое исполнение", value: "У1" },
          { param: "Температура эксплуатации", value: "от -45°C до +40°C" },
          { param: "Относительная влажность", value: "до 98%" }
        ],
        protection: [
          { param: "Защита от КЗ", value: "Автоматические выключатели" },
          { param: "Защита от перегрузки", value: "Тепловые реле" },
          { param: "Защита от замыкания на землю", value: "УЗО" },
          { param: "Молниезащита", value: "Разрядники" },
          { param: "Система сигнализации", value: "Световая и звуковая" }
        ]
      },
      equipment: [
        "Силовой трансформатор ТМ-630/10",
        "РУ-10 кВ с вакуумным выключателем",
        "РУ-0,4 кВ с автоматическими выключателями",
        "Система релейной защиты и автоматики",
        "Блок управления и сигнализации",
        "Система вентиляции",
        "Освещение и розетки"
      ],
      applications: [
        "Промышленные предприятия",
        "Жилые комплексы",
        "Торговые центры",
        "Офисные здания",
        "Социальные объекты"
      ]
    },
    "2": {
      id: 2,
      name: "КТП-6/0.4",
      fullName: "Комплектная трансформаторная подстанция КТП-6/0.4-1000",
      description: "Мощная комплектная трансформаторная подстанция для крупных промышленных объектов",
      power: "1000 кВА",
      voltage: "6/0.4 кВ",
      protection: "IP65",
      price: "От 1 200 000 ₽",
      features: ["Повышенная мощность", "Улучшенная изоляция", "Дистанционное управление", "Автоматизированная диагностика"],
      images: [
        "/img/d0a8eb66-797a-4f30-8b63-b3ae5fbf3cb6.jpg",
        "/img/3c41c632-ccf9-4b35-93d2-2eba6de82f31.jpg",
        "/img/1a389767-d4e9-4731-8d30-f925fa82f5be.jpg"
      ],
      specifications: {
        electrical: [
          { param: "Номинальная мощность", value: "1000 кВА" },
          { param: "Первичное напряжение", value: "6 кВ" },
          { param: "Вторичное напряжение", value: "0,4 кВ" },
          { param: "Частота", value: "50 Гц" },
          { param: "Группа соединений", value: "D/Yn-11" },
          { param: "Потери холостого хода", value: "1,8 кВт" },
          { param: "Потери короткого замыкания", value: "12 кВт" }
        ],
        physical: [
          { param: "Габариты (ДхШхВ)", value: "3800x2800x3200 мм" },
          { param: "Масса", value: "6500 кг" },
          { param: "Степень защиты", value: "IP65" },
          { param: "Климатическое исполнение", value: "УХЛ1" },
          { param: "Температура эксплуатации", value: "от -50°C до +40°C" },
          { param: "Относительная влажность", value: "до 100%" }
        ],
        protection: [
          { param: "Защита от КЗ", value: "Микропроцессорные блоки" },
          { param: "Защита от перегрузки", value: "Электронные реле" },
          { param: "Защита от замыкания на землю", value: "Дифференциальная защита" },
          { param: "Молниезащита", value: "ОПН класса I" },
          { param: "Система диагностики", value: "Непрерывный мониторинг" }
        ]
      },
      equipment: [
        "Силовой трансформатор ТМ-1000/6",
        "РУ-6 кВ с элегазовым выключателем",
        "РУ-0,4 кВ с интеллектуальными автоматами",
        "Микропроцессорная система защиты",
        "SCADA система управления",
        "Принудительная вентиляция",
        "Аварийное освещение"
      ],
      applications: [
        "Крупные производства",
        "Энергоемкие объекты",
        "Распределительные сети",
        "Подстанции 35/6 кВ",
        "Промышленные комплексы"
      ]
    },
    "3": {
      id: 3,
      name: "КТП-35/10",
      fullName: "Комплектная трансформаторная подстанция КТП-35/10-2500",
      description: "Мощная высоковольтная подстанция для магистральных сетей и крупных потребителей",
      power: "2500 кВА",
      voltage: "35/10 кВ",
      protection: "IP54",
      price: "От 2 500 000 ₽",
      features: ["Высокое напряжение", "Промышленное применение", "Автоматизация", "Телемеханика"],
      images: [
        "/img/3c41c632-ccf9-4b35-93d2-2eba6de82f31.jpg",
        "/img/1a389767-d4e9-4731-8d30-f925fa82f5be.jpg",
        "/img/d0a8eb66-797a-4f30-8b63-b3ae5fbf3cb6.jpg"
      ],
      specifications: {
        electrical: [
          { param: "Номинальная мощность", value: "2500 кВА" },
          { param: "Первичное напряжение", value: "35 кВ" },
          { param: "Вторичное напряжение", value: "10 кВ" },
          { param: "Частота", value: "50 Гц" },
          { param: "Группа соединений", value: "Y/D-11" },
          { param: "Потери холостого хода", value: "4,2 кВт" },
          { param: "Потери короткого замыкания", value: "28 кВт" }
        ],
        physical: [
          { param: "Габариты (ДхШхВ)", value: "6000x4200x4500 мм" },
          { param: "Масса", value: "12000 кг" },
          { param: "Степень защиты", value: "IP54" },
          { param: "Климатическое исполнение", value: "У1" },
          { param: "Температура эксплуатации", value: "от -45°C до +40°C" },
          { param: "Сейсмостойкость", value: "8 баллов" }
        ],
        protection: [
          { param: "Дифференциальная защита", value: "Микропроцессорная" },
          { param: "Газовая защита", value: "Реле Бухгольца" },
          { param: "Защита от перегрева", value: "Термометры сопротивления" },
          { param: "Молниезащита", value: "ОПН 35 кВ" },
          { param: "Телемеханика", value: "Протокол МЭК 61850" }
        ]
      },
      equipment: [
        "Силовой трансформатор ТМН-2500/35",
        "КРУЭ-35 кВ с элегазовой изоляцией",
        "КРУ-10 кВ с вакуумными выключателями",
        "Система РЗА на базе БЭМП",
        "АСУ ТП с Web-интерфейсом",
        "Система пожаротушения",
        "Охранная сигнализация"
      ],
      applications: [
        "Распределительные сети 35 кВ",
        "Понижающие подстанции",
        "Промышленные энергоузлы",
        "Городские электросети",
        "Объекты энергетики"
      ]
    }
  };

  const product = productData[id as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Продукт не найден</h1>
          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-roboto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold font-inter text-slate-800">ЭлектроТех</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-slate-600 hover:text-primary transition-colors">
                <Icon name="ArrowLeft" size={20} className="inline mr-2" />
                Каталог
              </Link>
              <Button>Получить консультацию</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/#catalog" className="hover:text-primary">Каталог</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-slate-800">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-white">
                  {product.power}
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative overflow-hidden rounded-lg aspect-square border-2 transition-colors ${
                      selectedImage === idx ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold font-inter text-slate-800 mb-2">
                  {product.fullName}
                </h1>
                <p className="text-lg text-slate-600">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-600">Мощность</div>
                  <div className="text-2xl font-bold text-primary">{product.power}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-600">Напряжение</div>
                  <div className="text-2xl font-bold text-primary">{product.voltage}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-600">Защита</div>
                  <div className="text-2xl font-bold text-primary">{product.protection}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-slate-600">Цена</div>
                  <div className="text-2xl font-bold text-green-600">{product.price}</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Основные особенности:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="flex-1">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Заказать
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Заказать {product.name}</DialogTitle>
                      <DialogDescription>
                        Оставьте заявку и наш специалист свяжется с вами
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Ваше имя" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="email@example.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Комментарий</Label>
                        <Textarea id="message" placeholder="Дополнительные требования..." />
                      </div>
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Техпаспорт
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specs">Характеристики</TabsTrigger>
              <TabsTrigger value="equipment">Комплектация</TabsTrigger>
              <TabsTrigger value="applications">Применение</TabsTrigger>
              <TabsTrigger value="documents">Документы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="mt-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Zap" size={24} className="text-primary mr-2" />
                      Электрические характеристики
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        {product.specifications.electrical.map((spec, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="font-medium">{spec.param}</TableCell>
                            <TableCell>{spec.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Package" size={24} className="text-primary mr-2" />
                      Физические характеристики
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        {product.specifications.physical.map((spec, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="font-medium">{spec.param}</TableCell>
                            <TableCell>{spec.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Shield" size={24} className="text-primary mr-2" />
                      Системы защиты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        {product.specifications.protection.map((spec, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="font-medium">{spec.param}</TableCell>
                            <TableCell>{spec.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="equipment" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Базовая комплектация</CardTitle>
                  <CardDescription>
                    В стандартную поставку входит следующее оборудование
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.equipment.map((item, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-blue-50 rounded-lg">
                        <Icon name="CheckCircle" size={20} className="text-green-500 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Области применения</CardTitle>
                  <CardDescription>
                    Рекомендуемые объекты для установки данной модели
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.applications.map((application, idx) => (
                      <div key={idx} className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <Icon name="Building" size={48} className="text-primary mx-auto mb-4" />
                        <h4 className="font-semibold text-slate-800">{application}</h4>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Техническая документация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Технический паспорт (PDF, 2.1 МБ)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Схема подключения (PDF, 1.5 МБ)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Инструкция по монтажу (PDF, 3.2 МБ)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Сертификат соответствия (PDF, 0.8 МБ)
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3D модель и чертежи</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Box" size={20} className="mr-2" />
                      3D модель (STEP, 15.2 МБ)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Габаритный чертеж (DWG, 2.8 МБ)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Схема расположения (DWG, 1.9 МБ)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Спецификация (Excel, 0.5 МБ)
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Похожие модели
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(productData)
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">{relatedProduct.power}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-inter text-slate-800">{relatedProduct.name}</CardTitle>
                    <CardDescription>{relatedProduct.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{relatedProduct.price}</span>
                      <Link to={`/product/${relatedProduct.id}`}>
                        <Button size="sm">Подробнее</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" size={24} className="text-primary" />
              <span className="font-bold font-inter">ЭлектроТех</span>
            </Link>
            <p className="text-center md:text-right">
              © 2024 ЭлектроТех. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;