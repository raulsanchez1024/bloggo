---
title: My thoughts on Styled Components
date: "2018-12-04T22:12:03.284Z"
readingTime: "5 min"
---

So I've known about Styled Components for a while now. Never really gave them a chance because
I didn't see the need to. Plus, the thought of having my HTML, JS, and CSS all in one file kind
of scared me away 🙅‍♂️. I finally got a chance to use them when I purchased [Wes Bos\' Advanced React & GraphQL Course](https://advancedreact.com/).
My initial response went something like this 👇

![gif](https://media.giphy.com/media/l41lQpaXZo7GGWD0k/giphy.gif)


Despite my negative response. I quickly saw the value of using Styled Components. The syntax is actually clean,
having CSS embedded on your .jsx file(s) is actaully convinient, and not to mention the theme provider is awesome.

1. Clean Sytntax

```javascript
const Categories = styled.div`
  display: flex;
  flex-direction: row;
`;
```

2. Easy to create a theme

```javascript
const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;
```

These two reasons were enough to convince me to use it in my next project.

Overall, I say anyone interested in React.js should definetly give Styled Components a try. 🙂
