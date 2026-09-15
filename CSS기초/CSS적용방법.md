적용 방법 (1) - 인라인 스타일
```html
<p style="color: red;">이 글자는 빨간색입니다.</p>
```
적용 방법 (2) - 내부 스타일
```html
<style>
  p
  {
    color: blue;
    font-size: 20px;
  }
</style>
```
적용 방법 (3) - 외부 스타일
```html
// html 파일
<link rel="stylesheet" href="style.css">
```
```css
// css 파일
p
{
  color: green;
  font-size: 15px;
}
```