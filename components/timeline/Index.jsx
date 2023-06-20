import { FaUserGraduate, FaNetworkWired, FaGraduationCap } from "react-icons/fa"
import TimelineCard from './timelineCard/index';
import "./style.css"

export default function Timelines() {

  return (
    <div className="container pl-7 pr-14 md:pl-4 md:pr-4 mt-5">
      <div className="flex w-full justify-center mb-5">
        <h1 className="text-3xl">Formações</h1>
      </div>
      <div className="main-timeline">
        <TimelineCard descricao="Fundamentos de Redes incluindo os tipos de redes (LAN, WAN, MAN) etopologias de rede, Protocolos de Rede como o TCP/IP, DHCP, DNS, SMTP, HTTP, FTP, entre outros.Infraestrutura de Rede como switches, roteadores, firewalls e access points. " titulo="Técnico de redes e computadores" ano="2015"><FaNetworkWired/></TimelineCard>
        <TimelineCard descricao="Possuo sólidos conhecimentos nas áreas de programação, desenvolvimento de software, análise de sistemas e engenharia de software. Através do curso, obtive habilidades em linguagens de programação, como Java, C#, Python e JavaScript, além de experiência na criação de aplicações web utilizando frameworks como Angular e React. Adquiri também conhecimentos em bancos de dados, metodologias ágeis, análise de requisitos e gerenciamento de projetos. " titulo="Tecnólogo Analise e Desenvolvimento de Sistemas" ano="2020"><FaUserGraduate/></TimelineCard>
        <TimelineCard descricao="Modelar e automatizar processos de negócios com BPM e RPA; Desenvolver interfaces web e mobile (nativa e híbrida) aplicando UX Design; Desenvolver aplicações para Cloud com Microservices, Serverless e Big Data; Entender e Aplicar Cybersecurity; Dominar a integração e a eficiência do ciclo continuado; Entender e aplicar metodologias ágeis; Soft Skills em Comunicação, Negociação e PNL; Dominar o Full Cycle: Arquitetura, Desenvolvimento, Testes, Deploy e correção de eventuais problemas." titulo="MBA Full Stack Developer" ano="2022"><FaGraduationCap/></TimelineCard>
      </div>
    </div>
  );
}


