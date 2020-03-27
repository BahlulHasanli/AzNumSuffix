# SuffixClass
 Sıra və İl üçün son şəkilçi classı
 
> Bu class vasitəsi ilə daxil etdiyiniz hər hansı rəqəmin sonuna əsasən `cı, cı, cu və cü` şəkilçiləri əlavə edir. Bundan əlavə rəqəmin sonuna `.symbol()` əlavə edərək `-` işarəsi, `.symbolYear()` əlavə edərək `cı il` əlavə etmiş olursunuz.

```javascript
const suffix = new Suffix();

console.lgo(suffix.suffix(2020).symbol().symbolYear().get());
// 2020 - ci il
```
