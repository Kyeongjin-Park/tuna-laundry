# TUNA-Laundry 프로젝트 참고사항.

### .env
```
PORT = 8080
MYSQL_AWS_USERNAME = root
MYSQL_AWS_PASSWORD = (본인 RDS 비밀번호)
MYSQL_AWS_DATABASE = tuna_laundry
MYSQL_AWS_HOST = (본인 RDS 주소)
```

### .gitignore
```
node_modules
.env
config.json
```

### 마지막에 terminal에 입력할 것
```
npx sequelize db:migrate
```

### config/config.json
```
{
  "development": {
    "username": "root",
    "password": "DB 패스워드",
    "database": "DB 이름",
    "host": "DB경로",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### 폴더 경로
```
tuna-laundry
├─ .gitignore
├─ README.md
├─ __tests__
├─ app.js
├─ config
│  ├─ config.js
│  └─ config.json
├─ controllers
│  └─ laundries.controller.js
├─ jest.config.js
├─ migrations
│  ├─ 20230101232720-create-user.js
│  ├─ 20230101233050-create-laundry.js
│  ├─ 20230101233544-create-review.js
│  └─ 20230101233753-create-laundry-basket.js
├─ models
│  ├─ index.js
│  └─ laundry.js
├─ package-lock.json
├─ package.json
├─ repositories
│  └─ laundries.repository.js
├─ routes
│  ├─ index.js
│  └─ laundies.routes.js
├─ seeders
└─ services
   └─ laundries.services.js

```