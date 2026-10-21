# Como Publicar Gratuitamente no GitHub Pages (Passo a Passo)

Este guia ensina como colocar o site **Matemática em Movimento** no ar gratuitamente através do **GitHub Pages**, sem pagar nada e sem precisar cadastrar cartão de crédito ou conta de faturamento.

---

## Opção 1: Upload Direto no GitHub (Método mais rápido - 2 minutos)

1. **Baixe o arquivo ZIP**:
   - Clique no botão **"Baixar Pacote ZIP"** no topo da página ou use o arquivo `matematica-em-movimento.zip`.
   - Descompacte o arquivo `.zip` no seu computador. Você verá uma pasta com os arquivos: `index.html`, `geometria/`, `funcoes/`, `numeros/`, `estatistica/`, `trigonometria/`, `probabilidade/`, `assets/`, etc.

2. **Crie um repositório no GitHub**:
   - Acesse [github.com](https://github.com) e entre na sua conta (crie uma gratuita se ainda não tiver).
   - Clique no botão verde **"New"** (ou acesse `github.com/new`).
   - Escolha um nome para o repositório, por exemplo: `matematica-em-movimento`.
   - Marque como **Public** (Público).
   - Marque a caixa **"Add a README file"**.
   - Clique em **"Create repository"**.

3. **Suba os arquivos**:
   - Na página do seu repositório recém-criado, clique em **"Add file"** > **"Upload files"**.
   - Arraste todos os arquivos e pastas de dentro da pasta descompactada para a tela do GitHub (certifique-se de que o arquivo `index.html` fique na raiz do repositório).
   - Clique no botão verde **"Commit changes"** no rodapé.

4. **Ative o GitHub Pages**:
   - No topo do seu repositório, clique na aba **Settings** (Configurações).
   - No menu lateral esquerdo, clique em **Pages**.
   - Em **Build and deployment** > **Source**, selecione:
     - Branch: `main` (ou `master`)
     - Pasta: `/ (root)`
   - Clique em **Save**.

5. **Pronto!**:
   - Em cerca de 1 a 2 minutos, o GitHub exibirá o link público gratuito no topo da página:
     `https://seu-usuario.github.io/matematica-em-movimento/`
   - Você pode enviar esse link para qualquer professor, aluno ou coordenador, e ele funcionará para sempre sem custos.

---

## Opção 2: Publicação com GitHub Actions (Para quem usa Git)

Se você preferir clonar e enviar o projeto via Git terminal:

1. O repositório já contém o arquivo `.github/workflows/deploy.yml`.
2. Basta criar o repositório no GitHub e fazer o push:
   ```bash
   git init
   git add .
   git commit -m "Matemática em Movimento"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/matematica-em-movimento.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings** > **Pages** e mude a fonte para **GitHub Actions**. O site será compilado e publicado automaticamente.

---

## Vantagens do GitHub Pages
- **100% Gratuito para sempre**: Sem limites de teste e sem cobranças surpresa.
- **Não requer cartão de crédito**: Nenhum dado financeiro é solicitado.
- **Rápido e Estável**: Hospedado na CDN global da Microsoft/GitHub com HTTPS seguro automático.
- **Compatível**: Funciona perfeitamente em celulares, tablets, computadores e lousas digitais.
