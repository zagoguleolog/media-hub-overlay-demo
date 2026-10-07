# Media Hub Android Overlay Lab

Прозрачная статическая HTML-страница для проверки Android WebView Overlay Layer:

- glass-плашки и разные уровни opacity;
- `backdrop-filter` / `-webkit-backdrop-filter` с fallback;
- лёгкие CSS-анимации и поддержка `prefers-reduced-motion`;
- safe-area frame, прицел, ticker и индикатор viewport;
- `pointer-events: none`, чтобы overlay не перехватывал управление базовым контентом.

Открывайте `index.html` через HTTP(S). Для принудительного отключения анимации добавьте `?motion=0`.

## Android WebView

Прозрачность страницы требует прозрачного native WebView (`setBackgroundColor(Color.TRANSPARENT)`) и аппаратного композитинга. CSS `backdrop-filter` гарантированно размывает элементы внутри документа; размытие отдельной native video surface под WebView зависит от реализации Android compositor, поэтому блок `Backdrop test` содержит собственную движущуюся подложку.

## Локальный запуск

```text
npx serve .
```

Или используйте любой статический HTTP-сервер. Сборка не требуется.

## Лицензия

MIT.
