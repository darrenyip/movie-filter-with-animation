# 电影 filter 动态效果展示

电影来源于 MovieDB，只获取了 popular 的一部分， 通过电影 obj 里面的 genre ID 来过滤不同的类型。
动态效果利用了一个插件：framer-motion
用 grid 排版好每个电影以后，在利用 framer-motion 提供的 api 包裹电影 card，添加不同的语句可以控制不同的 animation。
