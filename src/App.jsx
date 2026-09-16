import React from 'react'
import { projectsData } from './data/projects'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-purple-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Cabeçalho */}
        <header className="border-b border-purple-900/60 pb-6">
          <h1 className="text-4xl font-bold text-white">Nikelly Santiago</h1>
          <p className="text-purple-300 mt-2 text-lg">
            Estudante de Ciência de Dados
          </p>
        </header>

        {/* Seção Sobre Mim / Resumo */}
        <section className="bg-purple-950/40 border border-purple-900/60 rounded-xl p-6 shadow-xl space-y-4">
          <h2 className="text-2xl font-semibold text-white">Sobre Mim</h2>
          
          {/* Subtítulo / Tagline */}
          <p className="text-amber-400 font-medium text-base">
            Cientista de Dados & Desenvolvedora Back-End/AI graduanda pela UFC. Atuante na construção de aplicações com arquitetura RAG, integração de LLMs e aplicações web full-stack. Vencedora do 1º lugar no Hackathon UFC Inovando 2025 com o Projeto Racionaliza.
          </p>

          <hr className="border-purple-900/50" />

          {/* Resumo Completo */}
          <div className="text-purple-300/90 text-sm leading-relaxed space-y-3">
            <p>
              Sou graduanda em <strong className="text-white font-semibold">Ciência de Dados</strong> pela Universidade Federal do Ceará (UFC), com conclusão prevista para 2028. Atua no desenvolvimento de soluções de <strong className="text-white font-semibold">Inteligência Artificial, Engenharia de Software e Análise de Dados</strong>, unindo fundamentação estatística à construção de produtos tecnológicos de alto impacto.
            </p>
            <p>
              Fui desenvolvedora back-end e coordenadora técnica no <strong className="text-white font-semibold">Projeto Racionaliza</strong>, sistema de IA para gestão patrimonial que conquistou o <strong className="text-white font-semibold">1º lugar geral no Hackathon UFC Inovando</strong>. Possuo experiência prática no desenvolvimento de arquiteturas RAG (<em>Retrieval-Augmented Generation</em>), orquestração de LLMs com LangChain, bancos vetoriais (FAISS), desenvolvimento web full-stack (Node.js, Express, React, Next.js, Tailwind CSS) e automações de fluxos de trabalho.
            </p>
            <p>
              Além do desenvolvimento de software, acumulo participação ativa em competições de dados e eventos científicos nacionais (como SINAPE, Datathons e SBBD & BRACIS), aplicando aprendizado de máquina, redes neurais e modelagem preditiva para a resolução de problemas complexos do mundo real.
            </p>
          </div>
        </section>

        {/* Seção de Projetos */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Projetos em Destaque</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className="bg-purple-950/40 border border-purple-900/60 rounded-xl p-6 shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 text-white">{project.title}</h3>
                  <p className="text-purple-300/80 text-sm mt-2">{project.description}</p>
                  
                  {/* Tags de Tecnologias */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-purple-900/50 text-purple-200 px-2.5 py-1 rounded-md border border-purple-800/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-purple-900/50 text-sm font-medium">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-purple-200 hover:text-amber-400 transition-colors"
                    >
                      Repositório GitHub 
                    </a>
                  )}
                  {project.deployUrl && (
                    <a 
                      href={project.deployUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-amber-400 hover:underline"
                    >
                      Acessar Projeto
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}