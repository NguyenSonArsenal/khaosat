# README

## SYSTEM REQUIREMENT

* DB
  - MySQL 5.6
* Apache 
    - 2.4
* PHP
  - 7.3
* Laravel
  - 8
* Composer
  - 1.4.1
* Node 16


## Deploy
* permission
```
chmod -R 777 bootstrap/cache
chmod -R 777 storage/logs/
chmod -R 777 storage
chmod -R 777 storage/framework
chmod -R 777 public/media
chmod -R 777 public/tmp_uploads
sudo chown -R www-data:www-data public/
sudo chmod -R g+rw public/
```
* run deploy
```bash
composer install --ignore-platform-reqs
cp .env.example .env
php artisan key:generate
```
* config your database in .env
find and replace database config
```bash
vi .env
```
* run database
```bash
php artisan config:clear
php artisan cache:clear
 
php artisan migrate
php artisan db:seed
php artisan storage:link
```

* laravel-mix
```bash
npm install laravel-mix --save-dev
run relatime (build laravel mix): npm run watch
run product: npm run production
```

* account
```bash
Cms: /cms/auth/login 
    admin@gmail.com/admin
```
