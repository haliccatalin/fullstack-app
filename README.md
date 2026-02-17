# Proiect Angular & Java

Acest repository conține două proiecte separate: o aplicație backend
dezvoltată în Java SpringBoot și o aplicație frontend dezvoltată în
Angular. Vă rugăm să urmați instrucțiunile de mai jos pentru a configura
și rula fiecare proiect în ordinea specificată.

------------------------------------------------------------------------

## Instrucțiuni de Setup

------------------------------------------------------------------------

# 1. Java SpringBoot

Acest proiect reprezintă componenta backend a aplicației.

## Precondiții

-   **Java 21:** Verificați versiunea:

        java -version

-   **Maven:**

        mvn -v

-   **IntelliJ Ultimate**

-   **MySQL Workbench (opțional)**

-   **Server MySQL activ** SAU configurare prin Docker (vezi mai jos)

------------------------------------------------------------------------

## 🔹 Opțional: Configurare MySQL folosind Docker Compose (Recomandat)

### Precondiții

-   Docker instalat
-   Docker Compose instalat

Verificare:

``` bash
docker -v
docker compose version
```

------------------------------------------------------------------------

### 1️⃣ Creați fișierul `docker-compose.yaml` în root-ul proiectului

``` yaml
version: '3.8'

services:
  mysql-db:
    image: mysql:8.0
    container_name: shop_online_mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: shop_online_manager_db
      MYSQL_USER: shop_user
      MYSQL_PASSWORD: shop_password
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

------------------------------------------------------------------------

### 2️⃣ Porniți baza de date

``` bash
docker compose up -d
```

Oprire:

``` bash
docker compose down
```

Datele sunt persistate în volumul `mysql_data`.

------------------------------------------------------------------------

### 3️⃣ Configurați aplicația SpringBoot

În:

    src/main/resources/application.properties

``` properties
spring.datasource.url=jdbc:mysql://localhost:3306/shop_online_manager_db
spring.datasource.username=shop_user
spring.datasource.password=shop_password
spring.jpa.hibernate.ddl-auto=update
```

------------------------------------------------------------------------

## Pași standard de Setup (fără Docker)

1.  Deschideți folderul `Backend-Shop-Online-App` în IntelliJ.
2.  Asigurați-vă că există baza de date `shop_online_manager_db`.
3.  Configurați:

``` properties
spring.datasource.username=[username mysql]
spring.datasource.password=[parola mysql]
```

4.  Rulați aplicația din IntelliJ.

------------------------------------------------------------------------

# 2. Angular

Acest proiect reprezintă componenta frontend a aplicației.

## Precondiții

``` bash
node -v
npm -v
```

Instalare Angular CLI:

``` bash
npm install -g @angular/cli
```

------------------------------------------------------------------------

## Pași de Setup

### 1️⃣ Deschideți proiectul

`Frontend-Shop-Online-App`

------------------------------------------------------------------------

### 2️⃣ Instalați dependențele

``` bash
npm install
```

------------------------------------------------------------------------

### 3️⃣ Rulați aplicația

``` bash
ng serve
```

------------------------------------------------------------------------

### 4️⃣ Accesați aplicația

    http://localhost:4200

------------------------------------------------------------------------

## 📝 Recomandare

Se recomandă utilizarea Docker pentru baza de date pentru: - configurare
rapidă - mediu standardizat - evitarea problemelor de compatibilitate

------------------------------------------------------------------------

Vă mulțumim pentru utilizarea proiectului! 🚀
