# generator-jhipster-dbsequences
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> JHipster blueprint, a Jhipster blueprint to have a different database sequence for each database

<aside class="warning">
This is just a demo for testing how a blueprint works. Replacing a database sequence name in the hibernate entity does not require a blueprint and can be done with a module and a post entity hook. 
</aside>

# Introduction

This is a [JHipster](http://jhipster.github.io/) blueprint, that is meant to be used in a JHipster application.

# How it works

Insead of using the same `hibernate_sequence` for all entities this blueprint allows to have a single sequence for each hibernate entity. 

Default jhipster code:

```java
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
@SequenceGenerator(name = "sequenceGenerator")
private Long id;
```

Blueprint code: 
```java
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
@SequenceGenerator(name = "sequenceGenerator", sequenceName="project_seq")
private Long id;
```

The sequence is also added into the liquibase xml changeset file

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) blueprint, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://jhipster.github.io/installation.html)

# Installation

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-dbsequences
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-dbsequences
```

## With NPM

To install this blueprint:

```bash
npm install -g generator-jhipster-dbsequences
```

To update this blueprint:

```bash
npm update -g generator-jhipster-dbsequences
```

# Usage

To use this blueprint, run the below command

```bash
jhipster --blueprint dbsequences
```


## Running local Blueprint version for development

During development of blueprint, please note the below steps. They are very important.

1. Link your blueprint globally 

Note: If you do not want to link the blueprint(step 3) to each project being created, use NPM instead of Yarn as yeoman doesn't seem to fetch globally linked Yarn modules. In the other hand this means you have to use NPM in all the below steps as well.

```bash
cd dbsequences
npm link
```

2. Link a development version of JHipster to your blueprint (optional: required only if you want to use a non-released JHipster version, like the master branch or your own custom fork)

You could also use Yarn for this if you prefer

```bash
cd generator-jhipster
npm link

cd dbsequences
npm link generator-jhipster
```

3. Create a new folder for the app to be generated and link JHipster and your blueprint there

```bash
mkdir my-app && cd my-app

npm link generator-jhipster-dbsequences
npm link generator-jhipster (Optional: Needed only if you are using a non-released JHipster version)

jhipster -d --blueprint dbsequences

```

# License



[npm-image]: https://img.shields.io/npm/v/generator-jhipster-dbsequences.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-dbsequences
[travis-image]: https://travis-ci.org/ecostanzi/generator-jhipster-dbsequences.svg?branch=master
[travis-url]: https://travis-ci.org/ecostanzi/generator-jhipster-dbsequences
[daviddm-image]: https://david-dm.org/ecostanzi/generator-jhipster-dbsequences.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ecostanzi/generator-jhipster-dbsequences
