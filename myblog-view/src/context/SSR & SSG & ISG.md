next.js提供了三个api以供我们进行SSR和SSG

- getStaticProps(SSG)
- getStaticPaths(SSG)
- getServerSideProps(SSR)
## getStaticProps
用于服务端静态生成，用法同`getServerSideProps`，只不过`getStaticProps`是在build时运行。
通常会搭配`getStaticPaths`来使用
例：
```typescript
export const getStaticProps: GetStaticProps<any, any> = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (data) => data.json()
  );
  return {
    props: { data: res },
  };
};
```
## getStaticPaths
用于服务端静态生成，`getStaticProps`会根据此函数的返回值来生成静态页面。
例：
```typescript
export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "35" } }],
    fallback: false
  };
}
```

- fallback

如果fallback传入false，则只要不在getStaticPaths静态生成范围内的页面都会返回404
如果fallback传入blocking，则只要不在getStaticPaths里的路径会退化到serverSideRendering，直接给他生成一个新页面
