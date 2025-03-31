# p2-layout.md

https://v3.tailwindcss.com/docs/container

# aspect-ratio

> [!NOTE]
> 
>[aspect-*](https://v3.tailwindcss.com/docs/aspect-ratio)用于控制元素长宽比

示例

```tsx
<div className={"flex flex-col items-center justify-center gap-4 mt-10"}>
    <div className={"bg-pink-700 w-36 aspect-square"}/>
    <div className={"bg-pink-700 w-36 aspect-video"}/>
    <div className={"bg-pink-700 w-36 aspect-[12/1]"}/>
</div>
```

<img src="../assets/image-20250331234315817.png" alt="image-20250331234315817" style="zoom:67%;" />

# container

> [!NOTE]
> 
>[container](https://v3.tailwindcss.com/docs/container) 用于将元素宽度固定为当前断点的组件将元素的 `max-width` 设置为与当前断点的 `min-width` 匹配。如果您希望针对一组固定的屏幕尺寸进行设计，而不是试图适应完全流动的视口，那么这将非常有用。

| Class          | Breakpoint         | Properties   |
| -------------- | ------------------ | ------------ |
| container      | None               | width: 100%; |
| sm *(640px)*   | max-width: 640px;  |              |
| md *(768px)*   | max-width: 768px;  |              |
| lg *(1024px)*  | max-width: 1024px; |              |
| xl *(1280px)*  | max-width: 1280px; |              |
| 2xl *(1536px)* | max-width: 1536px; |              |

> [!WARNING]
>
> 请注意，与您可能在其他框架中使用过的容器不同， **tailwind css 的容器不会自动居中，也没有任何内置水平填充。**
>
> 要使容器居中，请使用 `mx-auto` :
>
> ```tsx
> <div class="container mx-auto">
>   <!-- ... -->
> </div>
> ```
>
> 要添加水平填充，请使用 `px-*` :
>
> ```tsx
> <div class="container mx-auto px-4">
>   <!-- ... -->
> </div>
> ```

要使容器默认居中，请在配置文件 `tailwind.config.js` 的 `theme.container` 部分中将 `center` 选项设置为 `true` 

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
}
```

示例

```tsx
export default function Home() {
    return (
        <>
            <div className={"bg-pink-700 h-72 w-full md:w-10/12 md:mx-auto lg:w-3/4"}/>
        </>
    );
}

```

![image-20250401004810584](../assets/image-20250401004810584.png)

![image-20250401004823053](../assets/image-20250401004823053.png)

![image-20250401004840696](../assets/image-20250401004840696.png)

# columns

> [!NOTE] 
>
> [columns](https://v3.tailwindcss.com/docs/columns)是用于控制元素内列数的实用工具
>
> - 使用 `columns-2` 和 `columns-3` 等来设置应为元素内的内容创建的列数。列宽将自动调整以适应该数量。
> - 使用 `columns-xs` 和 `columns-sm` 等可为元素内的内容设置理想的列宽，并自动调整列数（计数）以适应该值。
> - 要指定列之间的宽度，可以使用 `gap-x`
> - tailwind 允许您使用变体修饰符在不同状态下有条件地应用实用工具类。例如，使用 `hover:columns-3` 只在悬停时应用 `columns-3` 工具。

| Class                 | Properties                                              |
| --------------------- | ------------------------------------------------------- |
| columns-1             | columns: 1;                                             |
| columns-2             | columns: 2;                                             |
| columns-3             | columns: 3;                                             |
| ...                   | ...                                                     |
| columns-auto          | columns: auto;                                          |
| columns-3xs           | columns: 16rem; /* 256px */                             |
| columns-2xs           | columns: 18rem; /* 288px */                             |
| columns-xs            | columns: 20rem; /* 320px */                             |
| ...                   | ...                                                     |
| columns-5xlcolumns-sm | columns: 64rem; /* 1024px */columns: 24rem; /* 384px */ |
| columns-6xlcolumns-md | columns: 72rem; /* 1152px */columns: 28rem; /* 448px */ |
| columns-7xlcolumns-lg | columns: 80rem; /* 1280px */columns: 32rem; /* 512px */ |

示例

````tsx
export default function Home() {

    const  imgList = [
        "/mcdd01/ok.gif",
        "/mcdd01/呆滞.gif",
        "/mcdd01/哈哈.gif",
        "/mcdd01/哼.gif",
        "/mcdd01/嗯嗯.gif",
        "/mcdd01/大哭.gif",
        "/mcdd01/害羞.gif",
        "/mcdd01/打.gif",
        "/mcdd01/无语.gif",
        "/mcdd01/汗.gif",
        "/mcdd01/生气.gif",
        "/mcdd01/送花.gif",
        "/mcdd01/酷.gif",
    ]

    return (
        <>
            <div className={"w-10/12 mx-auto columns-xs gap-x-5"}>
                {
                    imgList.map((img, index) => {
                        return (
                            <div key={index} className={"border-[1px] border-pink-500"}>
                                <img src={img} alt={''}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

````

![image-20250401012107392](../assets/image-20250401012107392.png)
