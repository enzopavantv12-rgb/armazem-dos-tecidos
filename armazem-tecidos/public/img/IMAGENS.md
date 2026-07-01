# Imagens — ARMAZEM | TECIDOS

## Disponíveis (4 fotos reais)

| Arquivo | Dimensões originais | Uso no site |
|---|---|---|
| `hero-galpao.jpg` | ~3000×4000 | Hero (lado direito split) + Galeria col esquerda tall |
| `galeria-tricoline.jpg` | ~3024×4032 | Tecidos (card Tricoline) + Galeria top center |
| `galeria-malha.jpg` | ~3024×4032 | Tecidos (card Malha) + Galeria bottom wide |
| `galeria-brim.jpg` | ~3024×4032 | Tecidos (card Brim) + Galeria top right |

## Pendentes (fotos a tirar ou selecionar dos HEICs)

| Arquivo esperado | Descrição | Seção |
|---|---|---|
| `tecido-viscose.jpg` | Close de tecido Viscose — caimento, textura fina | Card Viscose |
| `tecido-retalhos.jpg` | Mesa ou caixa com retalhos sortidos | Card Retalhos |
| `og-hero.jpg` | Versão landscape 1200×630 do hero (para Open Graph) | Meta tag og:image |

## HEICs disponíveis para converter
Os arquivos abaixo estão em `public/imagens_site/` e precisam ser convertidos para JPEG:
- `38C3316A-...HEIC`
- `5A79172D-...HEIC`
- `769DD1AD-...HEIC`
- `D252D89F-...HEIC`
- `IMG_1375.HEIC` a `IMG_1392.HEIC`

**Conversão:** Use `ffmpeg -i input.heic output.jpg` ou ImageMagick `magick convert input.heic output.jpg`.

## Otimização para produção
Antes do deploy, redimensionar e comprimir:
- Hero: 1920×1080 máx, JPEG 85%
- Cards de tecido: 800×600, JPEG 85%
- Galeria: 1200×800 máx, JPEG 80%
- Ferramenta sugerida: `sharp`, `squoosh`, ou `imagemagick`
