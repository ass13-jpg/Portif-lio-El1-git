# Reflexão Pessoal sobre o Uso do Git 🧠
A transição da teoria para a prática com o Git me trouxe alguns aprendizados importantes, visto que, ver teoricamente faz com que obtenhamos o conhecimento, mas utilizar na prática tem o efeito de observar a coisa acontecer, criando uma experiência única para futuros projetos.

**O que achei mais interessante:**
A organização através de branches e o uso do Pull Request no GitHub. Ver visualmente o código saindo de uma branch de teste (feature) e sendo mesclado na `main` de forma segura ajuda muito a entender como equipes grandes conseguem trabalhar no mesmo código sem quebrar tudo.

**O maior desafio:**
A resolução de conflitos (ex03) e o entendimento inicial do fluxo de envio da branch padrão para o GitHub. Ver o terminal avisando sobre conflitos assusta no começo, mas entender as marcações (`<<<<<<<`, `=======`, `>>>>>>>`) e limpar o código manualmente me deu mais segurança para não ter medo de quebrar o histórico.

**Sobre Commits Semânticos:**
No início parece trabalho extra pensar no prefixo (`feat`, `fix`, `docs`, etc.), mas ao olhar o `git log --oneline`, a história do projeto fica infinitamente mais clara e profissional.

# Registro de Resolução de Conflito

**1. O que causou o conflito:**
O conflito ocorreu no arquivo `projeto/hello-world/app.js`. 
Ele foi causado porque a branch `main` (que já tinha recebido o merge da branch `feat/tema-azul`) e a branch `feat/tema-escuro` tentaram adicionar informações diferentes exatamente na mesma linha do arquivo.

O trecho apontado pelo Git ficou assim:
<<<<<<< HEAD
const theme = "azul";
=======
const theme = "escuro";
>>>>>>> feat/tema-escuro

**2. Como decidi qual versão manter:**
Decidi manter a versão da branch `feat/tema-escuro` (`const theme = "escuro";`), pois o modo noturno é o padrão de design que escolhi para o projeto. Para isso, abri o arquivo no editor de código, apaguei as marcações do Git (`<<<<<<<`, `=======`, `>>>>>>>`) e a linha do tema azul, salvando o arquivo apenas com a linha do tema escuro.

**3. Comando/ação usada para marcar o conflito como resolvido:**
Após editar e salvar o arquivo resolvido manualmente, abri o terminal e utilizei os comandos de staging e commit para avisar ao Git que o conflito estava superado:
- `git add .` (para adicionar a versão corrigida na área de preparação)
- `git commit -m "fix(ex03): resolve conflito de cores entre tema azul e escuro"` (para finalizar o processo de merge)