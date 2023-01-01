<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->

# 네모비 프론트엔드 README

---

## 네모비 프론트엔드 반응형 웹 css 가이드

---

반응형 웹을 위해서는 기존에 자주 사용하던 단위인 px 대신에 **상대 단위**를 사용해야 합니다.

상대 단위는 **%, em, rem, vh, vw, vmin, vmax, ex, ch 등** 매우 다양하게 있습니다.

코드에서 이 모든 상대 단위를 뒤섞어서 쓸 경우에는 반응형 담당자가 breakpoints를 잡기 어려워지므로

네모비 프론트엔드 팀에서 반응형을 위해 사용할 상대 단위를 정리합니다.

---

### 네모비 프론트엔드가 사용할 상대 단위

**{%, rem, em}**

1. %: 전체 globalWrapper의 padding, width, 그리고 각각 개별 태그(div, section 등)의 넓이에서 주로 사용됩니다.
2. rem: padding, margin, font-size, height(특별한 경우)에서 사용됩니다.
3. em: 부모 태그 넓이의 영향을 받을 width에 사용합니다.

---

### css property별 써야할 상대 단위 우선순위

1. width: % > auto > rem > em 순으로 우선 적용하여 사용합니다.
2. height: 높이는 되도록이면 전체 글로벌 스타일 외에 적용하지 않는 것이 좋습니다.

그러나 만약에 태그와 같이 작은 component 부품처럼 규격이 필요한 경우에는 height에 rem을 쓰는 것을 권장합니다.

3. padding, margin: % 또는 rem을 사용합니다. (rem이 px에서 계산이 편하므로 되도록이면 rem을 권장합니다.)
4. font-size: rem을 사용합니다.
5. img 태그: width를 100% 하고, property aspect-ratio 사용을 권장합니다.

---

#### css 예시

<!-- prettier-ignore -->
`
    // css example
    export const Example = styled.div`
        width: 30% || auto || 19rem || em 
        height: (되도록이면 쓰지 않음) || rem 
        padding: 1rem
        margin: 1rem 
        font-size: 1rem
    `

    export const ImgExample = styled.img`
        width: 100%
        aspect-ratio: 1/1 // ex) 16/9, 9/16, ...
    `

`

#### px에서 rem으로 계산해주는 사이트: <https://nekocalc.com/px-to-rem-converter>

---

## 프론트엔드 src-styles 내 공통 css 이용 가이드

---

## 1) globalStyles.ts 가이드

---

### display flex 공통 css

1. 변수 flexRow: css의 {display: "flex"} 속성과 {flex-direction: "row"} 속성 두 가지를 함께 사용할 수 있습니다.
   <!-- prettier-ignore -->
   `
    // 예)
        export const Example = styled.div`
            ${flexRow}
            // {display: flex; flex-direction: row;}를 넣은 것과 같음
            // 추가로 justify-content, align-item property를 넣어서 방향 조절도 가능함. 
        `
    `

2. 변수 flexColumn: css의 {display: "flex"} 속성과 {flex-direction: "column"} 속성 두 가지를 함께 사용할 수 있습니다.

위의 flexRow 사용 방식이 같습니다.

3. 변수 flexCenter: css의 { display: flex; justify-content: center; align-items: center;} 속성을 함께 사용할 수 있습니다.
   <!-- prettier-ignore -->
   `
   // 예)
        export const Example = styled.div`
            ${flexCenter}
        `
    `

---

## 2) colorPalettes.ts 가이드

---

네모비 디자인 컬러팔레트의 색깔을 공통 변수로 export한 파일입니다.

---

### 사용 예시

<!-- prettier-ignore -->
    ` 
        export const Example = styled.button`
            background-color: ${deepGreen} // #1f3d31 입력
            color: ${white} // #fff 입력
        ` 
    `

---

## 3) colorBases.ts 가이드

---

전체 디자인에서 가장 흔하게 사용되는 컬러 조합을 모아놓은 파일입니다.

---

### 사용 예시

<!-- prettier-ignore -->
    ` 
        export const Example = styled.button`
            ${colorBase04}
            // color: ${amazon}; <= from colorPalettes.ts 
            // background-color: white; 
        ` 
    `
