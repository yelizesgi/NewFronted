Yeni Bir React Projesi Oluşturma Rehberi
Bu rehber, sıfırdan bir React projesi oluşturmak için gerekli adımları ve terminal komutlarını detaylı bir şekilde açıklar. Projenizi hızla başlatmak ve geliştirmeye başlamak için Create React App aracını kullanacağız.

1. Node.js ve npm/Yarn Kurulumu Kontrolü
React projeleri geliştirmek için sisteminizde Node.js ve bir paket yöneticisi olan npm (Node Package Manager) veya Yarn'ın kurulu olması şarttır. Çoğu Node.js kurulumuyla npm otomatik olarak gelir. Mevcut durumlarını kontrol etmek için terminalinizde aşağıdaki komutları çalıştırabilirsiniz:

Bash

node -v
npm -v
yarn -v # Eğer Yarn kullanıyorsanız
Eğer bu komutlar bir sürüm numarası döndürmüyorsa, Node.js'i resmi web sitesinden (https://nodejs.org/) indirip kurmanız gerekmektedir.

2. Yeni Bir React Projesi Oluşturma
Node.js ve paket yöneticiniz başarıyla kurulduktan sonra, projenizi oluşturmak istediğiniz dizine (klasöre) gidin ve aşağıdaki komutlardan birini çalıştırın:

npm Kullanarak:
Bash

npx create-react-app benim-react-uygulamam
Yarn Kullanarak:
Bash

yarn create react-app benim-react-uygulamam
npx: npm 5.2 ve üzeri sürümlerle gelen bir araçtır. Paketleri global olarak kurmaya gerek kalmadan komutları çalıştırmanızı sağlar. Bu, create-react-app gibi araçları kullanmak için oldukça pratiktir.

benim-react-uygulamam: Bu, projenizin adıdır. Lütfen kendi projeniz için anlamlı ve açıklayıcı bir isimle değiştirmeyi unutmayın. Bu komutu çalıştırdığınızda, belirttiğiniz isimde yeni bir klasör oluşturulacak ve tüm proje dosyaları bu klasörün içine yerleştirilecektir.

Bu komutu çalıştırdığınızda, Create React App gerekli tüm temel dosyaları ve bağımlılıkları sizin için indirip kuracaktır. Bu işlem, internet bağlantınıza ve sisteminizin performansına bağlı olarak birkaç dakika sürebilir.

3. Proje Dizinine Geçiş
Proje oluşturma işlemi tamamlandıktan sonra, yeni oluşturulan proje dizininin içine geçmeniz gerekir. Terminalde aşağıdaki komutu kullanın:

Bash

cd benim-react-uygulamam
Bu komut sizi, React uygulamanızın kaynak kodlarının bulunduğu ana dizine taşıyacaktır.

4. React Uygulamasını Başlatma
Artık projenizin geliştirme sunucusunu başlatarak React uygulamanızı tarayıcınızda canlı olarak görebilirsiniz. Proje dizinindeyken aşağıdaki komutlardan birini çalıştırın:

npm Kullanarak:
Bash

npm start
Yarn Kullanarak:
Bash

yarn start
Bu komutu çalıştırdığınızda, genellikle web tarayıcınız otomatik olarak açılacak ve uygulamanız http://localhost:3000 adresinde görüntülenecektir. Geliştirme sürecinizde, projenizdeki kod dosyalarında yaptığınız değişiklikler otomatik olarak algılanacak ve tarayıcınızda yenilenecektir, bu da size hızlı bir geliştirme döngüsü sunar.                                                                                                                                                            