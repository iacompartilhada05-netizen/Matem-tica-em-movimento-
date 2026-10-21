import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          somaAngulos: path.resolve(__dirname, 'geometria/soma-angulos.html'),
          pitagoras: path.resolve(__dirname, 'geometria/pitagoras.html'),
          afim: path.resolve(__dirname, 'funcoes/afim.html'),
          quadratica: path.resolve(__dirname, 'funcoes/quadratica.html'),
          circulo: path.resolve(__dirname, 'trigonometria/circulo.html'),
          moedasDados: path.resolve(__dirname, 'probabilidade/moedas-dados.html'),
          leiDosGrandesNumeros: path.resolve(__dirname, 'probabilidade/lei_dos_grandes_numeros.html'),
          mediaMedianaModa: path.resolve(__dirname, 'estatistica/media_mediana_moda.html'),
          dispersao: path.resolve(__dirname, 'estatistica/dispersao.html'),
          graficosEstatisticos: path.resolve(__dirname, 'estatistica/graficos_estatisticos.html'),
          fracoesEquivalentes: path.resolve(__dirname, 'numeros/fracoes_equivalentes.html'),
          operacoesComFracoes: path.resolve(__dirname, 'numeros/operacoes_com_fracoes.html'),
          relacaoEuler: path.resolve(__dirname, 'geometria/relacao_de_euler.html'),
          trianguloRetangulo: path.resolve(__dirname, 'trigonometria/triangulo_retangulo.html'),
          semelhancaTriangulos: path.resolve(__dirname, 'geometria/semelhanca_de_triangulos.html'),
          solidosGeometricos: path.resolve(__dirname, 'geometria/solidos_geometricos.html'),
          conjuntosNumericos: path.resolve(__dirname, 'numeros/conjuntos_numericos.html'),
          balancaEquacoes: path.resolve(__dirname, 'funcoes/balanca_de_equacoes.html'),
          jurosSimplesCompostos: path.resolve(__dirname, 'funcoes/juros_simples_compostos.html'),
          teoremaTales: path.resolve(__dirname, 'geometria/teorema_de_tales.html'),
        },
      },
    },
  };
});
