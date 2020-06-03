![last commit badge](https://badgen.net/github/last-commit/fddaineze/whatsapp-audio-accelerator) ![license badge](https://badgen.net/github/license/fddaineze/whatsapp-audio-accelerator) ![commits badge](https://badgen.net/github/commits/fddaineze/whatsapp-audio-accelerator) ![github badge](https://badgen.net/badge/icon/github?icon=github&label)


## Whatsapp Audio Accelerator

Extensão do google chrome para acelerar os audios do whatsapp em 1.5x e 2x

### Download

Você pode realizar o download da última versão através [DESTE LINK](https://drive.google.com/uc?export=download&id=1-m1ODwSwOl7LYktHoQG0GwsFtbABJTTU).

**Instalação**

1. Salve a pasta da extensão em seu computador e a descompacte.
2. Acesse chrome://extensions/.
3. No canto superior direito, ative o Modo do desenvolvedor.
4. Clique em Carregar sem compactação.
5. Encontre e selecione a pasta do app ou extensão.
6. Verifique ao lado da barra de endereço se ele foi carregado e funciona corretamente.

**Como funciona**

Ela adiciona 2 novos botões acima da conversa utilizando DOM, seu listener altera o playbackRate dos audios disponíveis na tela pela tag audio, utilizada pelo whatsapp.

```js
const audios = document.querySelectorAll("audio");
audios.forEach((audio) => {
    audio.playbackRate = x;
});
```

Como um adicional, decidi adicionar a classe "Dark" ao body, que atualmente já troca todo o tema do whatsapp para o tema dark.

```js
// web: padrão / dark: tema
document.body.className = 'web dark';
```

A Class usada para adicionar os botões é a class utilizada no header de perfil
> _1QUKR
