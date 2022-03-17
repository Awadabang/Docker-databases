# Docker-databases

用于docker-compose快速部署数据库

<!-- PROJECT SHIELDS -->

[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
## 目录

- [Docker-databases](#docker-databases)
  - [目录](#目录)
    - [上手指南](#上手指南)
      - [开发前的配置要求](#开发前的配置要求)
      - [安装步骤](#安装步骤)
    - [文件目录说明](#文件目录说明)
    - [部署](#部署)
    - [版本控制](#版本控制)
    - [作者](#作者)
    - [版权说明](#版权说明)

### 上手指南

#### 开发前的配置要求

1. 保证已安装Docker、Docker-compose

#### 安装步骤

1. 克隆

```sh
git clone https://github.com/Awadabang/Docker-databases.git
```

2. 修改配置文件中密码等信息

### 文件目录说明

eg:

```bash
filetree 
├── /mongodb/
│  ├── /data/
│  │  ├── /config/
│  │  │  ├── mongod.conf
│  │  ├── /db/
│  │  ├── /log/
├── /mysql/
│  ├── /data/
├── /redis/
│  ├── /data/
│  ├── /conf/
│  │  ├── redis.conf
├── docker-compose.yml
├── LICENSE
├── README.md
```

### 部署

根目录下执行`docker-compose up`

### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

Awadabang

微信:kkkwqp521  &ensp; qq:1765256254

### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE.txt](https://github.com/Awadabang/Docker-databases/blob/main/LICENSE)

<!-- links -->
[license-shield]: https://img.shields.io/github/license/shaojintian/Best_README_template.svg?style=flat-square
[license-url]: https://github.com/Awadabang/Docker-databases/blob/main/LICENSE
