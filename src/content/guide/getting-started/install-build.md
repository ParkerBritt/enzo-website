---
title: Install & Build
section: Getting Started
order: 10
description: Get Enzo compiled and running on your machine.
---

## Prerequisites

- CMake 3.20+
- Qt 6 (Core, Widgets, Quick/QML, OpenGL)
- C++17 compiler — GCC 11+, Clang 14+, or MSVC 2022+

## Build from source

```sh
git clone --recurse-submodules https://github.com/parkerbritt/enzo
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build
```

## Launch Enzo
```sh
./build/enzo/bin/enzoGui
```

You should see your new Enzo window pop up!
