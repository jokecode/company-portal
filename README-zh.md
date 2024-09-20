## 工鼎科技官网

目前分为五个模块："首页"、"成功案例"、"产品中心"、"公司动态"、"关于我们"

### 项目技术栈
- Nuxt 3
- Vue 3
- Pinia
- Element Plus
- GlideJs
- UnoCSS

### 项目运行
```bash
# 安装依赖
pnpm i

# 本地开发
pnpm dev

# 生产环境构建
pnpm generate
```

### 项目目录结构
```
.
├─.nuxt                                 # Nuxt 生成目录（开发时生成）
├─.output                               # Nuxt 生成目录（'pnpm generate'时生成）
├─components                            # 组件目录（对应官网的五个菜单）
│  ├─AboutUs                            # 关于我们
│  ├─Common                             # 公共组件
│  ├─CompanyCase                        # 公司案例
│  ├─CompanyNews                        # 公司动态
│  ├─Home                               # 首页
│  └─ProductCenter                      # 产品中心
├─composables                           # 组合函数目录 （目前状态管理[pinia]放在此目录）
├─config                                # 项目配置目录
├─constants                             # 常量目录
├─layouts                               # 布局目录
├─pages                                 # 页面目录
├─plugins                               # 插件目录（目前ElementPlus是通过插件方式引入）
├─public                                # 静态资源目录 （主要是图片[jpg、png、svg]与视频）
│  └─images                             # 图片（视频）目录
│      ├─bars                           # 菜单icon
│      ├─case                           # 案例相关图片
│      ├─contact                        # 联系方式相关图片
│      ├─glide-slide
│      ├─home                           # 首页图片
│      ├─honor                          # 荣誉图片
│      ├─icons
│      ├─logo                           # 工鼎Logo
│      ├─partner-logo                   # 合作伙伴Logo
│      ├─product                        # 产品图片
│      │  ├─dec
│      │  ├─distributed-io
│      │  ├─plc
│      │  ├─pn  
│      │  └─siemens
│      ├─siemens-edge                   # 西门子工业边缘生态大会
│      │  ├─2023
│      │  └─2024
│      ├─siemens-tia                    # 西门子嘉年华
│      │  └─2023
│      ├─siemenscup-cimc                # 西门子杯
│      │  ├─2022
│      │  ├─2023
│      │  └─2024
│      └─software-copyright-wm          # 软著、专利
└─server
    └─api
```
### robots.txt文件说明
> ` robots.txt `文件是用来指示搜索引擎的爬虫哪些页面可以爬取，哪些页面不能爬取的。

#### 文件路径：
`public/robots.txt`


#### 关键指令解释：

`User-agent`: 指定搜索引擎爬虫（如 Googlebot、Bingbot 等），` * `代表所有爬虫。

`Disallow`: 禁止访问的路径，` / `代表根目录，后面跟随的路径表示要禁止爬取的目录或文件。

`Allow`: 明确允许访问的路径（仅用于与 ` Disallow ` 搭配）。

`Sitemap`: 提供站点地图的 ` URL `。


### Nuxt 模块
- [VueUse](https://github.com/vueuse/vueuse) - "实用的组合 API 集合"
- [ColorMode](https://github.com/nuxt-modules/color-mode) - "通过 Nuxt 轻松实现自动检测的暗黑与亮色模式"
- [UnoCSS](https://github.com/unocss/unocss) - "即时按需的原子化 CSS 引擎"
- [Pinia](https://github.com/vuejs/pinia) - "为 Vue 提供直观、安全、轻量且灵活的状态管理库"
- [VitePWA](https://github.com/vite-pwa/nuxt) - "Nuxt 3 的零配置 PWA 插件"
- [DevTools](https://github.com/nuxt/devtools) - "释放 Nuxt 开发者体验"
- [Element Plus](https://github.com/element-plus/element-plus) - "基于 Vue 3，面向设计师和开发者的组件库"
- [GlideJs](https://github.com/glidejs/glide) - "一个无依赖的 JavaScript ES6 滑块和轮播。它轻便、灵活且快速。设计用于滑动。不多也不少"
  
## 项目模板来源
<h2 align="center">
<a href="https://github.com/antfu/vitesse">Vitesse</a> for Nuxt 3
</h2><br>

<p align="center">
<br>
<a href="https://vitesse-nuxt3.netlify.app/">🖥 Online Preview</a>
<br><br>
<a href="https://stackblitz.com/github/antfu/vitesse-nuxt3"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>
